/**
 * Created by UCHATNU on 7/17/2016.
 */


class Drone{

    constructor(id,name){
        this.id=id;
        this.name=name;
    }
}

Drone.maxHeight=2000; // static/class property which is belong to the class not to the object instance

let droneInstance = new Drone("A123","Black Bird");
let droneInstance1 = new Drone("A1233","Black Hawek");

console.log(droneInstance["id"]+"--"+droneInstance["name"]+"--"+Drone.maxHeight);
console.log(droneInstance1.id+"--"+droneInstance1.name);
