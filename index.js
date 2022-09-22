const add = document.getElementById('add')
const inputText = document.getElementById('input')
const container = document.querySelector(".container")
const dataStorage = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {}
let editBtnClicked = true

//functions

const makeElement = (data = '', firstEntry = true, ogKey = '') => {
    const newEle = document.createElement('div')
    const newTextarea = document.createElement('textarea')
    const newButtons = document.createElement('div')
    const newDelBtn = document.createElement('img')
    const newEditBtn = document.createElement('img')

    newTextarea.value = data
    inputText.value = null
    newTextarea.className = 'added adjust'
    newTextarea.disabled = true

    newButtons.className = "buttons"

    newDelBtn.src = "./static/trash.png"
    newDelBtn.alt = "deleteButton"
    newDelBtn.className = "round button"

    newEditBtn.src = './static/pencil.png'
    newEditBtn.alt = "editButton"
    newEditBtn.className = "round button"

    newButtons.appendChild(newEditBtn)
    newButtons.appendChild(newDelBtn)

    newEle.className = 'element'

    let newKey = `element${Date.now()}`
    newEle.id = firstEntry ? newKey : ogKey

    newEle.appendChild(newTextarea)
    newEle.appendChild(newButtons)
    container.appendChild(newEle)

    if (firstEntry) {
        dataStorage[newEle.id] = data
        localStorage.setItem('data', JSON.stringify(dataStorage))
    }

    newDelBtn.addEventListener('click', () => {
        delete (dataStorage[newEle.id])
        localStorage.setItem('data', JSON.stringify(dataStorage))
        newEle.remove()
    })


    newEditBtn.addEventListener('click', () => {
        if (editBtnClicked) {
            newTextarea.disabled = false
            newEditBtn.src = './static/thumbs-up.png'
            editBtnClicked = false
        }
        else {
            newTextarea.disabled = true
            newEditBtn.src = './static/pencil.png'
            dataStorage[newEle.id] = newTextarea.value
            localStorage.setItem('data', JSON.stringify(dataStorage))
            editBtnClicked = true
        }
    })
}

const updatePage = () => {
    let values = Object.values(dataStorage)
    let keys = Object.keys(dataStorage)

    for (let i in values) {
        makeElement(data = values[i], firstEntry = false, ogKey = keys[i])
    }
}

//body code

updatePage()

add.addEventListener('click', () => {
    if (inputText.value) {
        makeElement(data = inputText.value)
    }
    else {
        alert("Enter text to add")
    }
})
