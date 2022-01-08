class Question {

  constructor() {
    this.title = createElement('h1')
    //this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("").attribute("placeholder", "Please enter the correct option Number....");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.input2.hide();
    this.button.hide();
  }

  hide(){
    this.title.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    //this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html(qbank[curQNo] );
    this.question.position(150, 80);
    this.option1.html(optionA[curQNo]);
    this.option1.position(150, 100);
    this.option2.html(optionB[curQNo] );
    this.option2.position(150, 120);
    this.option3.html(optionC[curQNo] );
    this.option3.position(150, 140);
    this.option4.html(optionD[curQNo] );
    this.option4.position(150, 160);

    //this.input1.position(150, 230);
    this.input2.show();
    this.button.show();
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
    //this.title.hide();
    //this.input1.hide();
    //this.input2.hide();
    //this.button.hide();
    //contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      if (contestant.answer === ansbank[curQNo]){
          contestant.score++;
      }
      /*contestantCount+=1;
      contestant.index = contestantCount;*/
      contestant.update();
      curQNo++
      //contestant.updateCount(contestantCount);
    });
  }
}
