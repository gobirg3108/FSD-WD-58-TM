class Animal {
    constructor () {
        console.log("This is Animal Class")
    }
    movers = true;
}
class Rabbit extends Animal{
    constructor(){
        super();
        console.log("This is Rabbit class");

    }
    eats = true;
}
let r = new Rabbit();

class Person {
    constructor(name){
        this.name=name;
    }
    getName ( ) {
        return this.name;
    }
}

class Employee extends Person  {
    constructor (name,id){
        super(name);
        this.id=id;
    }
    getId () {
        return this.id;
    }
}

let emp = new Employee("GOBI","3108");
console.log("Name is :",emp.getName());
console.log("ID is :",emp.getId());


let discount =[50,100,200,300];
let result = discount.map(function(item){
    return item * 10/100;
})
console.log(result);

let array = [23,45,678,90,33,21,780,670,498,58940,6565,900,370,1299,1300];

let mod = array.filter((item)=>{
    return item % 10
})
console.log(mod);