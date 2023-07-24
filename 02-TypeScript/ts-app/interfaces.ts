
interface ShapeWithArea {
    Area() : number
}

interface ShapeWithPerimeter {
    Perimeter() : number
}


class Circle implements ShapeWithArea, ShapeWithPerimeter {
    public Radius : number;
    constructor(radius : number){
        this.Radius = radius;
    }
    Perimeter(): number {
        return 2 * 3.14 * this.Radius;
    }
    public Area() : number {
        return 3.14 * this.Radius * this.Radius;
    }
}

const circle = new Circle(12)

class Rectangle implements ShapeWithArea, ShapeWithPerimeter {
    public Length : number;
    public Width : number;
    constructor(length : number, width : number) {
        this.Length = length;
        this.Width = width
    }
    public Perimeter(): number {
        return 2 * (this.Length + this.Width)
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


/* implement the Perimiter() method and print the perimeter of Circle & Rectagle */
function printPermiter(obj : ShapeWithPerimeter){
    console.log(`Perimeter : ${obj.Perimeter()}`)
}

/* 
printArea(circle)
printPermiter(circle)

printArea(rectangle)
printPermiter(rectangle)
*/

/* 
function printShapeStats(obj : ShapeWithArea & ShapeWithPerimeter){
    printArea(obj)
    printPermiter(obj)
}

printShapeStats(circle)
printShapeStats(rectangle) 
*/

type Shape = ShapeWithArea & ShapeWithPerimeter //Shape type should have both Area() and Perimeter() methods

function printShapeStats(obj : Shape){
    printArea(obj)
    printPermiter(obj)
}

printShapeStats(circle)
printShapeStats(rectangle)