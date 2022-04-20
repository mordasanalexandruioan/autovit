export default class Car {

    constructor(id, model, brand, year, km, status, price) {
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.km = km;
        this.status = status;
        this.price = price;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    toString() {
        let text = "";
        text += `Model: ${this.model}` + "\n";
        text += `Brand: ${this.brand}` + "\n";
        text += `Year: ${this.year}` + "\n";
        text += `Status: ${this.status}` + "\n";
        return text;
    }

    toCard() {
        return `<div class="card">
        <img src="https://via.placeholder.com/150">

        <div class="details">
            <span>${this.brand} ${this.model}</span>
            <span>${this.year} - ${this.km}</span>
            <span>${this.status}</span>
            <span>${this._price} EUR</span>
        </div>
    </div>`
    }
}