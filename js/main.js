/*Put active class on current section*/

// Get links 
const links = Array.from(document.querySelectorAll('.nav-link'));

// Add event listenrs
links.forEach(link => link.addEventListener('click', handlClass));

// handlClass function
function handlClass(e) {
    // Smooth Scroll
    //smoothScroll(e)
    links.forEach(link => link.classList.remove('active'));
    e.currentTarget.classList.add('active');
    e.preventDefault();
}

// SmoothScroll
var scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed : 1000
});


// Insert current date into footer
// Get current date
const now = new Date().getFullYear();
// Get date elemnt from DOM
const currentDate = document.querySelector('.current-date');
currentDate.innerHTML = now;