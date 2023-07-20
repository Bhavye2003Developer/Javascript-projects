const submit = document.querySelector("#submit")
const table = document.querySelector("table tbody")

const createTodo = (todo) => {
    const tr = document.createElement("tr")
    const added = `<td style="padding-right: 70px;"><p id="text">${todo}</p></td>
    <td><button type="button" id="done">DONE</button></td>
    <td><button type="button" id="remove">REMOVE</button></td>`
    tr.innerHTML = added
    table.append(tr)
}

submit.addEventListener("click", (event) => {
    event.preventDefault()
    const todoElement = document.querySelector("#work")
    const todo = todoElement.value
    let isPresent = false
    for (let index of table.children){
        if (todo == index.children[0].textContent){
            document.querySelector("#Errormsg").textContent = `You can't add element with same name : ${todo}`
            isPresent = true
            break
        }
    }
    if (!isPresent){
        todoElement.value = ""
        createTodo(todo)
    }
})

table.addEventListener("click", (event) => {
    target = event.target
    const tr = target.parentElement.parentElement.children
    if (target.id=="done"){
        tr[0].style.color = "green"
    }
    else if (target.id=="remove"){
        const trContent = tr[0].textContent
        for (let index of table.children){
            if (trContent == index.children[0].textContent){
                index.remove()
            }
        }
    }
})