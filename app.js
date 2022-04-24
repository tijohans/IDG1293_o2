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


positionFishes();

// gsap animation to fade fish out
// TODO: This need polish, it works but needs to reset when exiting the screen
gsap.to(".svg__fish", {
    scrollTrigger: ".svg__fish",
    opacity: 0.2,
    duration: 5,
})

// TODO: This is not done, needs work
// gsap animation for "parallax" effect on the bags 
gsap.to(".svg__bag--1, .svg__bag--4",{
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".svg__bag",
        markers: true,
        scrub: true,
    },
})

gsap.to(".svg__bag--2, .svg__bag--3",{
    yPercent: -75,
    ease: "none",
    scrollTrigger: {
        trigger: ".svg__bag",
        markers: true,
        scrub: true,
    },
})