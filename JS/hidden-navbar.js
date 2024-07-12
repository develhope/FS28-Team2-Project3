document.addEventListener('scroll', function () {
  const threshold = 640;
  const hiddenNavbar = document.querySelector('.hidden-navbar');

  if (window.scrollY > threshold) {
    hiddenNavbar.classList.add('visible');
  } else {
    hiddenNavbar.classList.remove('visible');
  }
});
