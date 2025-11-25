new WOW().init();

$(function () {
    $(".rslides").responsiveSlides({
        auto: true,
        nav: true,
        prevText: "\u2039",
        nextText: "\u203A"
    });

    const $btnSubir = $("#btn-subir");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $btnSubir.addClass("mostrar");
        } else {
            $btnSubir.removeClass("mostrar");
        }
    });

    $btnSubir.on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
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
