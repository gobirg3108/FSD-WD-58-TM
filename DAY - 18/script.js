// // const getStates = (callback) => {
// //     setTimeout (() => {
// //         let state = "Tamilnadu";
// //         console.log(state);
// //         callback();
// //     },1000);
// // };

// // const getCities = (callback) => {
// //     setTimeout (() => {
// //         let city ="Chennai";
// //         console.log(city);
// //         callback();
// //     },1000)
// // };

// // const done = () => {
// //     console.log("Done");
// // };

// // const getAddress = () => {
// //     getStates(() =>{
// //         getCities(() =>{
// //             done();
// //         })
// //     })
// // };

// // getAddress();


// let promiseobj =new Promise((resolve,reject)=>{
//     console.log("Getting the name from database");
//     setTimeout(() => {
//         // reject("No Data");
//         resolve("Data is there")
//     }, 2000);
// });


// //consumer code

// promiseobj.then(
//     (val) => {
//         console.log(`Name received from database = ${val}.`);
//     },
//     (err) =>{
//         console.log(`Error Occured = ${err}!!!`)
//     }
// );

function checkPostive(number) {
    return new Promise((resolve,reject)=> {
        if (number > 0) {
            resolve(`the number ${number} is postive`);
        }else{
            reject(`Error:The Number ${number} is not postive`);
        }
    });
}

checkPostive(-50)
.then((val) =>{
    console.log(val);
})
.catch((err) => {
    console.log(err)
});

// checkPostive(-50).then(
// (val)=>{
//     console.log(val);
// },
// (err) => {
//     console.log(err);
// }
// );

