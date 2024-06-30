document.addEventListener('DOMContentLoaded', () => {
  const searchbar = document.querySelector('.search-bar');
  const links = document.querySelector('.middle-links');
  const threshold = 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY > threshold) {
      links.classList.add('links-scroll');
      searchbar.classList.add('search-scroll');
    } else {
      links.classList.remove('links-scroll');
      searchbar.classList.remove('search-scroll');
    }
  });
});
