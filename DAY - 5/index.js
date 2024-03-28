class Animal  {
    constructor () {
        console.log("This is constructor from Animal class");

    }
    moves = true;
}
class Rabbit extends Animal {
    constructor () {
        super ();
        console.log("This is constructor from Rabbit class");

    }
    eats = true;
}

let r = new Rabbit ();