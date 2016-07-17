/**
 * Created by UCHATNU on 7/17/2016.
 */

class Vehicle{
    constructor(id){
        this.id=id;
    }
}

class Drone extends Vehicle{

}

class Car extends Vehicle{
    constructor(id){
        super(id);
        this.id="ABC123";
        console.log("Constructing Car");
    }
}


let c = new Car("A123");
console.log(c.id);
