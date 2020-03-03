$(window).on('load', function () {

    // add text
    $('#pre-loader').each(function () {
        $(this).before($('<span>').text("Loading..."));
    });

    $("#preloader").addClass(".loader");
    $(".loader").fadeOut("slow");
});