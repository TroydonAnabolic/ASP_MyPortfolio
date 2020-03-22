// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Play sound when gate is opened
function playAudio(url) {
    new Audio(url).play();
}

// Open and close gate animation
$(".open_close_doors").click(function () {

    //follow link after 2 seconds after opening the gate
    $(function () {
        setTimeout(function () {
            window.location.href = "/Home/Bio";
        }, 2000);
    });

    // move the left and right gate-closed to outwards
    $("#leftdoor_inner").animate({ "left": "-=15%" }, "slow");
    $("#rightdoor_inner").animate({ "left": "+=15%" }, "slow");
    $("#leftdoor_outer").animate({ "left": "-=100%" }, "slow");
    $("#rightdoor_outer").animate({ "left": "+=100%" }, "slow");
    // remove the closed gates from display
    $(".open_close_doors").addClass("hidden");
    $("#leftdoor_inner").addClass("hidden");
    $("#rightdoor_inner").addClass("hidden");

    // add the hidden class to the closed doors image
    $("#rightdoor_open").addClass("rightdoor_open").delay(2000).queue(function (next) {
        $(this).removeClass("rightdoor_open");
        next();
    });
    $("#leftdoor_open").addClass("leftdoor_open").delay(2000).queue(function (next) {
        $(this).removeClass("leftdoor_open");
        next();
    });
});

// When we click the power icon we EXPAND the menu bar to show the menu items 
var windowWidth = $(window).width();
var windowHeight = $(window).height();

// list devices
const iPh6_7_8Land = (windowWidth == 736 && windowHeight == 414), iPh6_7_8Potr = (windowWidth == 414 && windowHeight == 736),
    iPhonXLand = (windowWidth == 812 && window.devicePixelRatio.toFixed(0) == 3), iPhoneXPotr = (windowWidth == 375 && window.devicePixelRatio.toFixed(0) == 3),
    S7EdLand = (windowWidth == 640 && windowHeight == 360), S7EdPotr = (windowWidth == 360 && windowHeight == 640), 
    S20ULand = (windowWidth == 941 && windowHeight == 423 && window.devicePixelRatio.toFixed(1) == 3.4), S20UPotrait = windowWidth == 423 && window.devicePixelRatio.toFixed(1) == 3.4;


$("#menu-button").click(function () {
    //when the screen width is below 414 px width we expan nav bar by 15% instead
    if (windowWidth <= 414) {
        $("#main-nav").css("width", "15%");
    }
    else if (windowWidth <= 423 && window.devicePixelRatio.toFixed(1) == 3.4) { // if device pixel ratio is 3.4 and window size is 423(S20 potrait)
        $("#main-nav").css("width", "15%");
    }
    else if ((windowWidth <= 736) || iPhonXLand) { // window size less than 736 or iphone x landscape
        $("#main-nav").css("width", "10%");
    }
    else $("#main-nav").css("width", "7%");
    $("#menu-button").hide("fast");
    if (windowWidth <= 736) {
        $("#logo").css("font-size", "1.2rem");
    }
    else if (S20ULand || iPhonXLand) { // S20 landscape or iPhone X
        $("#logo").css("font-size", "1.2rem");
    } else
        $("#logo").css("font-size", "2rem");
    $("#menu-content").removeClass("invisible");
    $("#code-logo").removeClass("invisible");

    // after clicking, we make the mouse button appear again each time it leaves menu
    $("#main-nav").mouseenter(function () {
        $("#menu-button").show("fast");
    });

    // each time the mouse leaves we SHRINK the menu bar and show the button again
    $("#main-nav").mouseleave(function () {
        //when the screen width is below 414 px width we send the nav bar back to normal
        if (windowWidth <= 736) {
            $("#main-nav").css("width", "5%");
        } else
            $("#main-nav").css("width", "2%");
        $("#menu-button").show("fast");
        $("#logo").css("font-size", "1rem");
        $("#menu-content").addClass("invisible");
        $("#code-logo").addClass("invisible");

    });
});

$("#scroll").mouseenter(function () {
    $("#scroll").addClass("scroll-up");
    $("#scroll").mouseleave(function () {
        $("#scroll").removeClass("scroll-up");
    });
});


//Project slideshow anumation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


// when the document loads a page, determine what effect to use for projects depending on device if touch screen or 
$(document).ready(function () {
    // if its a touch screen device in potrait we remove invisibility and push the info box down
    if (S20UPotrait || iPh6_7_8Potr || iPhoneXPotr || S7EdPotr) {
        $(".image-description").css("top", "120%");
        $(".image-description").removeClass("invisible");
    }
    // if its a touch screen device in potrait we remove invisibility and push the info box down
    else if (S20ULand || S7EdLand || iPhonXLand || iPh6_7_8Land) {
        $(".container").css("margin", "3rem");
        $(".image-description").css("left", "120%");
        $(".image-description").removeClass("invisible");

    }
    else
        // Add the photo description over the image when hovered over
        $(".mySlides").mouseenter(function () {


            $(".image-description").removeClass("invisible");
            $(".mySlides").mouseleave(function () {
                $(".image-description").addClass("invisible");
            });
        });
});
// when the window loads, if it is a touch screen then display info box depending on the slide selected, same for other hover effects
//$(document).ready(function () {
//    // hover project image alteration
//    $(".mySlides").mouseenter(function () {
//        if (windowWidth <= 423 && window.devicePixelRatio.toFixed(1) == 3.4) {
//            $(".image-description").removeClass("invisible");
//        } else
//            $(".image-description").removeClass("invisible");
//        $(".mySlides").mouseleave(function () {
//            $(".image-description").addClass("invisible");
//        });
//    });
//});