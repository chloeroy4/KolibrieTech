// Function to change the background color of the menu when scrolling
window.onscroll = function() {
    changeMenuColor();
};

// Change menu color when scrolling down
function changeMenuColor() {
    var menu = document.getElementById("menu");
    if (window.scrollY > 50) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
}
