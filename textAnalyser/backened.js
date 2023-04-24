const userText = document.getElementById("userText");
const submit = document.getElementById("submit");
const outputTag = document.querySelector(".output")

let textByUser = "";
let output = "";
let final = "";
ids = {
  1: (textByUser) => {
    return textByUser.toUpperCase();
  },
  2: (textByUser) => {
    return textByUser.toLowerCase();
  },
  3: (textByUser) => {
    return textByUser.length;
  },
  4: (textByUser) => {
    //remove punctuations
    let afterpunct = "";
    punct = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"," ",];

    for (let i of textByUser) {
      if (punct.includes(i)) continue;
      else {
        afterpunct += i;
      }
    }
    return afterpunct;
  },
  5: (textByUser) => {
    textByUser = textByUser.split(" ");
    return textByUser.length;
  },
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  boolArr = [];
  textByUser = userText.value;
  // console.log(textByUser)

  for (let id in ids) {
    if (document.getElementById(id).checked) {
      if (id == "3") {
        output += `The string length is : ${ids["3"](textByUser)}`;
      } else if (id == "5") {
        output += `<br>Word Count : ${ids["5"](textByUser)}`;
      } else {
        textByUser = ids[id](textByUser);
      }
    }
  }
//   console.log(output);
//   console.log(textByUser);
    if (output=="") final = `<p><b>OUTPUT</b><br><br>The resulted text is : ${textByUser}</p>`
    else{
        final = `<p><b>OUTPUT</b><br><br>The resulted text is : ${textByUser}<br><br><b>Analysis</b><br>${output}</p>`
    }
    outputTag.innerHTML = final
});
