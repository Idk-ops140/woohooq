let windowCount = 0;

// Function to create a new window
function createWindow() {
    windowCount++;
    const windowDiv = document.createElement("div");
    windowDiv.className = "window";
    windowDiv.innerText = `Window ${windowCount}`;

    // Add event listeners for moving the window
    windowDiv.addEventListener('click', () => moveWindow(windowDiv));

    document.getElementById("window-container").appendChild(windowDiv);
}

// Function to move the window left or right
function moveWindow(windowDiv) {
    const currentTransform = getComputedStyle(windowDiv).transform;
    const matrixValues = currentTransform.match(/matrix.*$(.+)$/)[1].split(', ');
    const currentX = parseFloat(matrixValues[4]) || 0; 
    const newX = currentX + 20; // Move right by 20px
    windowDiv.style.transform = `translateX(${newX}px)`;
}

// Event listener for the button click
document.getElementById("clone-button").addEventListener("click", () => {
    const clonedCount = document.querySelectorAll('.window').length;
    if (clonedCount < 4) {
        createWindow();
    } else {
        alert("Maximum of 4 windows cloned.");
    }
});
