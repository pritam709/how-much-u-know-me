var readlineSync = require("readline-sync");

console.log("Hello my friend !!! lets play a game - How much do you know about me?");

var score = 0;

var name = readlineSync.question("what is your name :");
console.log("welcome " + name + " suru krte h bina kisi bck**** k..... your current score = 0");

var array = [
  {
    q: " 1 which brand's bike i have?",
    ans: "ktm"
  },
  {
    q: "2 guess usually i drive slow or fast(in city)?",
    ans: "slow"
  },
  {
    q: "3 i used to drink (yes/no)?",
    ans: "no"
  },
  {
    q: "4 my favourite song nowdays? (as u know i listen a song again n again for some days)",
    ans: "shikayat"
  },
  {
    q: "5 which song of moosewala is most listen by me in 2022?(hint my dp) ",
    ans: "level"
  }

]

function quiz(que, ra, ua) {
  if (ra === ua) {
    score += 10;
    console.log("Right!")
    console.log("current score " + score);
    console.log("------------");
  }
  else {
    console.log("wrong!! ")
    console.log("Right ans is " + ra);
    console.log("current score " + score);
    console.log("------------");
  }
}

for (let i = 0; i < array.length; i++) {

  console.log(array[i].q);
  var userA = readlineSync.question("");
  quiz(array[i].q, array[i].ans, userA);
}

console.log("YAY!!! you scored: " + score);
console.log("Checkout the high score,if u score more than this in first try send me SS ,i will update your name here  ")

var highScores = [
  {
    name: "motu",
    score:20
  },
  {
    name: "patlu",
    score:10
  }
    ]

highScores.map( function showHighScore(object){
  console.log(object.name +" : "+ object.score);
})









