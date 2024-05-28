const headerEl = document.getElementById("header")

window.addEventListener("scroll", function(){
    const scrollPos = window.scrollY

    if(scrollPos > 100){
        headerEl.classList.add("header_mini")
    }else{
        headerEl.classList.remove("header_mini")
    }
})

const slider = document.querySelector('.explore-slider');
const sl = new Swiper(slider, {
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: true,
    speed: 5000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      enabled: true,
    },
  });
