class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      //question.display();
      form = new Form()
      form.display();
    }
  }

  ask() {
    form.hide();
   // question = new Question();
    question.display();

  }
  result(){
    //write code here to hide question elements
    question.hide()

    //write code to change the background color here
    background("skyblue");
    
    //write code to show a heading for showing the result of Quiz
    textSize(30);
    fill("white");
    text("Results of The Quiz",340, 250)
    Contestant.getContestantInfo()
    //text("Correct Answers are in Green",340, 280)
    //write condition to check if contestantInfor is not undefined
    if (allContestants !== undefined){
        var yPos = 290;
        for(var plr in allContestants ){
            /*if (allContestants[plr].answer==="2"){
                fill("green"); 
            }
            else{
                fill("red");
            }*/
            text(allContestants[plr].name + ": " + allContestants[plr].score, 200, yPos)
            yPos+= 50;
        }
    }
    
  }

}
