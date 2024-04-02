var shape ={
    is2D:true,
};

var circle = {
    radius : 3,

}
var rectangle = {
    length: 1,
    breath: 2,
}

circle.__proto__= shape ;
rectangle.__proto__ = shape;

console.log("is circle a 2D shape :",circle.is2D);
console.log("Radius of circle :",circle.radius);
// using proto refer shape to rectangle
console.log("is rectangle a 2D shape :"+ rectangle.is2D);
console.log("Length of rectangle = " +rectangle.length+",Breath of rectangle = "+rectangle.breath);

class Animal {
    moves = true;

}
class Rabbit extends Animal{
    eats = true;
}
let a1 = new Animal( )
console.log(a1.moves);

let a2 = new Rabbit();
console.log(a2)
