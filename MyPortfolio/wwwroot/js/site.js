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

// When we click the power icon we expand the menu bar to show the menu items 
var windowSize = $(window).width();

$("#menu-button").click(function () {
    //when the screen width is below 414 px width we expan nav bar by 15% instead
    if (windowSize <= 414) {
        $("#main-nav").css("width", "15%");
    }
    else if (windowSize <= 736) {
        $("#main-nav").css("width", "10%");
    }
    else $("#main-nav").css("width", "7%");
    $("#menu-button").hide("fast");
    if (windowSize <= 736) {
        $("#logo").css("font-size", "1.2rem");
    } else
    $("#logo").css("font-size", "2rem");
    $("#menu-content").removeClass("invisible");
    $("#code-logo").removeClass("invisible");


    // after clicking, we make the mouse button appear again each time it leaves menu
    $("#main-nav").mouseenter(function () {
        $("#menu-button").show("fast");
    });

    // each time the mouse leaves we shrink the menu bar and show the button again
    $("#main-nav").mouseleave(function () {
        //when the screen width is below 414 px width we send the nav bar back to normal
        if (windowSize <= 736) {
            $("#main-nav").css("width", "6%");
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

// Add the photo description over the image when hovered over
$(".mySlides").mouseenter(function () {
    $(".image-description").removeClass("invisible");
    $(".mySlides").mouseleave(function () {
        $(".image-description").addClass("invisible");
    });
});

