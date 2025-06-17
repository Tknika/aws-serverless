const API_URL =
  'https://jhk64dl93d.execute-api.us-east-1.amazonaws.com/default/items'

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed')
  cargarItems()
})

async function cargarItems() {
  const response = await fetch(API_URL, {
    method: 'GET',
  })

  const elementos = await response.json()
  console.log('Elementos cargados:', elementos)

  const lista = document.getElementById('listaItems')
  lista.innerHTML = ''
  elementos.forEach((elemento) => {
    const item = document.createElement('tr')
    item.innerHTML = `
      <td>${elemento.id_usuario}</td>
      <td>${elemento.id_item}</td>
      <td>${elemento.descripcion}</td>
      <td>${elemento.categoria}</td>
    `
    lista.appendChild(item)
  })
}

document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault()
  const idUsuario = document.getElementById('idUsuario').value
  const idItem = document.getElementById('idItem').value
  const descripcion = document.getElementById('descripcion').value
  const categoria = document.getElementById('categoria').value

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id_usuario: idUsuario,
      id_item: idItem,
      descripcion: descripcion,
      categoria: categoria,
    }),
  })
  cargarItems()
})
