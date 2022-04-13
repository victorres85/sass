var owl = $('.owl-carousel');
owl.owlCarousel({
    // center: true,
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});

// owl[0].addEventListener('mousewheel', e => {
//     if (e.deltaY > 0) {
//         $('.owl-carousel').trigger('next.owl');
//     } else {
//         $('.owl-carousel').trigger('prev.owl');
//     }
//     e.preventDefault();
// }, false);