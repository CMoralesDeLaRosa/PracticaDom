/*Dado el siguiente HTML: Elimina el elemento que tenga la clase .fn-remove-me.*/
const eliminados = document.querySelectorAll('.fn-remove-me')
for (const eliminado of eliminados) {
  eliminado.remove()
}
