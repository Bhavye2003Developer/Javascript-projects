// let count = 0;
// const doWork = () => {
//     if (count>20) clearInterval(time)
//     console.log(count)
//     ++count
// }
// // setTimeout(doWork, 1000)
// // console.log('Working')

function colorChanger() {
    let rgb, id;
    function changeColor() {
        rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
        document.body.style.backgroundColor = rgb
        console.log(rgb)
    }
    document.querySelector("#start").addEventListener("click", () => {
        console.log("Started generating...")
        id = setInterval(changeColor, 500)
    })

    document.querySelector("#stop").addEventListener("click", (event) => {
        // console.log(event)
        clearInterval(id)
        console.log(`The background color is : ${rgb}`)
        document.querySelector("#stop").style.color = rgb
    })
}
// colorChanger()


// elements = [20,30,40,50,60]
// //Promises
// const myProm = new Promise((resolve, reject) => {
//     if (elements.includes(10)){
//         resolve("Found element")
//     }
//     else{
//         reject("Not found element")
//     }
// })

// const res = myProm.then((resolvedValue)=>{
//     console.log(resolvedValue)
//     // return resolvedValue
// }).catch((rejectedValue)=>{
//     console.log(rejectedValue)
// })



// AJAX -> asynchronous javascript and xml
const url = 'https://jsonplaceholder.typicode.com/todos/'
// const xhr = new XMLHttpRequest();
// xhr.open("GET",url)

// xhr.onreadystatechange = ()=>{  -> browser keep looking on change ready state code
//     // console.log(xhr)
//     if (xhr.readyState===4){
//         const response = xhr.response
//         const data = JSON.parse(response)
//         console.log(data)
//     }
// }


// xhr.onload = ()=>{   // -> only run when ready state is 4
//         const response = xhr.response
//         const data = JSON.parse(response)
//         console.log(data)
// }
// xhr.send()



// fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })

async function getData() {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}
getData()
    .then((data) => {
        console.log(data)
    })