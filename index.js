let btn = document.querySelector("#check-txt");
btn.addEventListener("click", isPangram);

const resultTxt = document.querySelector("#result-txt");

function isPangram() {
    let sentence = document.getElementById("input-txt").value.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    for (let i = 0; i < alphabet.length; i++) {
        if (sentence.indexOf(alphabet[i]) < 0) {
            resultTxt.innerHTML = `${"This sentence is NOT a pangram!"}`;
        } else {
            resultTxt.innerHTML = `${"This sentence is a pangram!"}`;
        }
    }
}

// if certain character in sentence is not found (indexOf method returns -1) loop will end and return false
// if loop manages to reach end - return true - all characters of the abc in sentence