//homePlus1()
//guestPlus1()

let homeScore = 0
let guestScore = 0
let newHScore = document.getElementById("home")
let newGScore = document.getElementById("guest")

function homePlus1() {
    homeScore += 1
    newHScore.textContent = homeScore
}
function homePlus2() {
    homeScore += 2
    newHScore.textContent = homeScore
}
function homePlus3() {
    homeScore += 3
    newHScore.textContent = homeScore
}

function guestPlus1() {
    guestScore += 1
    newGScore.textContent = guestScore
}

function guestPlus2() {
    guestScore += 2
    newGScore.textContent = guestScore
}

function guestPlus3() {
    guestScore += 3
    newGScore.textContent = guestScore
}