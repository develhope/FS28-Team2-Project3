document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('scroll', function () {
    const threshold = 640;
    const hiddenNavbar = document.querySelector('.hidden-navbar');

    if (window.scrollY > threshold) {
      hiddenNavbar.classList.add('visible');
    } else {
      hiddenNavbar.classList.remove('visible');
    }
  });

  document.addEventListener('scroll', function () {
    const threshold = 1790;
    const afterCalendar = document.querySelector('.show-after-calendar');

    if (window.scrollY > threshold) {
      afterCalendar.classList.add('visible');
    } else {
      afterCalendar.classList.remove('visible');
    }
  });
});
