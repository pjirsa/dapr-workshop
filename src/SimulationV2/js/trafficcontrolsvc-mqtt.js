export class MqttTrafficControlService {
    
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    registerVehicleEntry(car) {

        //https://docs.emqx.io/en/broker/latest/development/javascript.html#mqtt-js-usage-example

        console.log(`entry cam: ${car.id}`);
        const request = this.createRequest(car);
        fetch(this.baseUrl + '/entrycam', request);
    }

    registerVehicleExit(car) {
        console.log(`exit cam: ${car.id}`);
        const request = this.createRequest(car);
        fetch(this.baseUrl + '/exitcam', request);
    }

    createRequest(car) {
        const body = {
            lane: car.lane.number,
            licenseNumber: car.id,
            timestamp: (new Date()).toISOString()
        };

        return {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
}