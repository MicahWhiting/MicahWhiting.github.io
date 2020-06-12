document.addEventListener("DOMContentLoaded", function () {

    var navToggle = document.getElementById('top-nav-toggle');

    if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
    }


    var fNameNode = document.getElementById('fname');

    if (fNameNode) {
        var urlParams = new URLSearchParams(window.location.search),
            getfName = urlParams.get('fname'),
            getlName = urlParams.get('lname'),
            fullName = getfName + ' ' + getlName;
        fNameNode.textContent = fullName;
    }

    /*  This JavaScript looks for inputs named 'fname' and 'lname', copies the text within these textboxes, and pastes them into elements with an id equaling 'fname'.  */


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

function validateEmail() {
    var x = document.forms["signup"]["emailtext"].value;
    if (x == "") {
        alert("You need to include your email address.");
        return false;
    }
}

/*  The 'function' defines the JavaScript task and the 'validateEmail' gives the function a name. The 'document.forms tells the JavaScript to look for forms within the HTML document. The '["signup"]' tells the JavaScript the name of the specific form it is supposed to monitor, and the ["emailtext"]' informs the JavaScript the name of the specific input within the form it is supposed to monitor. The 'if (x =="") tells the JavaScript that if no text is provided within the emailtext input the JavaScript should display the alert text. The 'alert("You need to include your email address.")' tells the JavaScript what text it should display in the alert message. The 'return false' prevents the form from being submitted if the alert is triggered. These parameters are true in the other JavaScript functions below except that the names of the inputs that the JavaScript is supposed to monitor are different as is the text that is to be displayed within each alert message.   */

function validateFirst() {
    var x = document.forms["signup"]["firsttext"].value;
    if (x == "") {
        alert("You need to include your first name.");
        return false;
    }
}

function validateLast() {
    var x = document.forms["signup"]["lasttext"].value;
    if (x == "") {
        alert("You need to include your last name.");
        return false;
    }
}
