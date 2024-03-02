
// js for hamburger menu
function menu(x) {
    x.classList.toggle("change");
}

// js for more menu
function more(y) {
    y.classList.toggle("slide")
}

$(document).ready(function () {
    // Initialize carousel with interval
    $('.carousel').carousel({
        interval: 3000 // Change slide every 3 seconds
    });
});



const scrollContent = document.querySelector(".notification-scroller")
const scrollElement = Array.from(scrollContent.children);

// scrollElement.forEach((item) => {
//     const duplicate = item.cloneNode(true);
//     console.log(duplicate);
//     scrollContent.appendChild(duplicate)
// })

for (let i = 0; i < scrollElement.length; i++) {
    const element = scrollElement[i].cloneNode(true);
    scrollContent.appendChild(element)
}

function slideOut () {
    var x = document.getElementById("notification");
    var y = document.getElementById("slide-btn");
    x.style.right = "calc(var(--width) * -1)";
    y.style.right = "var(--width)";
}
function slideIn() {

    var x = document.getElementById("notification");
    var y = document.getElementById("slide-btn");
    x.style.right = "";
    y.style.right = "";
}