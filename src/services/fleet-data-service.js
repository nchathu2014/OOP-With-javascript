/**
 * Created by UCHATNU on 7/17/2016.
 */

import {Car} from "../classes/car.js";
import {Drone} from "../classes/drone.js";


export class FleetDataService {
    constructor(){
        this.cars=[];
        this.drones=[];
    }

    loadData(data){
        console.log(data)
        for(let item in data){
            switch(data[item].type){
                case 'car':
                    this.cars.push(data[item]);
                    break;

                case 'drone':
                    this.drones.push(data[item]);
                    break;
            }

        }
    }
}