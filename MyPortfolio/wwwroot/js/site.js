// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// Open and close gate animation
$(".open_close_doors").click(function () {
    // move the left and right gate-closed to outwards
    $("#leftdoor_inner").animate({ "left": "-=125px" }, "slow");
    $("#rightdoor_inner").animate({ "left": "+=125px" }, "slow");
    $("#leftdoor_outer").animate({ "left": "-=1000px" }, "slow");
    $("#rightdoor_outer").animate({ "left": "+=1000px" }, "slow");
});

// once doors moved outwards then deactivate the gate closs class and reveal open gate class
    // Also show profile About me Info

// assign co-ordinates of the closed gate after it's class has been removed
var right_close = document.getElementById('rightdoor_inner');
var right_open = document.getElementById('rightdoor_open');

right_open.style.position = "absolute";
right_open.style.left = x_pos + 'px';
right_open.style.top = y_pos + 'px';

var left_close = document.getElementById('leftdoor_inner');
var left_open = document.getElementById('leftdoor_open');
left_open .style.position = "absolute";
left_open .style.left = x_pos + 'px';
left_open .style.top = y_pos + 'px';