const next = document.getElementById("next");

function getRandomInt(min, max) {
  max++;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

questions = {
  // quesid : question
  1: {
    question: "What is your name",
    choices: ["Bhavye", "Power", "Kaitlin", "Joe"],
    answer: 1, //index
  },
  2: {
    question: "What is your favourite anime",
    choices: ["Black Clover", "One Piece", "Naruto", "Jujutsu kaisen"],
    answer: 3,
  },
  3: {
    question: "What is your power",
    choices: ["sharingan", "rasengan", "shadow clone", "genjitsu"],
    answer: 4,
  },
};

questIDlist = [1, 2, 3];

const newQuestionDisplay = function (ques) {
  document.getElementById("question").textContent = ques["question"];
  for (let i = 0; i < 4; i++) {
    document.getElementById(`${i + 1}`).textContent = ques["choices"][i];
  }
};

let curid,
  count = 0;
curid = getRandomInt(1, 3);

let position, randomID;
newQuestionDisplay(questions[curid]);

next.addEventListener("click", (event) => {
  event.preventDefault();
  if (count == 1) {
    console.log("You win!!!");
    next.innerHTML = "<h1>You Win</h1>"

  }
  else{
        for (let i = 1; i < 5; i++) {
            if (document.getElementById(`${i}ques`).checked) {
            position = i;
            break;
            }
        }
        if (questions[curid]["answer"] == position) {
            console.log("correct");
            count++;

            while (true) {
              randomID = getRandomInt(1, 3);
              if (questIDlist.indexOf(randomID)!=-1){
                console.log(randomID)
                break;
              }
            }
            curid = randomID;
            questIDlist[questIDlist.indexOf(randomID)] = -1;
            newQuestionDisplay(questions[curid]);
            
        } else {
            console.log("Incorrect");
            next.innerHTML = "<h1>You Lost!!!</h1>"
        }
    }
});