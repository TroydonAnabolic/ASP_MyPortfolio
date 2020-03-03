//$(window).on('load', function () {

//    // add text
//    $('#pre-loader').each(function () {
//        $(this).before($('<span>').text("Loading..."));
//    });

//    $("#preloader").addClass(".loader");
//    $(".loader").fadeOut("slow");

//}); #262626;


    $(document).ready(function() {
        //Preloader
        preloaderFadeOutTime = 3000;
function hidePreloader() {
var preloader = $('.loader');
    preloader.fadeOut(preloaderFadeOutTime);

    $("#loader-wrapper").addClass("loader-wrapper");
    var loadwrapper = $(".loader-wrapper");
    loadwrapper.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });
