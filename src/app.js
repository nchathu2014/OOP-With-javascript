import {Car} from "./classes/car.js";
import {Drone} from "./classes/drone.js";
import {fleet} from "../src/fleet-data.js";
import {FleetDataService} from "../src/services/fleet-data-service.js";

let fleetService = new FleetDataService();
fleetService.loadData(fleet);
console.log(fleetService.cars);
console.log(fleetService.drones);