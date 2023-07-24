"use strict";
class Circle {
    constructor(radius) {
        this.Radius = radius;
    }
    Area() {
        return 3.13 * this.Radius * this.Radius;
    }
}
const circle = new Circle(12);
class Rectangle {
    constructor(length, width) {
        this.Length = length;
        this.Width = width;
    }
    Area() {
        return this.Length * this.Width;
    }
}
const rectangle = new Rectangle(10, 20);
/*
console.log(`Area : ${circle.Area()}`)
console.log(`Area : ${rectangle.Area()}`)
*/
function printArea(obj /* Any object that has an Area() method */) {
    console.log(`Area : ${obj.Area()}`);
}
printArea(circle);
printArea(rectangle);
/* implement the Perimiter() method and print the perimeter of Circle & Rectagle */ 
