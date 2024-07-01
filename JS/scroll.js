document.addEventListener('DOMContentLoaded', () => {
  const searchbar = document.querySelector('.search-bar');
  const links = document.querySelector('.middle-links');
  const navbar = document.querySelector('.nav-container')
  const threshold = 1;

  window.addEventListener('scroll', () => {
    if (window.scrollY > threshold) {
      links.classList.add('links-scroll');
      searchbar.classList.add('search-scroll');
      navbar.classList.add('scrolled');
    } else {
      links.classList.remove('links-scroll');
      searchbar.classList.remove('search-scroll');
      navbar.classList.remove('scrolled');
    }
  });
});
