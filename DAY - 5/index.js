class Animal  {
    constructor ( ) {
        console.log("This is constructor from Animal class");

    }
    moves = true;
}
class Rabbit extends Animal {
    constructor ( ) {
        super ( );
        console.log("This is constructor from Rabbit class");

    }
    eats = true;}
    
    let lion = new Rabbit();

var input = [23, 45, 678, 90, 33, 21, 780, 670, 498, 58940, 6545, 900, 370, 1299, 1300];

var dividedByTen = input.filter(item => item % 10 === 0);

console.log(dividedByTen); 


function applyDiscount(a,b){
var c = a-b;
return c;
}
var finalAmount = applyDiscount(1000,500);
console.log(finalAmount)

