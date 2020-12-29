const game = {
    machineScore: 0,
    humanScore: 0,
    machineOptions: ['icon-paper.svg', 'icon-rock.svg' ,'icon-scissors.svg'],

    /*
        PAPER = 1,
        ROCK = 2,
        SCISSORS = 3
    */

    setScore: function(humanScore, machineScore){
        this.human = humanScore
        this.machine = machineScore
        this.human.innerText = this.humanScore
        this.machine.innerText = this.machineScore
    },
    selectMachineOption: function(){
        let optionSelected = Math.floor(Math.random() * 3 + 1)
        let botCombat = document.querySelector(".botOption")
        return botCombat.innerHTML = `<img src="./images/${this.machineOptions[optionSelected - 1]}">`
    }

}