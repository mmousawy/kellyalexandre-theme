(function() {
  'use strict';

  const scrollBarWidth = (() => {
    const a = document.createElement('div');
    document.body.appendChild(a).style.overflowY = 'scroll';
    const w = a.offsetWidth - a.clientWidth;
    a.remove();
    return w;
  })();

  const header = document.querySelector('.page-header');
  const main = document.querySelector('main') || header.nextSibling;
  const menuButton = document.querySelector('.menu-button');
  const menuContainer = document.querySelector('.menu-container');
  const menuHolder = document.querySelector('.menu-holder');
  const siteTitle = document.querySelector('.site-title');
  const commissionedContainer = document.querySelector('.menu-container__commissioned .wrap-inside');
  const personalContainer = document.querySelector('.menu-container__personal .wrap-inside');

  menuButton.checked = false;

  menuButton.addEventListener('change', toggleMenu);

  menuHolder.classList.add('is-active');

  if (window.innerWidth > 800) {
    const menuContainerSize = Math.max(commissionedContainer.offsetHeight, personalContainer.offsetHeight);
    commissionedContainer.style.height = personalContainer.style.height = `${menuContainerSize}px`;
  }

  function toggleMenu() {
    document.body.classList.toggle('no-scroll');
    menuContainer.classList.toggle('no-scroll');
    header.classList.toggle('is-open');
    menuHolder.classList.toggle('is-open');
    siteTitle.classList.toggle('is-inverted');
    main.classList.toggle('is-blurred');

    if (document.body.classList.contains('no-scroll')) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      header.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.paddingRight = 0;
      header.style.paddingRight = 0;
    }

    setTimeout(() => {
      menuHolder.classList.toggle('show-items');
    }, 300);
  }

  /**
   * Throttled and debounced scroll handler
   */

  let debounceTimer;
  let debounceTimeOut = 150;
  let throttleTimeOut = 100;
  let prev = 0;

  window.addEventListener('scroll', throttleScroll, { passive: true });

  function throttleScroll() {
    requestAnimationFrame(now => {
      if (now - prev > throttleTimeOut) {
        scrollHandler();

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(scrollHandler, debounceTimeOut);

        prev = now;
      }
    });
  }

  // Handle the scroll event
  function scrollHandler() {
    scrollY = document.documentElement.scrollTop;

    main.style.transformOrigin = `50% ${scrollY + window.innerHeight * .5}px`;
  }

  scrollHandler();

  const preferredMode = window.matchMedia('(prefers-color-scheme: dark)');

  preferredMode.addListener(updateColorScheme);
  updateColorScheme();

  function updateColorScheme(event) {
    let darkMode = false;

    if (!event) {
      darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      darkMode = event.matches;
    }

    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';

    if (darkMode) {
      link.href = '/favicon-light.ico';
    } else {
      link.href = '/favicon.ico';
    }

    document.querySelector('head').appendChild(link);
  }
})();
