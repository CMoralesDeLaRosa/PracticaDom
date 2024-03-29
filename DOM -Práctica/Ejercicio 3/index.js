/*1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const countriesList = document.createElement('ul')

for (const country of countries) {
  const li = document.createElement('li')
  const p = document.createElement('p')
  p.textContent = country
  li.appendChild(p)
  countriesList.appendChild(li)
}

document.body.appendChild(countriesList)

/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/
const eliminados = document.querySelectorAll('.fn-remove-me')
for (const eliminado of eliminados) {
  eliminado.remove()
}

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const carList = document.createElement('ul')
const printHereDiv = document.querySelector('[data-function="printHere"]')

for (const car of cars) {
  const li = document.createElement('li')
  const p = document.createElement('p')
  p.textContent = car
  li.appendChild(p)
  carList.appendChild(li)
}
printHereDiv.appendChild(carList)

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countriesNuevos = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const country of countriesNuevos) {
  const div = document.createElement('div')
  const title = document.createElement('h4')
  const img = document.createElement('img')
  title.textContent = country.title
  img.src = country.imgUrl
  div.appendChild(title)
  div.appendChild(img)
  document.body.appendChild(div)
}

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/
const boton = document.createElement('button')
boton.textContent = 'Eliminar'
document.body.appendChild(boton)

function eliminarDiv() {
  const divParaEliminar = document.querySelectorAll('div')
  divParaEliminar[divParaEliminar.length - 1].remove()
}
boton.addEventListener('click', eliminarDiv)

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/

const reemplazar = document.querySelectorAll('div')

for (const div of reemplazar) {
  const boton2 = document.createElement('button')
  boton2.textContent = 'Elimíname!'
  boton2.addEventListener('click', (e) => e.target.parentElement.remove())
  div.appendChild(boton2)
}
