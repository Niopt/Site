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
// ViDEO
const videoInit = (selector) => {
  const videos = document.querySelectorAll(selector);

  if(videos.length > 0) {
      videos.forEach(video => [
        videoGenerate(video)
      ])
  }
}

const videoGenerate = (video) => {
  const btn = video.querySelector('.play-btn');
  const videoID = btn.dataset.videoId
  const container = video.querySelector('.play-btn')

  btn.addEventListener('click' , () => {
    const iframe = iframeGenerate(videoID)
    container.innerHTML = '';
    container.appendChild(iframe)
    console.log(iframe)
  })

}

const iframeGenerate = (videoID) => {
  const iframe = document.createElement('iframe')
  const src = `https://www.youtube.com/embed/${videoID}`
  iframe.setAttribute('src' , src);
  iframe.setAttribute('frameborder' , '0');
  iframe.setAttribute('allow' , '0');
  iframe.classList.add('play-btn');
  return iframe
}

videoInit('.scr_video_milt')