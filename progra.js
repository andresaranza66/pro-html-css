

const API ='https://api.escuelajs.co/api/v1'

const andresButton = document.getElementById('andres')
const santiLink = document.getElementById('santi')
const colombiaTouristContainer = document.getElementById('api-list')
const andyList = document.getElementById('andy-list')
const juliCall = document.getElementById('juli')
const loreCall = document.getElementById('lore')
const loreSection = document.getElementById('lore-section')

const bodyNone = document.getElementById('body')


function renderApi (){
    console.log('Mi hermanis es el mejor')
    const colombiaTourist = [1, 2, 3, 4]
    colombiaTouristContainer.innerHTML = ''
    colombiaTourist.forEach(numbers => {
        console.log(numbers)
        const text = `<p class='p-js'> Hola Santi Ingeniero Civil ${numbers}</p>`
        colombiaTouristContainer.innerHTML = colombiaTouristContainer.innerHTML + text
    });
    
   
}

function renderList() {
    const andresTeams = ['Envigado', 'Las Vegas', 'Chattanooga FC' ]
    andyList.innerHTML = ''
    andresTeams.forEach(teams => {
        console.log('Vas muy bien')
        const printTeams = `<p class='andy-teams'>${teams}</p>`
        andyList.innerHTML = andyList.innerHTML + printTeams
})
}

async function fetchData(urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

async function anotherFunction (urlApi) {
    console.log('Call',urlApi)
    try {
        const products = await fetchData(`${API}/products`)
        console.log('product',products)

        if(products.length == 0){
            colombiaTouristContainer.innerHTML = 'Empty items';
            return
        }
        const product = await fetchData(`${API}/products/${products[0].id}`)

        console.log('products',products[0])
        console.log('product',product)
        colombiaTouristContainer.innerHTML = product.title
        colombiaTouristContainer.innerHTML = colombiaTouristContainer.innerHTML + products[0]?.id
      
    } catch (error) {
        console.error(error)
       
}
}

function hiddenSection() {
    console.log(loreSection.style.display)
    if (loreSection.style.display === "none" || loreSection.style.display === "") {
        loreSection.style.display = "block"; 
    } else {
        loreSection.style.display = "none"; 
    }
}

loreCall.addEventListener('click', hiddenSection)
juliCall.addEventListener('click', () => anotherFunction(API))
santiLink.addEventListener('click', renderApi)
andresButton.addEventListener('click', renderList)


