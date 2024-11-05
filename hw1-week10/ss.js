let num = +prompt("请填写")
let student = true;

if (num >=65 && student == true){
    alert("你有机会")
}
else{
    alert("你没有机会")
}

let num1 = Number(prompt("san"))
alert(num1 >=10 && num1 <=20)

let num2 = +prompt("第一个")
let num3 = +prompt("第二个")
alert((num2 >=0 && num3 <=0) || (num2 <=0 && num3 >=0))

let num4 = +prompt("请填写")
if (num4 % 2 != 0){
    alert("单位数")
}
else{
    alert("双位数")
}