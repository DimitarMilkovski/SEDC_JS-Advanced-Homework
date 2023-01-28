console.log('connected')

let table = document.querySelector('#table')
let getPlanetsBtn = document.querySelector('#getPlanets')
let tableBody = document.querySelector('#tableBody')
let buttonsDiv = document.querySelector('#buttonsDiv')
let nextButton = document.createElement('button');
let previousButton = document.createElement('button');

let nextPage;
let previousPage;

getPlanetsBtn.addEventListener ('click', ()=>{
    getData('https://swapi.dev/api/planets/?page=1')
    showNextButton ();
})
nextButton.addEventListener('click', ()=>{
    getData(nextPage)
    showPreviousButton()
})
previousButton.addEventListener('click', ()=>{
    getData(previousPage)
    showNextButton ();
})

function getData (api){
    fetch (api)
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        fillTable(data) 
        nextPage = data.next;
        previousPage = data.previous;
    })
    .catch (function(error){
        return 'error'
    })
} 

function fillTable (data){
        tableBody.innerHTML = ''  
        data.results.forEach(element => {    
        let newRow = document.createElement('tr')
        tableBody.appendChild(newRow)
        let colPlanetName = document.createElement('td')
        let colClimate = document.createElement('td')
        let colGravity = document.createElement('td')
        let colPopulation = document.createElement('td')
        
        colPlanetName.innerText = element.name;
        colClimate.innerText = element.climate
        colGravity.innerText = element.gravity
        colPopulation.innerText = element.population

        newRow.appendChild(colPlanetName)
        newRow.appendChild(colClimate)   
        newRow.appendChild(colGravity) 
        newRow.appendChild(colPopulation)       
    });
}

function showNextButton (){
    buttonsDiv.innerHTML = ''
    nextButton.innerText = 'Next 10 -->'
    nextButton.className = 'buttonStyle'
    buttonsDiv.appendChild(nextButton);
}

function showPreviousButton (){
    buttonsDiv.innerHTML = ''
    previousButton.innerText = '<-- previous 10'
    previousButton.className = 'buttonStyle'
    buttonsDiv.appendChild(previousButton);
}



