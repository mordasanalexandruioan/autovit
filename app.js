import Car from "./js/car.js";

let c1 = new Car(1, "250", "Mercedes", 1980, 181890, "used", 8700);
let c2 = new Car(2, "Polo", "Volkswagen", 2007, 210005, "used", 3450);
let c3 = new Car(3, "V40", "Volvo", 2015, 123400, "used", 10100);
let c4 = new Car(4, "S60", "Volvo", 2008, 196779, "used", 7999);
let c5 = new Car(5, "Insignia", "Opel", 2013, 233101, "used", 9400);
let c6 = new Car(6, "Touareg", "Volkswagen", 2005, 312715, "used", 6200);
let c7 = new Car(7, "500", "Fiat", 2019, 90843, "used", 15749);
let c8 = new Car(8, "Mustang GT", "Ford", 2022, 310, "new", 67900);
let c9 = new Car(9, "Mondeo", "Ford", 2017, 90764, "used", 13599);
let c10 = new Car(10, "Vito", "Mercedes", 2000, 421916, "used", 2300);
let c11 = new Car(11, "Kodiaq", "Skoda", 2020, 58792, "used", 38600);

localStorage.setItem(c1, JSON.stringify(c1));
localStorage.setItem(c2.id, JSON.stringify(c2));
localStorage.setItem(c3.id, JSON.stringify(c3));
localStorage.setItem(c4.id, JSON.stringify(c4));
localStorage.setItem(c5.id, JSON.stringify(c5));
localStorage.setItem(c6.id, JSON.stringify(c6));
localStorage.setItem(c7.id, JSON.stringify(c7));
localStorage.setItem(c8.id, JSON.stringify(c8));
localStorage.setItem(c9.id, JSON.stringify(c9));
localStorage.setItem(c10.id, JSON.stringify(c10));
localStorage.setItem(c11.id, JSON.stringify(c11));