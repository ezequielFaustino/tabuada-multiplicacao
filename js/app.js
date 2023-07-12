const multiplicationForm = document.querySelector('[data-js="multiplication-form"]')
const submitBtn = document.querySelector('[data-js="submit-btn"]')
const eraseBtn = document.querySelector('[data-js="erase-btn"]')
const multiplicationTitle = document.querySelector('[data-js="multiplication-title"] span')
const multiplicationOperations = document.querySelector('[data-js="multiplication-operations"]')

const dontRefreshPage = (event) => {
  event.preventDefault()
}

const getInputValues = () => {
  const numberInput = document.querySelector('[data-js="number"]').value
  const multiplicatorInput = document.querySelector('[data-js="multiplicator"]').value
  const inputValues = [numberInput, multiplicatorInput]
  
  return inputValues
}

const createTable = (number, multiplicator) => {
  
  for(let i = 1; i <= multiplicator; i++) {
    const result = number * i 

    const template = `
      <div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
      </div>
    `

    const parser = new DOMParser()

    const htmlTemplate = parser.parseFromString(template, 'text/html')

    const row = htmlTemplate.querySelector('.row')

    multiplicationOperations.appendChild(row)

  }  
}

const clickEvent = (e) => {
  submitBtn.onpointerenter = submitBtn
  submitBtn.setPointerCapture(e.pointerId)

  const number = getInputValues()[0]
  const multiplicator = getInputValues()[1]

  if(!(+number) || !(+multiplicator))  return false

  createTable(number, multiplicator)

  multiplicationTitle.innerText = `${number}`

}

const eraseEvent = (e) => {
  eraseBtn.onpointerenter = eraseBtn
  eraseBtn.setPointerCapture(e.pointerId)

  multiplicationTitle.innerText = ``
  multiplicationOperations.innerText = ''
}

multiplicationForm.addEventListener('submit', dontRefreshPage)
submitBtn.onpointerdown = clickEvent
eraseBtn.onpointerdown = eraseEvent




