// Registering the use of the scrolltrigger plugin
gsap.registerPlugin(ScrollTrigger);


/* 
    This function places the fishes on slide three "fishery collapse" randomly.
    It positions the fishes relative, and then uses top and left to position them.
    The top and left values are calculated by getting the window.innerWidth and .innerheight
*/
const positionFishes = _ => {
    // Setting variables to get the fishes, and the height and width of the viewport
    const fishes = document.querySelectorAll('.svg__fish');
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    
    // Loops through all the fishes and then sets the top and left to random values
    fishes.forEach(fish => {

        /* 
            Subtracting 200 and 500 from height and widht in an attempt to 
            eliminate edge cases where the fish gets positioned outside the screen 
        */
        const randomTop = getRandomNumber(0, winHeight) - 200;
        const randomLeft = getRandomNumber(0, winWidth) - 500;

        // Setting the style of the fish to the random number in pixels 
        fish.style.top = randomTop + 'px';
        fish.style.left = randomLeft + 'px';
    })
}


// Function for getting a random number with a min value and a max value
const getRandomNumber = (min, max) => {
    return Math.random() * (max - min ) + min;
}


positionFishes();



/* 
    // collect all the divs
var divs = document.getElementsByTagName('div');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}
*/
