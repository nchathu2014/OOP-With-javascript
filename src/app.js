/**
 * Created by UCHATNU on 7/17/2016.
 */


class Drone{

    constructor(id){
        this._id=id;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id=value;
    }
}

let drone = new Drone("A123");

console.log(drone);

//set id

drone.id="B123";

//get id
console.log(drone.id);