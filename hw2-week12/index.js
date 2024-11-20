let aty = prompt("Student name:");
let n = prompt("language:");

function kazakh(name){
    return "Салем " + name + ",калын калай?";
}
function russia(name){
    return "Привет " + name + ",как твои дела?";
}
function english(name){
    return "Hi " + name + ",how are you doing?";
}

if (n.toLowerCase() == "kazakh"){
    alert(kazakh(aty));
}
else if (n.toLowerCase() == "russian"){
    alert(russia(aty));
}
else if (n.toLowerCase() == "english"){
    alert(english(aty));
}
else{
    alert("Sorry," + aty + ",We dont have that language.");
}