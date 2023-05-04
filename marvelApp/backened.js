const output = document.getElementById("output")

const public_key = "71986dc202de6c547a6bc91cbe6fef10"
const private_key = "5b003aa337ec3b7ec83560bbe862bd25dfae8d67"

const path = "v1/public/characters"

const API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${public_key}&hash=54db8cf132df28825b76c7444e01de05`

let names = ""

const getData = (API)=>{
    const xhrobj = new XMLHttpRequest()
    xhrobj.open("GET",API)

    xhrobj.onload = ()=>{
        const data = JSON.parse(xhrobj.response)["data"]["results"]
        for (let index=0; index<data.length; index++){
            names+=data[index].name;
            names+="\n"
        }
        output.innerText = names
    }

    xhrobj.send()
}


getData(API)