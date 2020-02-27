// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// Open and close gate animation
$(".open_close_doors").click(function () {

    // follow link after 6 seconds TODO: change link to BIO/About me instead of privacy after test
    $(function () {
        setTimeout(function () {
            window.location.href = "/Home/Privacy";
        }, 6000);
    });

    // move the left and right gate-closed to outwards
    $("#leftdoor_inner").animate({ "left": "-=15%" }, "slow");
    $("#rightdoor_inner").animate({ "left": "+=15%" }, "slow");
    $("#leftdoor_outer").animate({ "left": "-=100%" }, "slow");
    $("#rightdoor_outer").animate({ "left": "+=100%" }, "slow");
    // remove the closed gates from display
    $(".open_close_doors").addClass("hidden");

    // add the hidden class to the closed doors image
    $("#rightdoor_open").addClass("rightdoor_open").delay(2000).queue(function (next) {
        $(this).removeClass("rightdoor_open");
        next();
    });
});



// once doors moved outwards then deactivate the gate closs class and reveal open gate class
    // Also show profile About me Info

// assign co-ordinates of the closed gate after it's class has been removed
var right_close = document.getElementById('rightdoor_inner');
var right_open = document.getElementsByClassName('rightdoor_open');

right_open.style.position = "absolute";
right_open.style.left = x_pos + 'px';
right_open.style.top = y_pos + 'px';

var left_close = document.getElementById('leftdoor_inner');
var left_open = document.getElementsByClassName('leftdoor_open');
left_open .style.position = "absolute";
left_open .style.left = x_pos + 'px';
left_open .style.top = y_pos + 'px';