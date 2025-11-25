new WOW().init();

$(function () {
    $(".rslides").responsiveSlides({
        auto: true,
        nav: true,
        prevText: "‹",
        nextText: "›"
    });
});

// abrir menu
$("#icono-menu").click(function () {
    $("#nav-menu").toggleClass('abrir-menu');
});

$(".btn-ancla").click(function () {
    $("#nav-menu").toggleClass('abrir-menu');
});

Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
});
