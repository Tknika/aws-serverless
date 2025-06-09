let count = 0
const counterElement = document.getElementById('counter')
const buttonElement = document.querySelector('button')

buttonElement.addEventListener('click', () => {
  count += 1
  counterElement.textContent = count
})
