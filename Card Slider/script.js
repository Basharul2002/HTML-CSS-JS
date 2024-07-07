document.addEventListener("DOMContentLoaded", function () {
  const projectContainers = document.querySelectorAll(".image-container-project");

  projectContainers.forEach(container => {
      let index = 0;
      const images = container.querySelectorAll(".project-img");

      function showNextImage() {
          images[index].classList.remove("active");
          index = (index + 1) % images.length;
          images[index].classList.add("active");
      }

      images.forEach(img => img.classList.add("fade"));

      setInterval(showNextImage, 3000); // Change image every 3 seconds
  });
});



const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});