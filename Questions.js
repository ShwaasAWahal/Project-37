class Question{
constructor(){
this.title = createElement('h2');
this.question = createElement('h3');
this.option1 = createElement('h5');
this.option2 = createElement('h5');
this.option3 = createElement('h5');
this.option4 = createElement('h5');
this.input1 = createInput("Name");
this.input2 = createInput("Answer");
this.button = createButton("Submit");
}

hide(){
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
}

display(){
    this.title.html("MyQuiz Game");
    this.title.position(350,0);

    this.question.html("Question :- What is the value of 2^4");
    this.question.position(150,80);
    this.option1.html("(1) 12");
    this.option1.position(150,100);
    this.option2.html("(2) 8");
    this.option2.position(150,120);
    this.option3.html("(3) 16");
    this.option3.position(150,140);
    this.option4.html("(4) OVER 9000");
    this.option4.position(150,160);

    this.input1.position(150,230)
    this.input2.position(450,230)

    this.button.position(350,250)

    this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide()
        this.button.hide();
        contestant.name = this.input1.value();
        contestantCount+=1
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount();

        contestant.answer = this.input2.value();
        contestant.update();
        contestant.updateCount();
    })
}

}