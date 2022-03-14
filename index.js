
let NewCard = document.getElementById("newcard")
let RederGame = document.getElementById("render")
let HoldBTN = document.getElementById("hold")
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum")
let vaultBtn = document.getElementById("vault")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myDatas"))


let cards = []
let sum = 0
let playername = "sai"
let playerchips = 150
hasblackjack = true

let workersTime = [
    { worker: "sisni", workingtime: 200, },
    { worker: "sao", workingtime: 640, },
    { worker: "g", workingtime: 500, },
    { worker: "sh", workingtime: 500, },
    { worker: "sishhh", workingtime: 500, },
    { worker: "sisjhvj", workingtime: 500, },
    { worker: "sisnijhvj", workingtime: 500, },
    { worker: "sisnihjhj", workingtime: 500, },
]

if (workersTime.workingtime < 500) {
    let message = "your don't have enough creditpoint"
    console.log(message)
}

console.log()

let player = {
    name: "test",
    vault: 200
}

let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.vault

function startgame() {

    isalive = true
    // let firstCard = getrandomCard()
    // let secondCard =  getrandomCard()
    // let cards = [firstCard,secondCard]
}


function getrandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber < 3) {
        return 7
    } else if (randomNumber === 2) {
        return 11
    } else {
        return randomNumber
    }
}
sumEl.textContent = "sum: " + sum
HoldBTN.addEventListener("click", function () {
    if (sum === 19) {
        message = "you are holding wait for few min"
        messageEl.textContent = message
    } else if (sum === 20) {
        message = "you are holding other players are the game "
        messageEl.textContent = message
    } else if (sum === 18) {
        message = "you are holding other players are the game "
        messageEl.textContent = message
    } else if (sum === 17) {
        message = "you are holding other players are the game "
        messageEl.textContent = message
        if (sum === 17) {
            let card = 4
            sum.push(card)
        }
    } else {
        message = "you can 't hold because your is not enough"
        messageEl.textContent = message
    }
})

NewCard.addEventListener("click", function () {
    if (sum <= 20) {
        message = "drawing a new card from the deck"
        let card = getrandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        messageEl.textContent = message
    }
})

RederGame.addEventListener("click", function () {
    // message = "looking for game"
    // messageEl.textContent = message
    // setTimeout(5000, message2)
    message = "starting game"
    messageEl.textContent = message
    cardEl.textContent = "cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + "   "
    }
    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
        message = "do you draw to a new card😧😧👽👽👽"
        if (sum === 20) {
            message = "you should hold"
        }
    } else if (sum === 21) {
        hasblackjack = true
        if (hasblackjack === true) {
            vault = 200
            if (hasblackjack === true) {

                vault = vault + 50
                console.log(vault)
                localStorage.setItem("vault", JSON.stringify(vault))
                messageEl.textContent = message
                message = "you will get 50bucks in your vault whoo ! you got blackjack🤑🤑 🥳 🥳 🥳 "
                messageEl.textContent = message
            }

        }
    } else {
        isalive = false
        if (isalive === false) {
            message = "you're out of the game!😱😱😱☠️☠️"
            messageEl.textContent = message
            loses = 1

            if (loses === 3) {
                message = "you totally lost 150bucks"
                messageEl.textContent = message
            }
            if (loses === 5) {
                sum = 21
            }
        }
    }


})

function NewGame() {
    if (sum <= 21) {
        message = "you can't start a new game without finishing a game"
        messageEl.textContent = message
    } else if (sum === 21) {
        message = "you can't start a new game without finishing a game"
        messageEl.textContent = message
    } else {
        sum = 0
        randomNumber = 0
    }
}




