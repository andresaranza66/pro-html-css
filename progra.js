

const santiLink = document.getElementById('santi')
const colombiaTouristContainer = document.getElementById('api-list')

function renderApi (){
    console.log('Mi hermanis es el mejor')
    const colombiaTourist = [1, 2, 3, 4]
    colombiaTourist.forEach(numbers => {
        console.log(numbers)
        const text = `<p class='p-js'> Hola Santi Ingeniero Civil ${numbers}</p>`
        colombiaTouristContainer.innerHTML = colombiaTouristContainer.innerHTML + text
    });
    
   
}

santiLink.addEventListener('click', renderApi)



