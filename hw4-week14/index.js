let student = [
    {
        name:"satao",
        age:"24",
        bal:"88"
    },
    {
        name:"daniyar",
        age:"25",
        bal:"85"
    },
    {
        name:"acxat",
        age:"14",
        bal:"66"
    },
    {
        name:"balzhan",
        age:"19",
        bal:"99"
    }
]
student.forEach(function(element){
    if(element.age>20){
        console.log("studentsyn malades!");
        console.log(element.name,element.age);
    }else{
        console.log(element.bal*1.1);
    }
}
)








const zatar = [
    { name: "Телефон", price: 1500 },
    { name: "Ноутбук", price: 12000 },
    { name: "Құлаққап", price: 800 },
    { name: "Смарт-сағат", price: 5000 },
    { name: "Теледидар", price: 30000 },
  ];

  const isAbove1000 = zatar.every(product => product.price > 1000);
  console.log("Барлық өнімнің бағасы 1000 теңгеден жоғары ма?", isAbove1000);
  
  const totalPrice = zatar.reduce((sum, product) => sum + product.price, 0);
  console.log("Барлық өнімнің бағаларының жалпы сомасы:", totalPrice);
  
  const productNames = zatar.map(product => product.name);
console.log("Барлық өнімдердің атаулары:", productNames);

const discountedzatar = zatar.map(product => {
  if (product.price > 10000) {
    return { ...product, price: product.price * 0.85 };
  }
  return product;
});
console.log("Жеңілдік жасалған өнімдер:", discountedzatar);







let students = [
    {name:"qaisar", bal:[82,98,59,56,100,109]},
    {name:"arai",bal:[78,86,95,90,79,100]},
    {name:"zhandos",bal:[89,90,69,89,109,100]}
]
let 
if (students.bal/6 > 85){
    console.log(students.name);
}
