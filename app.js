// Registering the use of the scrolltrigger plugin
gsap.registerPlugin(ScrollTrigger);

/* 
Declaring the queryselector for the fishes globally because it is being used
in the positionFishes function, but also for the animation 
*/
const fishes = document.querySelectorAll('.svg__fish');

/* 
This function places the fishes on slide three "fishery collapse" randomly.
It positions the fishes relative, and then uses top and left to position them.
The top and left values are calculated by getting the window.innerWidth and .innerheight
*/
const positionFishes = _ => {
    // Setting variables to get the height and width of the viewport
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    // Loops through all the fishes and then sets the top and left to random values
    fishes.forEach(fish => {

        /* 
        Subtracting 210 and 600 from height and width in an attempt to 
        eliminate edge cases where the fish gets positioned outside the screen.
        The numbers 210 and 600 are approximately equal to the viewbox of the svg
        */
        const randomTop = getRandomNumber(0, winHeight) - 210;
        const randomLeft = getRandomNumber(0, winWidth) - 600;

        // Setting the style of the fish to the random number in pixels 
        fish.style.top = randomTop + 'px';
        fish.style.left = randomLeft + 'px';
    })
}


// Function for getting a random number with a min value and a max value
const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

// Calls the functions that positions the fishes randomly on the page
positionFishes();

// gsap animation to fade fish out
gsap.to(".svg__fish", {
    scrollTrigger: {
        trigger: ".svg__fish",
        toggleActions: "restart reverse restart reverse"
    },
    opacity: 0,
    duration: 3,
})

// Animation for sliding boat on screen
gsap.to("#svg__boat", {
    xPercent: -200,
    duration: 4,
    scrollTrigger: {
        trigger: "#svg__boat",
        start: "top 80%",
        toggleActions: "play none none reset",
    },
})



/* 
    Bit of code I found to handle prefers reduces motion with javascrip animations
    https://since1979.dev/respecting-prefers-reduced-motion-with-javascript-and-react/

    This is my alternative to using @media (prefers-reduced-motion) since this is not a css animation
    From this source: https://webkit.org/blog/7551/responsive-design-for-motion/
    the parallax effect is one of the motions to avoid when designing for accesibility

    The other animations from the first four sections should be fine
*/
// Grab the prefers reduced media query.
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

console.log(mediaQuery.matches)
// Check if the media query matches or is not available.
if (mediaQuery && !mediaQuery.matches) {

    /*
      gsap animation for "parallax" effect on the bags 
      Changing the y position based on scroll. 
      Moving it a certain amount for bag 1 and 4, and then another amount for bags 2 and 3
    */
    gsap.to(".svg__bag--1, .svg__bag--4", {
        yPercent: -50,
        scrollTrigger: {
            trigger: ".svg__bag",
            scrub: true,
        },
    })

    // Same as above, but here is the animation for bag 2 and 3
    gsap.to(".svg__bag--2, .svg__bag--3", {
        yPercent: -75,
        scrollTrigger: {
            trigger: ".svg__bag",
            scrub: true,
        },
    })

}


const scrollama_scroller = scrollama()
    .setup({
        step: ".SVG__slide__six__container"
    })
    .onStepEnter(r => {
        document.querySelector(".thermometer__animpart__container:nth-child(1)").classList.add("slide__seven__anim--start");
        document.querySelector(".thermometer__animpart__container:nth-child(2)").classList.add("slide__seven__anim--start");
        document.querySelector(".slide__six__thermometer__red").classList.add("slide__seven__anim--start");
    })
    .onStepLeave(r => {
        document.querySelector(".thermometer__animpart__container:nth-child(1)").classList.remove("slide__seven__anim--start");
        document.querySelector(".thermometer__animpart__container:nth-child(2)").classList.remove("slide__seven__anim--start");
        document.querySelector(".slide__six__thermometer__red").classList.remove("slide__seven__anim--start");

    })

