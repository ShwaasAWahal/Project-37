class Contestant{
    constructor(){
        this.index = null
        this.name = null
        this.answer = null
    }

 getCount(){
    var getCountRef = database.ref('contestantCount')
    getCountRef.on('value',function(data){
        contestantCount = data.val()
    })
 }

 updateCount(){
    database.ref('/').update({
        contestantCount:contestantCount,
    })
 }

 update(){
     var contestantIndex = "Contestants/contestant" + this.index;
     database.ref(contestantIndex).set({
        name: this.name,
        answer: this.answer
     })
 }

 static getContestantInfo(){
    var contestantInfoRef = database.ref('contestants')
    contestantInfoRef.on("value", (data) =>{
    allContestants = data.val();
    })
 }

 updateReset(){
    database.ref('/').update({
        players: null,
    })
 }

}