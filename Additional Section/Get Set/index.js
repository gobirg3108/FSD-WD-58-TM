class Person {
    constructor (name) {
        this._name = name;
    }
    get name (){
        return this._name;
    }
    set name (newName){
        this._name=newName;
    }
    
    }
    let person = new Person("GOBI")
    console.log(person.name);

    person.name = "GOBI RG";
    console.log(person.name);

    class BankAccount {
        set balance ({amount, description}){
            if(description == undefined){
                console.error("Transaction Must Include a Description. ");
                return;
            }
            this._balance += amount;
            this._tranactionHistory.push({amount,description});
        }
    }
    const myAccount = newBalance(100);
    myAccount.balance = {
        amount:80,
        description:"Deposit - Attur ATM SBI GOBI",

    };
    console.log(`new balance`);