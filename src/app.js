/**
 * Created by UCHATNU on 7/17/2016.
 */


class Drone{

    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    static companyName(){
        console.dir(this);
        console.log("I am the company name "+this.id); // id is no belongs to class variables
    }

    fly(){
        console.log(Drone.test);
    }
}

Drone.test="I am test";

let droneInstance = new Drone("A123","Black Bird");
let droneInstance1 = new Drone("A1233","Black Hawek");

console.log(droneInstance["id"]+"--"+droneInstance["name"]);
console.log(droneInstance1.id+"--"+droneInstance1.name);


//droneInstance.companyName() Error out

Drone.companyName();
droneInstance.fly();


/*
*  Static methods -> DONT use instance properties
*  Instance methods -> OK to use static properties
* */