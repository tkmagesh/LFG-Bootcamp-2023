
interface ShapeWithArea {
    Area() : number
}


class Circle implements ShapeWithArea {
    public Radius : number;
    constructor(radius : number){
        this.Radius = radius;
    }
    public Area() : number {
        return 3.13 * this.Radius * this.Radius;
    }
}

const circle = new Circle(12)

class Rectangle implements ShapeWithArea {
    public Length : number;
    public Width : number;
    constructor(length : number, width : number) {
        this.Length = length;
        this.Width = width
    }
    public Area() : number {
        return this.Length * this.Width
    }
}

const rectangle = new Rectangle(10,20)

/* 
console.log(`Area : ${circle.Area()}`)
console.log(`Area : ${rectangle.Area()}`) 
*/


function printArea(obj : ShapeWithArea /* Any object that has an Area() method */){
    console.log(`Area : ${obj.Area()}`)
}

printArea(circle)
printArea(rectangle)

/* implement the Perimiter() method and print the perimeter of Circle & Rectagle */