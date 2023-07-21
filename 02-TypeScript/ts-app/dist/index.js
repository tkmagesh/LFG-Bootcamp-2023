"use strict";
let x = 100;
//type inference
let y = 200; // => let y : number = 200
//any
// let z : any; // defaults to 'any' type => let z : any;
let z;
z = 100;
z = "This is a string";
z = true;
z = [];
z = 200;
z = {};
z = "This is a string";
z = 100;
console.log(z * 2);
//unknown
let uk_var;
uk_var = 100;
uk_var = "This is a string";
uk_var = true;
if (typeof uk_var === 'number') {
    console.log(uk_var * 2);
}
uk_var = "This is a string";
if (typeof uk_var === 'string') {
    console.log(uk_var.length);
}
// function arguments & return values
function multiply(x, y) {
    return x * y;
    // return "dummy string"
}
function doSomething(z) {
    console.log(z);
    // return 100;
}
function count(data) {
    return data.length;
}
console.log(count("Cillum cupidatat veniam tempor consequat mollit dolor non proident. Officia irure ea esse magna eu sint. Occaecat quis cillum laboris consectetur voluptate commodo."));
console.log(count([10, 20, 30, 40]));
let p = {
    id: 100,
    name: 'Pen',
    cost: 10,
};
let e1 = {
    id: 100,
    name: "Magesh",
    city: "Bangalore"
};
let e2 = {
    id: 200,
    name: 'John'
};
// class
class Employee {
    //accessor methods
    get id() {
        return this._id;
    }
    set id(value) {
        if (value < 0)
            throw new Error('id cannot be negative');
        this._id = value;
    }
    //constructor method
    constructor(id, name, city) {
        //instance attributes
        //private attribute
        this._id = 0;
        //protected => accessible in the Employee and its derived classes but not through object instances
        this.deptCode = 'DP-DEV';
        //public attributes
        this.name = '';
        //readonly attribute
        this.city = '';
        this.id = id;
        this.name = name;
        if (city) {
            this.city = city;
        }
    }
    //intance methods
    format() {
        return `id = ${this.id}, name = ${this.name}, city = ${this.city}`;
    }
    //static method
    static IsEmployee(obj) {
        return obj instanceof Employee;
    }
}
//static attribute
Employee.version = '1.0';
let emp = new Employee(100, 'Magesh', 'Bangalore');
class FullTimeEmployee extends Employee {
    constructor(id, name, city, benefits) {
        super(id, name, city);
        this.benefits = '';
        this.benefits = benefits;
    }
    format() {
        return `${super.format()}, benefits = ${this.benefits}, deptCode = ${this.deptCode}`;
    }
}
let fte = new FullTimeEmployee(200, 'Philip', 'New Delhi', 'Travel Allowance');
console.log(fte.format());
// console.log(fte.deptCode)
// arrow functions
let add = (x, y) => x + y;
