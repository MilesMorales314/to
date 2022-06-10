document.addEventListener('DOMContentLoaded', () => {
    const add = document.getElementById('add')
    const inputText = document.getElementById('input')
    const dlt = document.getElementById('delete')
    const del = false

    add.addEventListener('click', () => {
        if(inputText.value) {
            const newEle = document.createElement('div')
            const newTextarea = document.createElement('textarea')
            const container = document.querySelector(".container")

            newTextarea.value = inputText.value
            newTextarea.className = 'added'
            newTextarea.disabled = true
            newEle.className = 'element addedDiv'
            newEle.id = 'added'
            
            newEle.appendChild(newTextarea)
            inputText.value = null
            container.appendChild(newEle)
        }
        else {
            alert("Enter text to add")
        }
    })

    dlt.addEventListener('click', () => {
        if(del) {
            del = false

        }
    })
})