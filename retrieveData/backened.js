const showData = document.getElementById("showData");
const numberPages = document.getElementById("numberPages");
const fetchData = document.getElementById("fetchData");

const URL = "https://jsonplaceholder.typicode.com/posts";

const getData = (method, url) => {
  return new Promise((resolve, reject) => {
    const xhrobj = new XMLHttpRequest();
    xhrobj.open(method, url);
    xhrobj.onload = () => {
      if (xhrobj.status >= 200 && xhrobj.status < 300) resolve(xhrobj.response);
      else {
        reject("response error");
      }
    };
    xhrobj.send();
  });
};
fetchData.addEventListener("click", (event) => {
  event.preventDefault();

  const value = Number(numberPages.value);

  showData.innerHTML = "";

  if (value >= 0 && value <= 100) {
    getData("GET", URL)
      .then((response) => {
        return response;
      })
      .then((response) => {
        const data = JSON.parse(response);
        return data;
      })
      .then((data) => {
        //Getting data as a json
        if (data.length > 0) {
          document.getElementById("signal").textContent = "Showing Data...";
          document.getElementById("signal").style.color = "green";
          showData.style.color = "orange";
        }
        for (let index = 0; index < value; index++) {
          // console.log(data[index]["body"])
          const newListItem = document.createElement("li");
          newListItem.textContent = data[index]["body"];
          showData.append(newListItem);
        }
        value = 0;
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    document.getElementById("signal").textContent =
      "Please enter value between 0 and 100";
  }
});
