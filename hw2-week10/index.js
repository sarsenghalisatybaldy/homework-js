let course = parseInt(prompt("请选择 (1, 2, 3, or 4):"));
let isAlmaty = prompt("is Almaty?  (yes or no):");

if ((course == 1 || course == 2) && isAlmaty == "yes") {
  alert("你符合");
}
else {
  alert("你不符合");
}



let me = prompt("менің көнлім дегіні тауаласізба (иә or жок)")
let travel = prompt("Japan or Korea?")
let year = prompt("мен қайжіл (2000 or 1999?)")
let birthday = prompt("менің туылқан кунім (3.24 3.30 3.26 3.27)")

if (me === иә && travel === "Japan" && (year === 2000 || year === 0) && birthday === 3.26){
    alert("қутыболсын");
} 
else{
    alert("өкінышке орай")
}