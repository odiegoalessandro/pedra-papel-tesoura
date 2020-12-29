const game = {
    machineScore: 0,
    humanScore: 0,
    options: ['icon-paper.svg', 'icon-rock.svg' ,'icon-scissors.svg'],

    setScore: function(humanPoints, machinePoints){
        this.human = humanPoints
        this.machine = machinePoints
        this.human.innerText = this.humanScore
        this.machine.innerText = this.machineScore
    },
    selectMachineOption: function(callback){
        let machineOptionSelected = Math.floor(Math.random() * 3 + 1)
        let botCombat = document.querySelector(".botOption")
        
        callback(machineOptionSelected)

        let botGun = botCombat.innerHTML = `<img class="bot" src="./images/${this.options[machineOptionSelected - 1]}">`
        return botGun
    },
    selectHumanOption: function(option){
        let humanOptionSelected = option
        let humanCombat = document.querySelector(".humanOption")
        game.selectMachineOption((machineOptionSelected) => {
            let machineOption = machineOptionSelected
            let humanOption = humanOptionSelected

            /*
                PAPER = 1,
                ROCK = 2,
                SCISSORS = 3
            */

           if(humanOption === 1 && machineOption === 2){
                this.humanScore += 1
                game.setScore(document.querySelector(".humanScore"),
                document.querySelector(".botScore"))
            }
            if(humanOption === 2 && machineOption === 1){
                this.machineScore += 1
                game.setScore(document.querySelector(".humanScore"),
                document.querySelector(".botScore"))
            }
            if(humanOption === 1 && machineOption === 3){
                this.machineScore += 1
                game.setScore(document.querySelector(".humanScore"),
                document.querySelector(".botScore"))
            }
            if(humanOption === 3 && machineOption === 1){
                this.humanScore += 1
                game.setScore(document.querySelector(".humanScore"),
                document.querySelector(".botScore"))
            }
            if(humanOption === 2 && machineOption === 3){
                this.humanScore += 1
                game.setScore(document.querySelector(".humanScore"),
                document.querySelector(".botScore"))
            }
            if(humanOption === 3 && machineOption === 2){
                this.machineScore += 1
                game.setScore(document.querySelector(".humanScore"),
                document.querySelector(".botScore"))
            }
        })
        let humanGun = humanCombat.innerHTML = `<img class="human" src="./images/${this.options[humanOptionSelected - 1]}">`        
        return humanGun
    }
}