import Car from "./car.js";

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
            this.list.push(new Car(obj.id, obj.model, obj.brand, obj.year, obj.km, obj.status, obj._price));
            i++;
        }
    }

    setHome() {
        this.home = document.querySelector('.home');
        this.home.innerHTML = `<section class="intro">
        <img src="/img/mercedes.jpg" class="s500">
        <img src="/img/daciaDuster.jpg" class="duster">
        <img src="/img/fordMondeo.jpg" class="mondeo">
        <img src="/img/skodaOctavia.jpg" class="octv">
        <img src="/img/volvos60.jpg" class="s60">
        <img src="/img/vwTrg.jpg" class="trg">
        <img src="/img/skodeKodiaq.jpg" class="kodiaq">
        <img src="/img/vwPolo.jpg" class="polo">
        <img src="/img/leon.jpg" class="leon">
    </section>

    <section class="form-section">
        <form>
            <legend>Ce cauti?</legend>

            <div class="filters body">
                <input type="text" placeholder="Tip Caroserie" aria-autocomplete="list">
                <select>
                    <option disabled selected value></option>
                    <option value="cabrio">Cabrio</option>
                    <option value="combi">Combi</option>
                    <option value="compacta">Compacta</option>
                    <option value="coupe">Coupe</option>
                    <option value="masina-oras">Masian de oras</option>
                    <option value="masina-mica">Masina mica</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                </select>
            </div>

            <div class="filters brand">
                <input type="text" placeholder="Marca" aria-autocomplete="list">
                <select name="user_selection">
                   <option disabled selected value></option>
                   <option value="Volkswagen">Volkswagen</option>
                   <option value="Bmw">BMW</option>
                   <option value="Audi">Audi</option>
                   <option value="Renault">Renault</option>
                   <option value="Mercedes-Benz">Mercedes-Benz</option>
                   <option value="Skoda">Skoda</option>
                   <option value="Dacia">Dacia</option>
                   <option value="Opel">Opel</option>
                   <option value="Volvo">Volvo</option>
               </select>
            </div>

            <input type="text" class="modell" placeholder="Model" aria-autocomplete="list" disabled>

            <input type="text" class="generation" placeholder="Generatie" aria-autocomplete="list" disabled>


            <label class="lprice">Pret</label>
            <div class="filter price">
                <div class="filters">
                    <input type="text" placeholder="de la">
                    <select>
                    <option disabled selected value></option>
                    <option value="500">500 EUR</option>
                    <option value="1000">1000 EUR</option>
                    <option value="3000">3000 EUR</option>
                    <option value="5000">5000 EUR</option>
                    <option value="10000">10000 EUR</option>
                    <option value="15000">15000 EUR</option>
                    <option value="25000">25000 EUR</option>
                    <option value="40000">40000 EUR</option>
                    <option value="75000">75000 EUR</option>
                    <option value="100000">100000 EUR</option>
                    <option value="150000">150000 EUR</option>
                    <option value="250000">250000 EUR</option>
                    </select>
                </div>
                <div class="filters">
                    <input type="text" placeholder="pana la">
                    <select>
                    <option disabled selected value></option>
                    <option value="500">500 EUR</option>
                    <option value="1000">1000 EUR</option>
                    <option value="3000">3000 EUR</option>
                    <option value="5000">5000 EUR</option>
                    <option value="10000">10000 EUR</option>
                    <option value="15000">15000 EUR</option>
                    <option value="25000">25000 EUR</option>
                    <option value="40000">40000 EUR</option>
                    <option value="75000">75000 EUR</option>
                    <option value="100000">100000 EUR</option>
                    <option value="150000">150000 EUR</option>
                    <option value="250000">250000 EUR</option>
                    </select>
                </div>

            </div>

            <label class="lyear">Anul</label>
            <div class="filter year">
                <div class="filters">
                    <input type="text" placeholder="de la">
                    <select>
                    <option disabled selected value></option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    </select>
                </div>

                <div class="filters">
                    <input type="text" placeholder="pana la">
                    <select>
                    <option disabled selected value></option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    </select>
                </div>

            </div>


            <label class="lkm">Km</label>
            <div class="filter km">
                <div class="filters">
                    <input type="text" placeholder="de la">
                    <select>
                    <option disabled selected value></option>
                    <option value="5000">5000</option>
                    <option value="10000">10000</option>
                    <option value="15000">15000</option>
                    <option value="25000">25000</option>
                    <option value="50000">50000</option>
                    <option value="75000">75000</option>
                    <option value="100000">100000</option>
                    <option value="150000">150000</option>
                    <option value="200000">200000</option>
                    <option value="250000">250000</option>
                    </select>
                </div>

                <div class="filters">
                    <input type="text" placeholder="pana la">
                    <select>
                    <option disabled selected value></option>
                    <option value="5000">5000</option>
                    <option value="10000">10000</option>
                    <option value="15000">15000</option>
                    <option value="25000">25000</option>
                    <option value="50000">50000</option>
                    <option value="75000">75000</option>
                    <option value="100000">100000</option>
                    <option value="150000">150000</option>
                    <option value="200000">200000</option>
                    <option value="250000">250000</option>
                    </select>
                </div>

            </div>

            <label class="lgas">Combustibil</label>
            <div class="filters gas">
                <input type="text" placeholder="Combustibil" aria-autocomplete="list">
                <select>
                <option disabled selected value></option>
                <option value="Benzina">Benzina</option>
                <option value="Electric">Electric</option>
                <option value="Diesel">Diesel</option>
                <option value="Hibrid">Hibrid</option>
                </select>
            </div>


            <button type="button" class="search-form-button">
                Cauta anunturi
            </button>
        </form>
    </section>`

        this.brandFlt = document.getElementsByClassName('filters')[1];
        this.brandFlt.addEventListener('change', this.eventSelect);

        this.fromPrc = document.getElementsByClassName('filters')[2];
        this.fromPrc = addEventListener('change', this.eventSelect);

        this.toPrc = document.getElementsByClassName('filters')[3];
        this.toPrc.addEventListener('change', this.eventSelect);

        this.fromYear = document.getElementsByClassName('filters')[4];
        this.fromYear.addEventListener('change', this.eventSelect);

        this.toYear = document.getElementsByClassName('filters')[5];
        this.toYear.addEventListener('change', this.eventSelect);

        this.fromKm = document.getElementsByClassName('filters')[6];
        this.fromKm.addEventListener('change', this.eventSelect);

        this.toKm = document.getElementsByClassName('filters')[7];
        this.toKm.addEventListener('change', this.eventSelect);

        this.gasFlt = document.getElementsByClassName('filters')[8];
        this.gasFlt.addEventListener('change', this.eventSelect);

        this.btn = document.querySelector('.search-form-button');

        this.btn.addEventListener('click', this.filt);
    }


    fltBrand = (brand) => {
        return this.list.filter(e => {
            if (brand == "") return this.list;
            else return e.brand == brand;
        });
    }

    fltModel = (model) => {
        return this.list.filter(e => {
            if (model == "") return this.list;
            else return e.brand == model;
        });
    }

    fltStatus = (status) => {
        return this.list.filter(e => e.status == status);
    }

    fltPrice = (fromPrc, toPrc) => {
        return this.list.filter(e => {
            if (fromPrc == "") fromPrc = 0;
            if (toPrc == "") toPrc = 250000;
            return e._price >= fromPrc && e._price <= toPrc;
        });
    }

    fltYear = (fromYear, toYear) => {
        return this.list.filter(e => {
            if (fromYear == "") fromYear = 1998;
            if (toYear == "") toYear = 2022;
            return e.year >= fromYear && e.year <= toYear;
        });
    }

    fltKm = (fromKm, toKm) => {
        return this.list.filter(e => {
            if (fromKm == "") fromKm = 0;
            if (toKm == "") toKm = 250000;
            return e.km >= fromKm && e.km <= toKm;
        });
    }

    extractValue(input) {
        return input.value;
    }

    noResult = () => {
        this.home.innerHTML = ``;
        this.home = document.querySelector('.filtering');
        return this.home.innerHTML = `
        <h1>No cars found..</h1>
        `;
    }

    setCard(vec) {
        this.home.innerHTML = ``;
        this.home = document.querySelector('.filtering');
        vec.forEach(e => {
            this.home.innerHTML += e.toCard();
        })
    }

    getFilters(v1, v2, v3, v4) {
        let vec = [];

        for (let i = 0; i < v1.length; i++) {
            if (v2.includes(v1[i]) && v3.includes(v1[i]) && v4.includes(v1[i])) vec.push(v1[i]);
        }

        if (vec.length != 0) return vec;
        else return this.noResult();
    }

    filt = (event) => {
        event.preventDefault;
        this.brand = document.getElementsByClassName('filters')[1].children[0];
        this.fromPrc = document.getElementsByClassName('filters')[2].children[0];
        this.toPrc = document.getElementsByClassName('filters')[3].children[0];
        this.fromYear = document.getElementsByClassName('filters')[4].children[0];
        this.toYear = document.getElementsByClassName('filters')[5].children[0];
        this.fromKm = document.getElementsByClassName('filters')[6].children[0];
        this.toKm = document.getElementsByClassName('filters')[7].children[0];
        this.gasFlt = document.getElementsByClassName('filters')[8].children[0];

        this.resultBrand = this.fltBrand(this.extractValue(this.brand));
        this.resultPrice = this.fltPrice(this.extractValue(this.fromPrc), this.extractValue(this.toPrc));
        this.resultYear = this.fltYear(this.extractValue(this.fromYear), this.extractValue(this.toYear));
        this.resultKm = this.fltKm(this.extractValue(this.fromKm), this.extractValue(this.toKm));

        this.setCard(this.getFilters(this.resultBrand, this.resultPrice, this.resultYear, this.resultKm));
    }

    eventSelect = (e) => {
        this.selectOpt = e.target;
        this.filtersBox = this.selectOpt.parentNode;

        this.filtersBox.children[0].value = this.selectOpt.value;
    }
}