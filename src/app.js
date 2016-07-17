/**
 * Created by UCHATNU on 7/17/2016.
 */


class Drone{

    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    fly(){
        console.log("Drone "+this.id+" is flying...");
    }
}



let droneInstance = new Drone("A123","Black Bird");
let droneInstance1 = new Drone("A1233","Black Hawek");

console.log(droneInstance["id"]+"--"+droneInstance["name"]);
console.log(droneInstance1.id+"--"+droneInstance1.name);

droneInstance.fly();
droneInstance1.fly();

