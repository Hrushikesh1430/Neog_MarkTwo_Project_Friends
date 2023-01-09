var readlineSync = require('readline-sync');
var score = 0
highscore = [
  {
    name: "Subha",
    score: "7"
  },
  {
    name: "Hrushikesh",
    score: "5"
  },

]
data = [
  {
    question: "1. What's Harry's mum Lily's surname before she marries Harry's dad? \n1.Peters\n2.Smith\n3.Evans\n4.Collins \nYour Answer: ",
    answer: "Evans"
  },
  {
    question: "2. What's the name of Dudley Dursely's dad?\n1.Victor\n2.Ivan\n3.Vernon\n4.Vesuvius \nYour Answer: ",
    answer: "Vernon"
  },
  {
    question: "3. How many Harry Potter books are there in total?\n1.5\n2.8\n3.10\n4.7 \nYour Answer: ",
    answer: "7"
  },
  {
    question: "4. In which year was Harry born?\n1.1971\n2.1976\n3.1975\n4.1979 \nYour Answer:",
    answer: "1976"
  },
  {
    question: "5. What’s the name of Hogwarts School’s gamekeeper?\n1.Ralph\n2.Ted\n3.Homer\n4.Hagrid\nYour Answer: ",
    answer: "Hagrid"
  },
  {
    question: "6. How many brothers and sisters does Ron Weasley have?\n1.5\n2.6\n3.10\n4.7 \nYour Answer: ",
    answer: "6"
  },
  {
    question: "7. What is the name of Hermione Granger's cat?\n1.Bart\n2.Crookshanks\n3.Peppa\n4.Sarah\nYour Answer: ",
    answer: "Crookshanks"
  }
]
user_name = readlineSync.question("Enter your name ")

function question_ask(question_text) {
  user_answer = readlineSync.question(question_text)
  if (user_answer.toLowerCase() === data[i].answer.toLowerCase().trim()) {
    score += 1
    console.log("Your answer is right.")
    console.log("Your score is : " + score + "\n *************************** \n")

  }
  else {
    console.log("Your answer is wrong!")
    console.log("Your score is : " + score + "\n *************************** \n")
  }
}

for (var i = 0; i < data.length; i++) {
  question_ask(data[i].question)
}

console.log("\n***************************\n" + "\nYour score is " + score + "\n")
console.log("***************************\n" + "\nPing me if you have a high score. \n")
console.log("High Scores")

for (var i = 0; i < highscore.length; i++) {
  console.log(highscore[i].name + ": " + highscore[i].score)
}
