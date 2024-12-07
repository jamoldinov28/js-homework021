const collectionEl = document.querySelector(".collection")
const textInputEl = document.querySelector(".text")
const formEl = document.querySelector(".form")

const TODOS = JSON.parse( localStorage.getItem("todos")) || [
    {
        id: 1,
        title: "Erta turish",
        status: true
    },
    {
        id: 2,
        title: "Nonushta qilish",
        status: true
    },
    {
        id: 3,
        title: "Maktabga borish",
        status: true
    },
    {
        id: 4,
        title: "Abet qilish",
        status: true
    },
    {
        id: 5,
        title: "Sport bilan shug'ullanish",
        status: true
    },
    {
        id: 6,
        title: "Do'stlar bilan sayr qilish",
        status: true
    },
    {
        id: 7,
        title: "Kechki ovqatlanish",
        status: true
    },
    {
        id: 8,
        title: "Dars qilish",
        status: true
    },
    {
        id: 9,
        title: "Uxlash.",
        status: true
    },
]

function createTodo(data){
    while(collectionEl.firstChild){
        collectionEl.firstChild.remove()
    }
    data.forEach(item=> {
        const liEl = document.createElement("li")
        liEl.className = "list"
        liEl.innerHTML = `
            <input ${item.status && "checkbox"} type="checkbox">
            <span>${item.title}</span>
        `
        collectionEl.appendChild(liEl)  
    })
}

window.addEventListener("load", () =>{
    createTodo(TODOS)
})

formEl.addEventListener("submit", e => {
    e.preventDefault()
    let newTodo = {
        id: new Date().getTime(),
        title: textInputEl.value,
        status: true
    }
    TODOS.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(TODOS))
    createTodo(TODOS)
    textInputEl.value = ""
})