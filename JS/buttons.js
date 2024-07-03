document.addEventListener('DOMContentLoaded', () => {
  const scrollLeftFlts = document.getElementById('left-scroll-flts');
  const scrollRightFlts = document.getElementById('right-scroll-flts');
  const scrollFilters = document.querySelector('.scroll-filters');

  function buttonsVisibility() {
    const scrollLeftVisible = scrollFilters.scrollLeft > 0;
    const scrollRightVisible =
      scrollFilters.scrollLeft <
      scrollFilters.scrollWidth - scrollFilters.clientWidth - 1;

    document
      .querySelector('.button-container-left')
      .classList.toggle('visible', scrollLeftVisible);
    document
      .querySelector('.button-container-right')
      .classList.toggle('visible', scrollRightVisible);
  }

  scrollLeftFlts.addEventListener('click', () => {
    scrollFilters.scrollBy({ left: -300, behavior: 'smooth' });
  });

  scrollRightFlts.addEventListener('click', () => {
    scrollFilters.scrollBy({ left: 300, behavior: 'smooth' });
  });

  scrollFilters.addEventListener('scroll', buttonsVisibility);
  
  buttonsVisibility();
});
