document.addEventListener('DOMContentLoaded', (event) => {
  const menuButton = document.querySelector('.menu-button');
  const userMenu = document.querySelector('.user-menu-open');

  menuButton.addEventListener('click', () => {
    userMenu.classList.toggle('show');
  });

  window.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !userMenu.contains(event.target)) {
      userMenu.classList.remove('show');
    }
  });
});
