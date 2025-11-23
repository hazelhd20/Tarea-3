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

$(".btn_ancla").click(function () {
    $("#nav-menu").toggleClass('abrir-menu');
});
