// function testVar() {
//     var x = 52;
//     if(true) {
//         var x=65;
//         document.getElementById ("output").innerText = "Inside if-block: "+ x;
//     }
//     document.getElementById("output").innerText +=" | Outside  If Block" + x;
// }

// //let

// function testLet() {
//     let y = 32 ;
//     if (true) {
//         let y = 75 ;
//         document.getElementById ("output").innerText = "Inside if-block: "+ y;
//     }
//     document.getElementById("output").innerText +=" | Outside  If Block" + y;
// }

// //const

// function testConst () {
//     const z = 32;
//     document.getElementById ("output").innerText = "Const Z: "+ z ;
//     try {
//         z = 76;
//     }catch (error) {
//         document.getElementById ("output").innerText += "Error: "+ error;
//     }
// }

function testArrowFunctions() {
    const numbers = [1,2,3,4,5];
    const squareNumbers = numbers.map((number)=> number*number);
    const evenNumbers = numbers.filter((number)=> number %2 ===0);
    const sumNumbers =numbers.reduce((total,number)=> total+number);
    document.getElementById("arrowOutput").innerHTML = ``
}