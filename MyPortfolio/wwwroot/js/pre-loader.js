
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
