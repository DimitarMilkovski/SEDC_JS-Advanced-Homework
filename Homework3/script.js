console.log('connected')


// Create 2 variables with arrow functions.
// First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is black.
// Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.
// Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button.

let textSizeInput = document.getElementById ('textSize')
let textColorInput = document.getElementById('textColor')
let submitButton = document.getElementById('submitButton')
let header = document.getElementById('header')

let changeTextColor = (element, textColor) => textColor.value === '' ? element.style.color = 'black' : element.style.color = textColor.value
let changeTextSize = (element, textSize) => textSize.value ==='' ? element.style.fontSize = '24px' : element.style.fontSize = textSize.value + 'px'


submitButton.addEventListener ('click', ()=>{
    changeTextColor (header, textColorInput)
    changeTextSize (header, textSizeInput)
    textSizeInput.value = ''
    textColorInput.value = '#000000' 
})





