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
const textToType = "Хор Николо-Угрешского монастыря был создан одновременно с передачей монастыря Русской Православной Церкви и открытием его в 1991 году и первоначально состоял из монашествующей братии и студентов открытой при монастыре семинарии. В 2000 году хор возглавил и руководил им до 2008 года известный регент и духовный композитор А.Д.Гринченко. Затем главным регентом стал насельник монастыря иеромонах Александр (Богдан), затем - выпускник Московского Хорового Училища им.А.В.Свешникова и Академии хорового искусства (ныне - им. В. С. Попова) С.Ю.Маркелов. Хор, помимо регулярного пения на праздничных богослужениях ведёт концертную деятельность. В разные годы с коллективом сотрудничали такие певцы, как А.Тихомиров (бас), И.Ожогин (тенор) В 2011 году был записан аудиодиск духовной музыки.";
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


