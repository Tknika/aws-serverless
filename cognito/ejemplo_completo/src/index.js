import { userManager, signOutRedirect } from '/src/main.js'

const API_URL =
  'https://jhk64dl93d.execute-api.us-east-1.amazonaws.com/default/items'

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM fully loaded and parsed')
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('code') || urlParams.has('state')) {
    // Solo si hay un código de autenticación
    try {
      console.log('Intentando autenticar...')
      await userManager.signinRedirectCallback()
    } catch (err) {
      console.error('Error en callback:', err)
    }

    window.history.replaceState({}, document.title, window.location.pathname) // Limpia la URL
  }
  cargarItems()
})

async function getAccessToken() {
  const user = await userManager.getUser()
  return user ? user.access_token : null
}

async function cargarItems() {
  const tokenID = await getAccessToken()
  document.getElementById('token').textContent = tokenID || 'No token available'
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

  const tokenID = await getAccessToken()
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${tokenID}`,
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

document.getElementById('signIn').addEventListener('click', async () => {
  await userManager.signinRedirect()
})

document.getElementById('signOut').addEventListener('click', async () => {
  sessionStorage.clear()
  await signOutRedirect()
})
