var canvas, backgroundImage;

var form; 
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;
var qbank=["Q1: Lata Mangeshkar is belongs to", 
           "Q2: When was Swami vivekananda born?", 
           "Q3: Who gave this slogan “Tum Mujhe Khoon do Main tumhe azadi dunga”?",
           "Q4: When was the simon commission came to india? ",
           "Q5: Which is the largest continent?", 
           "Q6: Which is the smallest continent?", 
           "Q7: Which is the Second Smallest continent?"];
var optionA=["(A) Singing", "(A) 31 MAR 1961", "(A) Mathatma Ghandhi", 
             "(A) 1928", "(A) Australia", "(A) Antartica", "(A) South America"];
var optionB=["(B) Actress", "(B) 19 FEB 1982", "(B) Lal Bahadur Shastri", 
             "(B) 1737", "(B) Asia", "(B) North America", "(B) Antartica"];
var optionC=["(C) Sports", "(C) 12 JAN 1863", "(C) Netaji Subsash Chandra Bose", 
             "(C) 1893", "(C) Europe", "(C) Australia", "(C) Europe"];
var optionD=["(D) Running", "(D) 21 DEC 1928", "(D) None of these", 
             "(D) 1813", "(D) None of these", "(D) Europe", "(D) None of these"];
var ansbank=["A", "C", "B", "A", "B", "C", "D"];
var curQNo=0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.ask();
  }
  if(curQNo === qbank.length){
    clear();
    quiz.result(); 
  } 
}
