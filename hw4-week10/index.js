let a = +prompt("bir")
let b = +prompt("eki")
let c = +prompt("ush");
let max = a &&  b && c;
    switch (max) {
        case (a >= b && a >= c):
            max = a;
            break;
        case (b >= a && b >= c):
            max = b;
            break;
        case (c >= a && c >= b):
            max = c;
            break;
    }
    alert("siz dinzhauabin:" + max)
 
