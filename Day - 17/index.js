// const interval =setInterval(() => {
//    console.log("Hello From Set Interval!!") 
// },1000);

// setTimeout(()=>{
//     console.log("Hello From Set Timeout!!")
//     clearInterval(interval);
// },1000);

// const functionOne = () => {
//     console.log("Hey this is function one ");
// };

// setTimeout(()=> {
// console.log("Hey This is function one part 1")
// functionTwo();
// },1000);

// const functionTwo = () =>{
//     console.log("hey this is function Two")
// };

// functionOne();


//Call Back

const getUserName = (name,callback) => {
    setTimeout(() =>{
        console.log("we have a user to display!!")
        callback({user: name});
    },3000)
};

const user =getUserName("GUVI", (user) =>{
    console.log(user);
});
