console.log('CONNECTED')

let arrayOfMovies = ['Harry Potter', 'Fast and Furious', 'Rush Hour', 'The Dictator', 'Ace Ventura', 'the Revenant', 'Jango Unchained', 'Once upon a time in Hollywood', 'inglourious Basterds', 'The Hateful Eight', 'Desperado']

let inputMovie = document.getElementById('movieInput');
let searchButton = document.getElementById ('searchButton');
let displayDiv = document.getElementById ('displayDiv')

function compareStrings (inputString, arrayString){
    if (inputString.toLowerCase() === arrayString.toLowerCase()){
        return true;
    }
    else {
        return false;
    }
}


searchButton.addEventListener ('click', function(){
    let flag = 0;
    displayDiv.innerHTML = ''

    for (let movie of arrayOfMovies) {
        if (compareStrings(inputMovie.value, movie)){
            flag = 1;
        }
    }
    if (flag === 1){
        let newHeader = document.createElement ('h1')
        newHeader.innerText = 'The Movie Can Be Rented!'
        newHeader.style.color = "green"
        displayDiv.appendChild(newHeader)

    }
    else if (flag ===0){
        let newHeader = document.createElement ('h1')
        newHeader.innerText = `The Movie Can't Be Rented!`
        newHeader.style.color = "red"
        displayDiv.appendChild(newHeader)
    }
    inputMovie.value = ''
})