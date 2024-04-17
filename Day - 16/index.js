function sum (x,y) {
    return x+y;
}

function multiply(x,y) {
    return x*y;
}

function getResult(x,y, operation) {
return operation(x,y);
}
console.log(getResult(10,20, sum));
console.log(getResult(2,5, multiply));

let add = (callback) => {
    let x=2;
        y=3;
        console.log("sum:", x+y);
        callback();
};

let subtract = (callback) => {
    let x=2;
        y=3;
    console.log("Difference:",x-y);
    callback();
};

const displayCompletion = () => {
    console.log("Finished this operation !!");
};

add(displayCompletion);
subtract(displayCompletion); 