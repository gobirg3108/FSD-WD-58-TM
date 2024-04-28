// (function showTemplateLiterals(){
//     const name = "GOBI"
//     const age = 22;
//     console.log(name,"+",age)
// })();

class task {
    constructor (description) {
        this.description = description;
        this.completed = false ;
    }

    onComplete () {
        this.completed = !this.completed;
    }
}

function testClass () {
    const task =new Task ("Learn JavaScript");
    task.onComplete();
    document.getElementById(
        "classoutput"
    ).innerHTML = `Task: ${task.description},Completed: ${task.completed}`

}
