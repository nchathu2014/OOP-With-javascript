/**
 * Created by UCHATNU on 7/17/2016.
 */

class Vehicle{

}

class Drone extends Vehicle{

}

class Car extends Vehicle{

}


let c = new Car();

console.log("c instanceof Car --> "+(c instanceof Car));
console.log("c instanceof Vehicle --> "+(c instanceof Vehicle));
console.log("c instanceof Object --> "+(c instanceof Object));