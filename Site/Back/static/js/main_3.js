//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,

  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
    speed: 850,
  });

//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});
//slider video
function changeVideo(url, post) {
    document.getElementById('video-slder').src = url;
    const myVideo = document.getElementById('video-slder');
    myVideo.poster = post;

}
// Video
document.getElementById('video-slder').addEventListener('play', () => {
    document.getElementById('video-sld').style.display = 'none';
});
// Video_2
document.getElementById('video-slder').addEventListener('pause', () => {
    document.getElementById('video-sld').style.display = 'block';
});
//Texst
const textToType = "Гран-при Международного конкурса вокального и ансамблевого мастерства «DE MUSIC AWARD», который проходил в онлайн-формате с 1 по 5 ноября.";
const typingTarget = document.getElementById("write_rand");
let isTypingStarted = false;
let index = 0;

function typeText() {
  if (isTypingStarted && index < textToType.length) {
    typingTarget.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeText, 6); 
  }
}

// Настройка IntersectionObserver
const observerOptions = {
  root: null, // наблюдаем относительно viewport
  threshold: 0.25, // начнем печать, когда элемент станет хотя бы на 25% видим
};

const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isTypingStarted) {
      isTypingStarted = true;
      typeText(); // Начинаем печать текста
    }
  });
};

const observer = new IntersectionObserver(intersectionCallback, observerOptions);
observer.observe(typingTarget);


