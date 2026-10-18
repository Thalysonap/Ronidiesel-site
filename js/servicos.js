(() => {
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
      const words = copy.querySelectorAll('.word');
      gsap.fromTo(words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: copy,
            start: 'top 82%',
            end: 'bottom 48%',
            scrub: true
          }
        }
      );
    });
  });

  motion.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set('.process-card, .scrub-copy .word', { clearProps: 'all' });
  });
})();
