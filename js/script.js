(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  const page = document.body.dataset.page || 'inicio';

  // Mark the current page in both the main menu and footer navigation.
  document.querySelectorAll(`[data-nav="${page}"]`).forEach((link) => {
    link.setAttribute('aria-current', 'page');
  });

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
      navigation.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      navigation.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  // Keep anchor navigation smooth in browsers where CSS scroll-behavior is unavailable.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      history.replaceState(null, '', `#${targetId}`);
    });
  });

  // Reveal content as it enters the viewport; content stays visible without JS.
  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealItems.length) {
    document.documentElement.classList.add('js-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

    revealItems.forEach((item) => revealObserver.observe(item));
  }
})();
