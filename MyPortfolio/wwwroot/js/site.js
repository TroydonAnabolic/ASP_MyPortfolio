// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// Open and close gate animation
$(".open_close_doors").click(function () {
    // move the left and right gate-closed to outwards
    $("#leftdoor_inner").animate({ "left": "-=125px" }, "slow");
    $("#rightdoor_inner").animate({ "left": "+=125px" }, "slow");
    $("#leftdoor_outer").animate({ "left": "-=500px" }, "slow");
    $("#rightdoor_outer").animate({ "left": "+=500px" }, "slow");
    // once doors moved outwards then deactivate the gate closs class and reveal open gate class
    // Also show profile About me Info
});