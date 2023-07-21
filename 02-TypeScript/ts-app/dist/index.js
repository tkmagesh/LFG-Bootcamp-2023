"use strict";
let x = 100;
//type inference
let y = 200; // => let y : number = 200
//any
let z; // defaults to 'any' type => let z : any;
z = 100;
z = "This is a string";
z = true;
z = [];
z = 200;
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
