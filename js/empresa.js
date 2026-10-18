(() => {
  document.documentElement.classList.add('js');

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  if (menuButton && navigation) {
    const menuLabel = menuButton.querySelector('.sr-only');
    const closeMenu = (restoreFocus = false) => {
      menuButton.setAttribute('aria-expanded', 'false');
      if (menuLabel) menuLabel.textContent = 'Abrir menu';
      navigation.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      if (restoreFocus) menuButton.focus();
    };

    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      if (menuLabel) menuLabel.textContent = open ? 'Fechar menu' : 'Abrir menu';
      navigation.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
    });

    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
  }

  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const slides = [...carousel.querySelectorAll('[data-slide]')];
    const count = carousel.querySelector('[data-carousel-count]');
    let activeIndex = 0;

    const showSlide = (nextIndex) => {
      activeIndex = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, index) => {
        const active = index === activeIndex;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-current', active ? 'true' : 'false');
      });
      count.textContent = `${activeIndex + 1} de ${slides.length}`;
    };

    carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => showSlide(activeIndex - 1));
    carousel.querySelector('[data-carousel-next]').addEventListener('click', () => showSlide(activeIndex + 1));
    showSlide(0);
  }

  if (!window.gsap || !window.ScrollTrigger) return;

  const wrapWords = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue.trim()) textNodes.push(walker.currentNode);
    }

    textNodes.forEach((node) => {
      const fragment = document.createDocumentFragment();
      node.nodeValue.split(/(\s+)/).forEach((token) => {
        if (/^\s+$/.test(token)) {
          fragment.appendChild(document.createTextNode(token));
        } else if (token) {
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = token;
          fragment.appendChild(span);
        }
      });
      node.replaceWith(fragment);
    });
  };

  const motion = gsap.matchMedia();

  motion.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('[data-scrub-text]').forEach((copy) => {
      wrapWords(copy);
      gsap.fromTo(copy.querySelectorAll('.word'),
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.045,
          ease: 'none',
          scrollTrigger: {
            trigger: copy,
            start: 'top 84%',
            end: 'bottom 50%',
            scrub: true
          }
        }
      );
    });
  });

  motion.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set('.journey-card, .scrub-copy .word', { clearProps: 'all' });
  });
})();
