/**
 * Created by UCHATNU on 7/17/2016.
 */

class Vehicle{

    start(){
        console.log("Vehicle Started");
    }

    static getGPSToken(){
        console.log("Vehicle GPG Token");
    }

}


class Car extends Vehicle{
    start(){ //override method start

        console.log("Car Started");
        super.start();
    }

    static getGPSToken(){
        super.getGPSToken();
        console.log("Car GPG Token");
    }
}


let c = new Car();
c.start();

Car.getGPSToken();
