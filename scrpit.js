// Get the full image overlay and close button
const fullImgOverlay = document.querySelector('.full-img-overlay');
const closeBtn = document.querySelector('.close-btn');

//
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
