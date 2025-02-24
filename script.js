document.addEventListener('DOMContentLoaded', () => {
  /* Carrusel */
  const carouselContainer = document.querySelector('.carousel-container');
  const images = document.querySelectorAll('.carousel-image');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;
  const totalImages = images.length;
  let carouselInterval;

  function showImage(index) {
    currentIndex = (index + totalImages) % totalImages;
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function showNextImage() {
    showImage(currentIndex + 1);
  }

  function showPrevImage() {
    showImage(currentIndex - 1);
  }

  function startCarousel() {
    carouselInterval = setInterval(showNextImage, 3000);
  }

  function stopCarousel() {
    clearInterval(carouselInterval);
  }

  prevButton.addEventListener('click', showPrevImage);
  nextButton.addEventListener('click', showNextImage);

  startCarousel();

  // Pausar el carrusel cuando el usuario pasa el ratón sobre él
  carouselContainer.addEventListener('mouseenter', stopCarousel);
  carouselContainer.addEventListener('mouseleave', startCarousel);

  /* Menú desplegable */
  document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.dropdown').classList.toggle('show');
  });

  // Cierra el menú si se hace clic fuera
  window.addEventListener('click', function(e) {
    if (!document.querySelector('.dropdown').contains(e.target)) {
      document.querySelector('.dropdown').classList.remove('show');
    }
  });
});
