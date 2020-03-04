
//Preloader
$(document).ready(function () {
    // Set the fade out time to 3 seconds
    preloaderFadeOutTime = 3000;
    function hidePreloader() {
        var preloader = $('.loader');
        preloader.fadeOut(preloaderFadeOutTime);

        // add the wrapper class to timeout too
        $("#loader-wrapper").addClass("loader-wrapper");
        var loadwrapper = $(".loader-wrapper");
        loadwrapper.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});
