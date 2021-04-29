class Quiz {
    constructor() { }

    getState() {
        var getGameState = database.ref('gameState')
        getGameState.on('value', function (data) {
            gameState = data.val
        })
    }

    update(gameState) {
        database.ref("/").update({
            gameState: gameState
        })
    }
    async start() {
        if (gameState == 0) {
            contestant = new Contestant
            var contestantCountRef = await database.ref('contestantCount').once('value');
            if (contestantCountRef.exists()) {
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question()
            question.display();
        }
    }

    play() {
        question.hide();
        background("yellow")
        textSize(16)
        fill("Green")
        text("NOTE: CORRECT ANSWER HIGHLITED IN GREEN", 100, 250)
        textSize(16)
        text("Correct Answer is 3", 100, 300)
        Contestant.getContestantInfo();
        if (allContestants != undefined) {
            for (var plr in allContestants) {
                var correctAns = "3"
                if (correctAns === allContestants[plr].answer)
                    fill("Green")
                else
                    fill("Red")

                textSize(15)
                text(allContestants[plr].name + ":" +
                    allContestants[plr].answer,
                    100,
                    300)
            }
        }
    }
}