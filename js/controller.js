import Car from "./car";

export default class CarController {
    constructor() {
        this.list = [];
        this.load();
        this.setHome();
    }

    load() {
        let i = 1;
        while (localStorage.getItem(i)) {
            let obj = JSON.parse(localStorage.getItem(i));
            this.list.push(new Car(obj.id, obj.model, obj.brand, obj.year, obj.km, onj.status, obj._pret));
            i++;
        }
    }
}