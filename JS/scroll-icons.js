document.addEventListener('DOMContentLoaded', () => {
  const scrollLeftFlts = document.getElementById('left-scroll-plcs');
  const scrollRightFlts = document.getElementById('right-scroll-plcs');
  const scrollFilters = document.querySelector('.stay-choices-elements');

  function buttonsVisibility() {
    const scrollLeftVisible = scrollFilters.scrollLeft > 0;
    const scrollRightVisible =
      scrollFilters.scrollLeft <
      scrollFilters.scrollWidth - scrollFilters.clientWidth - 1;

    document
      .querySelector('.button-plcs-container-left')
      .classList.toggle('visible', scrollLeftVisible);
    document
      .querySelector('.button-plcs-container-right')
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