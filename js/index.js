(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');
  const menuLabel = menuButton?.querySelector('.sr-only');

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      if (menuLabel) menuLabel.textContent = 'Abrir menu';
    };

    menuButton.addEventListener('click', () => {
      const nextOpen = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(nextOpen));
      navigation.classList.toggle('is-open', nextOpen);
      document.body.classList.toggle('menu-open', nextOpen);
      if (menuLabel) menuLabel.textContent = nextOpen ? 'Fechar menu' : 'Abrir menu';
    });

    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
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
  const locationVideo = document.querySelector('[data-location-video]');

  motion.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.registerPlugin(ScrollTrigger);

    if (!locationVideo) return undefined;

    let isVisible = false;
    const syncPlayback = () => {
      if (isVisible && document.visibilityState === 'visible') {
        locationVideo.play().catch(() => {});
      } else {
        locationVideo.pause();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.35 });

    observer.observe(locationVideo);
    document.addEventListener('visibilitychange', syncPlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      locationVideo.pause();
    };
  });

  motion.add('(prefers-reduced-motion: reduce)', () => {
    if (!locationVideo) return undefined;
    locationVideo.pause();
    locationVideo.currentTime = 0;
    return undefined;
  });

  motion.add('(prefers-reduced-motion: no-preference) and (min-width: 761px)', () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.motion-image').forEach((figure) => {
      gsap.fromTo(figure,
        { scale: 0.88, opacity: 0.62 },
        {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: figure,
            start: 'top 92%',
            end: 'center 52%',
            scrub: true
          }
        }
      );

      gsap.to(figure, {
        opacity: 0.28,
        filter: 'brightness(0.56)',
        ease: 'none',
        scrollTrigger: {
          trigger: figure,
          start: 'bottom 48%',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    const panels = gsap.utils.toArray('.service-panel');
    panels.forEach((panel, index) => {
      if (index === panels.length - 1) return;
      gsap.to(panel, {
        scale: 0.92 + index * 0.025,
        opacity: 0.48,
        filter: 'brightness(0.66)',
        ease: 'none',
        scrollTrigger: {
          trigger: panel,
          start: `top ${120 + index * 22}px`,
          endTrigger: panels[panels.length - 1],
          end: 'top 22%',
          scrub: true
        }
      });
    });
  });
})();
