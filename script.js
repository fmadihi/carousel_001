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
            slidesPerview: 3
        },
        768: {
            slidesPerview: 3
        },
        1024: {
            slidesPerview: 3
        },
        1600: {
            slidesPerview: 3.6
        }
    }
});
