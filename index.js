// Your code here
// Set the initial position of the DODGER element
const dodger = document.getElementById("dodger");
dodger.style.left = '0px'; // Initialize the left position to 0px

// This function will move the DODGER to the left
function moveDodgerLeft() {
  const left = parseInt(dodger.style.left, 10);  // Parse the current left position
  
  if (left > 0) {  // Only move left if it is greater than 0px
    dodger.style.left = `${left - 1}px`;  // Move 1px to the left
  }
}

// This function will move the DODGER to the right
function moveDodgerRight() {
  const left = parseInt(dodger.style.left, 10);  // Parse the current left position
  
  if (left < window.innerWidth - 40) {  // Ensure the DODGER doesn't move off-screen
    dodger.style.left = `${left + 1}px`;  // Move 1px to the right
  }
}

// Event listener for keydown to move the DODGER
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();  // Call moveDodgerLeft when the left arrow key is pressed
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();  // Call moveDodgerRight when the right arrow key is pressed
  }
});

