
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        console.log(target); // Log the target element
        if (target) {
            const yOffset = -600; // Adjust this value to offset the scroll position
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Scroll to the top of the viewport
                inline: 'nearest', // Align to the nearest edge horizontally
                top: window.scrollY + target.getBoundingClientRect().top + yOffset
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var navList = document.querySelector('.navList');

    hamburger.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
var toggleBtn = document.getElementsByClassName("hamburger")[0]; // Assuming it's the first element you want to target
var toggleMenu = document.getElementsByClassName("toggle")[0]; // Assuming it's the first element you want to target
var linkDonate = document.querySelector(".don")
console.log(linkDonate)
function addMarginTop(){
    var ele = document.querySelector('.image')
    var currentMarginTop = parseInt(window.getComputedStyle(ele).marginTop)
    var newMarginTop = currentMarginTop + 150
    ele.style.marginTop = newMarginTop + 'px'
}
toggleBtn.addEventListener('click', function() {
    toggleMenu.classList.toggle('active');
    addMarginTop()
    console.log("clcikedd")
});

var listItems = document.querySelectorAll('#myList .item');

function subMarginTop(){
    var ele = document.querySelector('.image')
    var currentMarginTop = parseInt(window.getComputedStyle(ele).marginTop)
    var newMarginTop = currentMarginTop - 150
    ele.style.marginTop = newMarginTop + 'px'
}

// Loop through each list item and add click functionality
listItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Example functionality, you can replace this with your desired functionality
        toggleMenu.classList.toggle('active')
        subMarginTop()
    });
});


