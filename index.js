const chalk =require('chalk')
const readlineSync = require('readline-sync')
console.log(chalk.green.bgBlue.bold("Lets find out how well do you know me!!! 🙈"))

const inputName = readlineSync.question(chalk.cyanBright("❤ Please enter your name❤" +" :"))
console.log("Hi"+" " + chalk.yellowBright(inputName) + " ,"+ "How well do you know Me? Lets get it.")

const gameRules = readlineSync.question(chalk.magentaBright("Would you like to read the Game rules,Press 1 to read it OR press ENTER to directly play the game."))
let userInput = gameRules
if (userInput == 1){

console.log(chalk.magentaBright("Game Rules"))

  console.log("(a) for every right answer you will get "+ (chalk.green("2 Marks."))) 
  console.log("(b) for every wrong answer you will get "+ (chalk.red("1 Mark."))) 
  console.log(chalk.yellow("(c) this is just a game, I dont get offended you don't know me, cheers❤ !!"))
  console.log("(d)Enter a/ b/ c for each question to answer")
  console.log("\t")
}
let highScores = [
  {
    name: "Prankur",
    score: 10,
  },

  {
    name: "Anurag",
    score: 9,
  },

  {
    name: "Ankit",
    score: 8,
  },
]
let scoreCard = 0
function play(quizQuestion,quizAnswer){
    console.log("\n")
    let userAnswer = readlineSync.question(quizQuestion)
    console.log(chalk.cyan("you have selected :")+ userAnswer)
    if (userAnswer===quizAnswer)
    {
      console.log(chalk.green("you are right"))
       scoreCard= scoreCard+2
    } else{
     
      console.log(chalk.red("you are wrong"))
       scoreCard= scoreCard-1
    }
    console.log(chalk.yellow("your score is")+":"+chalk.white(scoreCard))
}

let questionOne = {
      question:"(1)What is my nickname? \na.Samved \nb.Raju \nc.Prankur",
      answer:"c"
};

let questionTwo = {
    question:"(2)Where do I live?\na.Satna \nb.Pune \nc.Banglore",
    answer:"a"
}

let questionThree = {
    question:"(3)What do I like most? \na.Pasta \nb.Pizza  \nc.Samosa",
    answer: "b"
}

let questionFour = {
    question:"(4)Who is my best friend? \na.Vipin \nb.Anurag \nc.Sandeep",
    answer: "b"
}

let questionFive = {
    question:"(5)What language I can speak apart from Hindi? \na.English \nb.Spanish \nc.Russian",
    answer: "a"
}
let questionSix = {
    question:"(6)What do I prefer most ? \na.City \nb.Village \nc.Metro",
    answer: "b"
}

let questionBank = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix]
console.log('\n')
for(i=0;i<questionBank.length;i++){
    play(questionBank[i].question,questionBank[i].answer)
}

if (scoreCard == 10 ){
  console.log("and you know me very well")
}
else if (scoreCard < 0){
console.log("you have scored"+" "+ chalk.red("zero") +" because your score is in negative values")
console.log("but we could be friends.\t")
}
else if (scoreCard <10)
{
  console.log("and you know me \t")
}
else {
  console.log("Invalid \t ")
}

console.log("\t")
console.log("--------\nCheck out the top scores and send me a screenshot if you've beaten them!\n")

console.log("Name\t\tScore")
for(var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + "\t\t" + highScores[i].score);
}
console.log(chalk.green("thanks for taking the quiz ,your final score is : ") + chalk.yellow(scoreCard))