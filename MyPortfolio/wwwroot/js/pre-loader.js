//$(window).on('load', function () {

//    // add text
//    $('#pre-loader').each(function () {
//        $(this).before($('<span>').text("Loading..."));
//    });

//    $("#preloader").addClass(".loader");
//    $(".loader").fadeOut("slow");

//});


    $(document).ready(function() {
        //Preloader
        preloaderFadeOutTime = 1000;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });
