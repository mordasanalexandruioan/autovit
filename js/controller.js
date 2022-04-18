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
            this.list.push(new Car(obj.id, obj.model, obj.brand, obj.year, obj.km, obj.status, obj._pret));
            i++;
        }
    }

    setHome() {
        this.home = document.querySelector('.home');
        this.home.innerHTML = `<section class="intro">
        <img src="/img/mercedes.jpg" alt="">
    </section>

    <section class="form-section">
        <form>
            <legend>Ce cauti?</legend>

            <div class="filters">
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

            <div class="filters">
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

            <input type="text" placeholder="Model" aria-autocomplete="list" disabled>

            <input type="text" placeholder="Generatie" aria-autocomplete="list" disabled>


            <label>Pret</label>
            <div class="filter pret">
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

            <label>Anul</label>
            <div class="filter an">
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


            <label>Km</label>
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

            <div class="filters">
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

        this.btn = document.querySelector('search-form-button');
        this.btn.addEventListener('click', this.filt);
    }

    eventSelect = (e) => {
        this.selectOpt = e.target;
        this.filtersBox = this.selectOpt.parentNode;

        this.filtersBox.children[0].value = this.selectOpt.value;
    }
}