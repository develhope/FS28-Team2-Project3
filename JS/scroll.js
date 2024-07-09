document.addEventListener('DOMContentLoaded', () => {
  const searchbar = document.querySelector('.search-bar');
  const miniSearch = document.getElementById('mini-search');
  const miniBtn = document.getElementById('mini-search-container');
  const links = document.querySelector('.middle-links');
  const navbar = document.querySelector('.nav-container');
  const veil = document.getElementById('overlay')
  const threshold = 0;

  function handleScroll() {
    if (window.scrollY > threshold) {
      links.classList.add('links-scroll');
      searchbar.classList.add('search-scroll');
      navbar.classList.add('scrolled');
      miniSearch.classList.add('reveal');
      veil.classList.remove('veil');

    } else {
      links.classList.remove('links-scroll');
      searchbar.classList.remove('search-scroll');
      navbar.classList.remove('scrolled');
      miniSearch.classList.remove('reveal');
    }
  };

  window.addEventListener('scroll', handleScroll);

  miniBtn.addEventListener('click', () => {
    window.removeEventListener('scroll', handleScroll);

    links.classList.remove('links-scroll');
    searchbar.classList.remove('search-scroll');
    navbar.classList.remove('scrolled');
    miniSearch.classList.remove('reveal');
    veil.classList.toggle('veil');

    setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);
  });
  
  veil.addEventListener('click', () => {
    veil.classList.remove('veil');
    links.classList.add('links-scroll');
    searchbar.classList.add('search-scroll');
    navbar.classList.add('scrolled');
    miniSearch.classList.add('reveal');

  })
});