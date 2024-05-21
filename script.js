// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles

import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: false,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholoelta: 70
    },
    breakpoints: {
        460: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 3.6
        }
    }
});


