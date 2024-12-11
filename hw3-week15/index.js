let box = document.getElementById('qorap')

box.addEventListener("mouseenter", function(){
    box.style.transitionDuration = "1s"
    box.innerHTML = "<h4>Сіздің мышкаңыз қораптың ішінде!</h4>"
    box.style.textAlign = "center"
})
box.addEventListener("mouseleave", function(){
    box.style.borderRadius = "0px"
    box.innerHTML = "<h4>Сіздің мышкаңыз қораптан шығып кетті!</h4>"
}) 
bir.addEventListener("click", function(){
    box.style.backgroundColor = "green";
});
eki.addEventListener("click", function(){
    box.style.width = "220px";
});
ush.addEventListener("click", function(){
    box.style.height = "220px";
});