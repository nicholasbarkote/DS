class Employee {
    constructor(name, Eid) {
        this.name = name;
        this.Eid = Eid;
    }

}
class Pharmasy extends Employee{
    
    constructor(name){
        this.name = name
    }

    writePrescription(name, Illness){
        console.log(`This is a description for ${name} for illnes ${Illness}`)
    }
    collectCash(){
        console.log(`Collected cash ${money} `);    
    }
}
class Cashier extends Pharmasy{
    
    constructor(Eid) {
        super(Eid)
        this.Eid = Eid;
    }

    collectCash(money){
        this.money += money;
        console.log(`Collected cash ${money} `);
    }
}
class Manager  extends Cashier{
    
    constructor(name, Eid) {
        super(name,Eid)
        this.name = name;
        this.Eid = Eid;
    }

}

let manager = new Manager("john",12)

