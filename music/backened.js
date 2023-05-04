const key = document.getElementById("key");
const sentence = document.getElementById("sentence");

window.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keyCode < 70) key.style.color = "green";
  else {
    key.style.color = "white";
  }
  key.textContent = e.key;
  if (e.code == "Backspace") {
    sentence.textContent = sentence.textContent.slice(
      0,
      sentence.textContent.length - 1
    );
  } else {
    sentence.textContent = sentence.textContent + e.key;
  }
});
