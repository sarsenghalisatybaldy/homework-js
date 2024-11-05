let course = parseInt(prompt("请选择 (1, 2, 3, or 4):"));
let isAlmaty = prompt("is Almaty?  (yes or no):");

if ((course === 1 || course === 2) && isAlmaty === "yes") {
  alert("你符合");
}
else {
  alert("你不符合");
}