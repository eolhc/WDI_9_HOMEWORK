
var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var catDirection = 1; // cat movement direction indicator 1 -> moves right, 0 --> moves left
var catDance = 0; // Flag to mark if cat has already performed dance

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);

  if (catDirection === 1) {
    img.style.left = (currentLeft + movePixels) + 'px';
  } else {
    img.style.left = (currentLeft - movePixels) + 'px';
  }
  // If reaches rightmost of window, moves left
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.transform = 'scaleX(-1)'; // Flip image
    catDirection = 0; // Change cat's movement direction to left
    catDance = 0; // Reset flag for dancing cat
  }
  // If reaches leftmost window, moves right
  if (currentLeft < 0) {
    img.style.transform = 'scaleX(1)'; // Flip image
    catDirection = 1; // Change cat's movement to right
    catDance = 0; // Reset flag for dancing cat
  }

  // If reaches middle of window, switch to dancing cat for 2 seconds
  if (currentLeft >= (window.innerWidth-img.width)/2 - 10 && currentLeft <= (window.innerWidth-img.width)/2 + 10) {
    // If dancing cat has not appear
    if (!catDance) {
      stopCatWalk();
      img.src = 'http://www.clipartkid.com/images/594/animation-bundle-animated-cats-jumping-playing-and-running-around-see-xL5d9E-clipart.gif';
      setTimeout(function(){
        img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
        restartCatWalk();
      },2000);
      catDance = 1; // Set flag for dancing cat
    }
  }
}

function startCatWalk() {
  if (!catTimer) {
    movePixels = 10;
    catTimer = window.setInterval(catWalk, delayMs);
  }
}

function restartCatWalk() {
  if (!catTimer) {
    catTimer = window.setInterval(catWalk, delayMs);
  }
}

function stopCatWalk() {
  clearInterval(catTimer);
  catTimer = null;
}

function fasterCatWalk() {
  movePixels = 20;
}

document.getElementById('start-button').addEventListener('click',startCatWalk);
document.getElementById('stop-button').addEventListener('click',stopCatWalk);
document.getElementById('speed-button').addEventListener('click',fasterCatWalk);
