const topicElement = document.querySelector("#topic")
const search = document.querySelector("#search")
const result = document.querySelector("#result")


const getNews = async (topic) => {
    api_key = "78fd574531244c6d8727f86b2062db55"
    const url = `https://newsapi.org/v2/everything?q=${topic}&from=2023-06-18&sortBy=publishedAt&apiKey=${api_key}`

    const news = await fetch(url)
    const newsJSON = await news.json()
    return newsJSON['articles']
}

search.addEventListener("click", (event) => {
    event.preventDefault()
    const topic = topicElement.value
    if (topic) {
        let resultData = ""
        getNews(topic).then((response) => {

            if (response.length) {
                for (let news of response) {
                    resultData += `<div class="card">
                    <h5 class="card-header" style="color: green;">By ${news.author} on ${news.publishedAt}</h5>
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.description} <br> ${news.content.split("[")[0]}</p>
                    </div>
                </div><br>`
                }
            }
            else {
                resultData = "<h4>No result found</h4>"
            }
            result.innerHTML = resultData
        })
    }
    else {
        console.log("Enter news topic")
    }
})