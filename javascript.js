document.addEventListener("DOMContentLoaded", function () {

    var navToggle = document.getElementById('top-nav-toggle');

    navToggle.addEventListener('click', toggleNav);


});


function toggleNav() {

    var myTopnav = document.getElementById("myTopnav");
    if (myTopnav.className === "topnav") {
        myTopnav.className += " responsive";
    } else {
        myTopnav.className = "topnav";
    }

    var hidelogo = document.getElementById("hidelogo");
    if (hidelogo.style.display === "none") {
        hidelogo.style.display = "block";
    } else {
        hidelogo.style.display = "none";
    }

}
