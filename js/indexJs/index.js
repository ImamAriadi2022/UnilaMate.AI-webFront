// Function to hide intro-container after the fade-in animation completes
function hideIntroContainer() {
    const introContainer = document.querySelector('.intro-container');
    introContainer.style.display = 'none'; // Hide the intro container
}

// Wait for the logo animation to finish before showing the main content
setTimeout(function() {
    const mainContent = document.getElementById("mainContent");
    
    // Hide the intro container once the logo animation is done
    hideIntroContainer();
    
    // Show the main content with fade-in effect
    mainContent.style.opacity = 1;
    mainContent.style.animation = "fadeInContent 2s forwards";
}, 3000); // 3 seconds delay (same as logo animation time)

// Button click action
document.getElementById("exploreButton").addEventListener("click", function() {
    window.location.href = '../../page/login.html';
    // You can redirect to another page or perform another action here
});
