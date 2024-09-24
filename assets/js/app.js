function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("show");
}

// Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
});

var swiper2 = new Swiper("#swiperTestimonial", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: "#swiperPagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#swiperNext",
    prevEl: "#swiperPrev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, 
    },
  },
});

// videoplay
const video = document.getElementById("myVideo");

function togglePlay() {
  if (video.paused) {
    video.play();
    document.querySelector(".playsvg").style.display = "none"; // Hide play button
  } else {
    video.pause();
    document.querySelector(".playsvg").style.display = "block"; // Show play button
  }
}

// Optional: Show play button when video is paused
video.onpause = () => {
  document.querySelector(".playsvg").style.display = "block";
};

// Optional: Hide play button when video is playing
video.onplay = () => {
  document.querySelector(".playsvg").style.display = "none";
};