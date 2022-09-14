var game = ""
function New() {
    var gameNum = ['First', 'Length', 'Contain']
    game = gameNum[Math.floor(Math.random()*gameNum.length)]
    var dicas = document.getElementById("dica")
    dicas.innerHTML = 'Type a word'
}

function Try() {
    var dicas = document.getElementById("dica")
    if (game == 'Length') {
        var tentat = 0
        var tent = document.getElementById("tents")
        tentat = tentat + 1
        if (tentat <= 10) {
            left = (10 - tentat) + ' Tries Left'
            tent.innerHTML = left
        }
        var word = ['Ability', 'Against', 'Banking', 'Excited', 'Website', 'Analyst', 'Caliber', 'Circuit', 'Context', 'Compete'];
        var words = word[Math.floor(Math.random()*word.length)];

        var novaDica = "The tip is " + words
        dicas.innerHTML = novaDica
        
        var tries = document.getElementById("palavra").value
        var textTip = document.getElementById("texto")
        var numWord = words.length
        var numTry = tries.length

        if (tentat > 10) {
            dicas.innerHTML = "You failed. The rule is: Words with 7 letters"
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
        var tentat = 0
        var tent = document.getElementById("tents")
        tentat = tentat + 1
        if (tentat <= 10) {
            left = (10 - tentat) + ' Tries Left'
            tent.innerHTML = left
        }
        var word = ['Ambulance', 'Amusement', 'Also', 'Affection', 'Animation', 'Affiliate', 'Afternoon'];
        var words = word[Math.floor(Math.random()*word.length)];

        var novaDica = "The tip is " + words
        dicas.innerHTML = novaDica

        var tries = document.getElementById("palavra").value
        var textTip = document.getElementById("texto")
        var firstWord = words.charAt(0)
        var firstTry = tries.charAt(0)

        if (tentat > 10) {
            dicas.innerHTML = "Word starting with the letter 'A'"
        }
        else if (firstTry == firstWord) {
            textTip.innerHTML = "Right!"
        }
        else {
            textTip.innerHTML = "Wrong.."
        }
    }

    else if (game == 'Contain') {
        var tentat = 0
        var tent = document.getElementById("tents")
        tentat = tentat + 1
        if (tentat <= 10) {
            left = (10 - tentat) + ' Tries Left'
            tent.innerHTML = left
        }
        var word = ['Incompatibility', 'Hospitalization', "Introduce", "Classification", 'Generalization', 'Nonsignificant', 'Institutional'];
        var words = word[Math.floor(Math.random()*word.length)];

        var novaDica = "The tip is " + words
        dicas.innerHTML = novaDica

        var tries = document.getElementById("palavra").value
        var textTip = document.getElementById("texto")
        var letterWord = words.includes("n")
        var letterTry = tries.includes("n")

        if (tentat > 10) {
            dicas.innerHTML = "Word with the letter 'N'"
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
