let lowerWord1 = prompt("bir")
let lowerWord2 = prompt("eki")

function compareWords(a,b) {
    if (lowerWord1 === lowerWord2) {
        return "Сөздер бірдей";
    } else {
        return "Сөздер әртүрлі";
    }
}
alert(compareWords(lowerWord1, lowerWord2));
