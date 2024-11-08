let sum = +prompt("0-99 sandytandanyz")
 
if ( sum <10){
   alert("bir:"+ sum)
}
else if (sum >=10 && sum <=99){
   alert("bir:" + parseInt(sum / "10")  + '\n' + "eki:" + sum % "10")
}
else{ 
   alert("ciz qate zhazdyiz")
}