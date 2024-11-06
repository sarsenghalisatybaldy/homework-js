let sum = prompt("0-99 sandytandanyz")
 
if ( sum <10){
   alert("bir:"+ sum)
}
else if (sum >=10 && sum <=99){
   alert("bir" + sum / "10"  + '\n' + "eki:" + sum % "10")
}
else if(sum >=100){ 
   alert("ciz qate zhazdyiz")
}