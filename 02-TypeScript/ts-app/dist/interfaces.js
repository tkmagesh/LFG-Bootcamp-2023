"use strict";
class Circle {
    constructor(radius) {
        this.Radius = radius;
    }
    Perimeter() {
        return 2 * 3.14 * this.Radius;
    }
    Area() {
        return 3.14 * this.Radius * this.Radius;
    }
}
const circle = new Circle(12);
class Rectangle {
    constructor(length, width) {
        this.Length = length;
        this.Width = width;
    }
    Perimeter() {
        return 2 * (this.Length + this.Width);
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
/* implement the Perimiter() method and print the perimeter of Circle & Rectagle */
function printPermiter(obj) {
    console.log(`Perimeter : ${obj.Perimeter()}`);
}
function printShapeStats(obj) {
    printArea(obj);
    printPermiter(obj);
}
printShapeStats(circle);
printShapeStats(rectangle);
