
const andresButton = document.getElementById('andres')
const santiLink = document.getElementById('santi')
const colombiaTouristContainer = document.getElementById('api-list')
const andyList = document.getElementById('andy-list')

function renderApi (){
    console.log('Mi hermanis es el mejor')
    const colombiaTourist = [1, 2, 3, 4]
    colombiaTourist.forEach(numbers => {
        console.log(numbers)
        const text = `<p class='p-js'> Hola Santi Ingeniero Civil ${numbers}</p>`
        colombiaTouristContainer.innerHTML = colombiaTouristContainer.innerHTML + text
    });
    
   
}

function renderList() {
    const andresTeams = ['Envigado', 'Las Vegas', 'Chattanooga FC' ]
    andresTeams.forEach(teams => {
        console.log('Vas muy bien')
        const printTeams = `<p class='andy-teams'>${teams}</p>`
        andyList.innerHTML = andyList.innerHTML + printTeams
})
}
santiLink.addEventListener('click', renderApi)


andresButton.addEventListener('click', renderList)


