(function() {
  const menuButton = document.querySelector('.menu-button');
  const menuHolder = document.querySelector('.menu-holder');

  menuButton.checked = false;

  menuButton.addEventListener('change', toggleMenu);

  function toggleMenu() {
    menuHolder.classList.toggle('is-open');
    setTimeout(() => {
      menuHolder.classList.toggle('show-items');
    }, 300);
  }
})();
