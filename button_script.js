// Script for changing button colour on click
document.getElementById("home_button").onmouseover = function() {change_colour()};
document.getElementById("home_button").onmouseout = function() {revert_colour()};


function change_colour() {
    document.getElementById("home_button").style.color = "red";
}

function revert_colour() {
    document.getElementById("home_button").style.color = "orange";
}