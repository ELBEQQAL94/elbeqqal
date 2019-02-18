/*Put active class on current section*/

// Get links 
const links = Array.from(document.querySelectorAll('.nav-link'));

// Add event listenrs
links.forEach(link => link.addEventListener('click', handlClass));

// handlClass function
function handlClass(e) {
    // Smooth Scroll
    smoothScroll(e)
    links.forEach(link => link.classList.remove('active'));
    e.currentTarget.classList.add('active');
    e.preventDefault();
}


/*Smooth scroll*/
function smoothScroll(e) {
    // Get target id 
    const targetId = e.currentTarget.getAttribute('href');

    // Get target position 
    const targetPosition = document.querySelector(`${targetId}`).offsetTop;

    // Get start position scroll
    const startPosition = window.pageYOffset;

    // Calc distance between start and position scroll
    const distance = targetPosition - startPosition;

    const duration = 1500;

    let start = null

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if(!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0,linear(distance,progress,duration,startPosition));

        if(progress < duration) window.requestAnimationFrame(step);
    }
}

// Linear function
function linear(a, b, c, d) {
   return a * (b / c) + d - 65;
}

// Insert current date into footer
// Get current date
const now = new Date().getFullYear();
// Get date elemnt from DOM
const currentDate = document.querySelector('.current-date');
currentDate.innerHTML = now;