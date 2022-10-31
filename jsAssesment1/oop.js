class Employee{
    constructor(name, id){
        this.name = name;
        this.id = id
    }

    toString() {
        return `Employee ${this.name} has an id of ${this.id} `;
      }
    
}

class Manager extends Employee{
    constructor(name, id){
        super(name, id)

    }
}


class Cashier extends Employee {
    constructor(name,id,cash){
        super(name,id);
        this.cash = cash;
    }
}

class Pharmacist extends Employee{
    constructor(name,id){
        super(name,id);
    }
 
}


let collectCash = {
    cash:0,
    collect:function(amount){
        this.cash += amount;
        console.log(`collect cashof amount ${this.cash}`);
    }
}
let writePrescription = {
    printPrescription:function(){
        console.log(`Write prescription`);
    }
}

let manager = new Manager("Manager name",1);
let cashier = new Cashier("Cashier name",3);
let pharmacy = new Pharmacist("Pharmacy Name",5);
Object.assign(manager,collectCash,writePrescription)
Object.assign(cashier,collectCash)
Object.assign(pharmacy,writePrescription)

manager.collect(56);
manager.printPrescription();

cashier.collect(45);

console.log(manager);

