var game = ""
var tentat = 0
function New() {
    var gameNum = ['First', 'Length', 'Contain']
    game = gameNum[Math.floor(Math.random()*gameNum.length)]
    var dicas = document.getElementById("dica")
    dicas.innerHTML = 'Type a word'
    tentat = 0
    var dicas = document.getElementById("dica")
    if (game == 'First') {
        dicas.innerHTML = 'Type a word (Easy Game)'
    }
    else if (game == 'Contain') {
        dicas.innerHTML = 'Type a word (Hard Game)'
    }
    else {
        dicas.innerHTML = 'Type a word (Medium Game)'
    }
}

function Try() {
    var dicas = document.getElementById("dica")
    if (game == 'Length') {       
        var tent = document.getElementById("tents")
        tentat = tentat + 1
        if (tentat <= 10) {
            left = (10 - tentat) + ' Tries Left'
            tent.innerHTML = left
        }
        var word = ['Ability', 'Against', 'Banking', 'Excited', 'Website', 'Analyst', 'Caliber', 'Circuit', 'Context', 'Compete'];
        var words = word[Math.floor(Math.random()*word.length)];

        var novaDica = "Tip: " + words
        dicas.innerHTML = novaDica
        
        var tries = document.getElementById("palavra").value
        var textTip = document.getElementById("texto")
        var numWord = words.length
        var numTry = tries.length

        if (tentat > 10) {
            dicas.innerHTML = "Answer: Words with 7 letters"
        }
        else if (numTry == numWord) {
            textTip.innerHTML = "Right!"
        }
        else if (numTry == (numWord - 1) || numTry == (numWord + 1)) {
            textTip.innerHTML = "You're close.."
        }
        else {
            textTip.innerHTML = "Wrong.."
        }
    }

    else if (game == 'First') {
        var tent = document.getElementById("tents")
        tentat = tentat + 1
        if (tentat <= 10) {
            left = (10 - tentat) + ' Tries Left'
            tent.innerHTML = left
        }
        var word = ['Ambulance', 'Amusement', 'Also', 'Affection', 'Animation', 'Affiliate', 'Afternoon'];
        var words = word[Math.floor(Math.random()*word.length)];

        var novaDica = "Tip: " + words
        dicas.innerHTML = novaDica

        var tries = document.getElementById("palavra").value
        var textTip = document.getElementById("texto")
        var firstWord = words.charAt(0)
        var firstTry = tries.charAt(0)

        if (tentat > 10) {
            dicas.innerHTML = "Answer: Word that starts with the capital letter 'A'"
        }
        else if (firstTry == firstWord) {
            textTip.innerHTML = "Right!"
        }
        else {
            textTip.innerHTML = "Wrong.."
        }
    }

    else if (game == 'Contain') {
        var tent = document.getElementById("tents")
        tentat = tentat + 1
        if (tentat <= 10) {
            left = (10 - tentat) + ' Tries Left'
            tent.innerHTML = left
        }
        var word = ['Incompatibility', 'Hospitalization', "Introduce", "Classification", 'Generalization', 'Nonsignificant', 'Institutional'];
        var words = word[Math.floor(Math.random()*word.length)];

        var novaDica = "Tip: " + words
        dicas.innerHTML = novaDica

        var tries = document.getElementById("palavra").value
        var textTip = document.getElementById("texto")
        var letterWord = words.includes("n")
        var letterTry = tries.includes("n")

        if (tentat > 10) {
            dicas.innerHTML = "Answer: Word with the letter 'n'"
        }
        else if (letterTry == letterWord) {
            textTip.innerHTML = "Right!"
        }
        else {
            textTip.innerHTML = "Wrong.."
        }
    }

    else {
        var textTip = document.getElementById("texto")
        textTip.innerHTML = "Click 'New' to start"
        }
}
