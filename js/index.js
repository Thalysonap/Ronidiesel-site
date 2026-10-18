(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');
  const menuLabel = menuButton?.querySelector('.sr-only');

  if (menuButton && navigation) {
    const closeMenu = (restoreFocus = false) => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      if (menuLabel) menuLabel.textContent = 'Abrir menu';
      if (restoreFocus) menuButton.focus();
    };

    menuButton.addEventListener('click', () => {
      const nextOpen = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(nextOpen));
      navigation.classList.toggle('is-open', nextOpen);
      document.body.classList.toggle('menu-open', nextOpen);
      if (menuLabel) menuLabel.textContent = nextOpen ? 'Fechar menu' : 'Abrir menu';
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
        slide.hidden = !active;
        slide.classList.toggle('is-active', active);
      });
      count.textContent = `${activeIndex + 1} de ${slides.length}`;
    };

    carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => showSlide(activeIndex - 1));
    carousel.querySelector('[data-carousel-next]').addEventListener('click', () => showSlide(activeIndex + 1));
  }

  if (!window.gsap || !window.ScrollTrigger) return;

  const motion = gsap.matchMedia();

  motion.add('(prefers-reduced-motion: no-preference) and (min-width: 761px)', () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.motion-image').forEach((figure) => {
      gsap.fromTo(figure,
        { scale: 1.035, opacity: 0.82, clipPath: 'inset(10% 0 0 0)' },
        {
          scale: 1,
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          ease: 'none',
          scrollTrigger: {
            trigger: figure,
            start: 'top 92%',
            end: 'center 52%',
            scrub: true
          }
        }
      );

    });
  });
})();
