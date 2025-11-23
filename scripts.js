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
