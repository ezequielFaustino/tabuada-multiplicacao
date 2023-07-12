const multiplicationForm = document.querySelector('[data-js="multiplication-form"]')
const submitBtn = document.querySelector('[data-js="submit-btn"]')
const multiplicationTitle = document.querySelector('[data-js="multiplication-title"] span')

const dontPageRefresh = (event) => {
  event.preventDefault()
}

const getInputValues = () => {
  const numberInput = document.querySelector('[data-js="number"]').value
  const multiplicatorInput = document.querySelector('[data-js="multiplicator"]').value
  const inputValues = [numberInput, multiplicatorInput]
  
  return inputValues
}

const createTable = (number, multiplicator) => {
  // laço de repeticao: number * i
  for(let i = 1; i <= multiplicator; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
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

multiplicationForm.addEventListener('submit', dontPageRefresh)
submitBtn.onpointerdown = clickEvent





