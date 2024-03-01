/*Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".*/
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
const placesList = document.createElement('ul')
const printHereDiv = document.querySelector('[data-function="printHere"]')

for (const place of places) {
  const li = document.createElement('li')
  const p = document.createElement('p')
  p.textContent = place
  li.appendChild(p)
  placesList.appendChild(li)
}

printHereDiv.appendChild(placesList)
