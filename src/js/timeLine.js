var owl = $('.owl-carousel');
owl.owlCarousel({
    // center: true,
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            // nav: true,
            loop: true
        },
        476: {
            items: 2,
            // nav: true,
            loop: true
        },
        1000: {
            items: 3,
            // nav: true,
            loop: true
        },
        1475: {
            items: 4,
            // nav: true,
            loop: true
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