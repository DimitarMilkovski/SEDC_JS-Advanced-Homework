console.log('connected')
console.log('**********ZADACA 2 ******************')
// Exercise 2
// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:
// Height
// Birth year
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1
let getDataButton = document.getElementById('getData')
let header = document.createElement('h1')
let table = document.createElement('table')

displayDiv.appendChild(header)
displayDiv.appendChild(table)




getDataButton.addEventListener('click', function(){
    fetch('https://swapi.dev/api/people/1')
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        
        createHeader(data)
        createTable(data)
        
    })
    .catch(function(error){
        console.log(error)
    })
})

function createTable (data){
    let properties = ['height', 'birth_year','eye_color', 'hair_color']
    for (let property of properties) {
        table.style.border = '5px solid black'
        let rows = document.createElement('tr')
        table.appendChild(rows)

        let rowsDataProperty = document.createElement('td')
        let rowsDataValue = document.createElement('td')

        rowsDataProperty.style.border = '2px solid black'
        rowsDataValue.style.border = '2px solid black'

        rowsDataProperty.innerText = property;
        rowsDataValue.innerText = data[property];

        rows.appendChild(rowsDataProperty)
        rows.appendChild(rowsDataValue)
    }
    
}

function createHeader (data){
    header.innerText = data.name
}