var canvas;
var gameState, contestantCount,allContestants, database, quiz, question,contestant;
gameState = 0
function setup(){
  database = firebase.database()
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState()
  quiz.start()
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.update(1)
    quiz.play();
  }
}
