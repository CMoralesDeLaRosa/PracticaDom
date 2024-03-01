/*1.1 Inserta dinamicamente en un html un div vacio con javascript.*/
const nuevoDiv = document.createElement('div')
document.body.appendChild(nuevoDiv)

/*1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
const nuevoDiv2 = document.createElement('div')
document.body.appendChild(nuevoDiv2)
const nuevoP = document.createElement('p')
nuevoDiv2.appendChild(nuevoP)

/*1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.*/
const nuevoDiv3 = document.createElement('div')
document.body.appendChild(nuevoDiv3)
for (let i = 0; i < 6; i++) {
  const listaParrafo = document.createElement('p')
  nuevoDiv3.appendChild(listaParrafo)
}

/*1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.*/
const parrafoDinamico = document.createElement('p')
parrafoDinamico.textContent = 'Soy dinámico!'
document.body.appendChild(parrafoDinamico)

/*1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

/*1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const appList = document.createElement('ul')

for (const app of apps) {
  const li = document.createElement('li')
  const p = document.createElement('P')
  p.textContent = app
  li.appendChild(p)
  appList.appendChild(li)
}

document.body.appendChild(appList)

/*1.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/
const eliminados = document.querySelectorAll('.fn-remove-me')
for (const eliminado of eliminados) {
  eliminado.remove()
}

/*1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/
const todosDiv = document.querySelectorAll('div')
const parrafoMedio = document.createElement('p')
parrafoMedio.textContent = 'Voy en medio!'

document.body.insertBefore(parrafoMedio, todosDiv[1])

/*1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here*/
const insertHere = document.querySelectorAll('div.fn-insert-here')

for (const div of insertHere) {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  div.appendChild(p)
}
