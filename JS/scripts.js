// Open panel menu "Accedi"
document.addEventListener('DOMContentLoaded', () => {
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

// Open panel menu "Dove"
document.addEventListener('DOMContentLoaded', () => {
  const placeInput = document.getElementById('place-search');
  const placePanel = document.querySelector('.place-panel');

  placeInput.addEventListener('click', () => {
    placePanel.classList.toggle('hidden');
  });

  // Optional: Close the panel when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.place')) {
      placePanel.classList.add('hidden');
    }
  });
});