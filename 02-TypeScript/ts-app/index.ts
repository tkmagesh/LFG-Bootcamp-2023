let x : number = 100;

//type inference
let y = 200; // => let y : number = 200

//any
// let z : any; // defaults to 'any' type => let z : any;
let z;
z = 100
z = "This is a string"
z = true
z = []
z = 200
z = {}

z = "This is a string"
z = 100
console.log(z * 2)

//unknown
let uk_var : unknown;
uk_var = 100
uk_var = "This is a string"
uk_var = true

if (typeof uk_var === 'number'){
    console.log(uk_var * 2)
}

uk_var = "This is a string"
if (typeof uk_var === 'string'){
    console.log(uk_var.length)
}

// function arguments & return values
function multiply(x : number, y : number) : number {
    return x * y;
    // return "dummy string"
}

function doSomething(z : any) : void {
    console.log(z)
    // return 100;
}


// Defining types
type Countable = string | any[];

function count(data : Countable ) {
    return data.length;
}
console.log(count("Cillum cupidatat veniam tempor consequat mollit dolor non proident. Officia irure ea esse magna eu sint. Occaecat quis cillum laboris consectetur voluptate commodo."))
console.log(count([10,20,30,40]))

// Object type
/* 
let p : { id : number, name : string, cost : number } = {
    id : 100,
    name : 'Pen',
    cost : 10,
    category : 'Stationary'
} 
*/
type Product = { 
    id : number, 
    name : string, 
    cost : number 
}
let p : Product = {
    id : 100,
    name : 'Pen',
    cost : 10,
}

//optional attributes
type EmployeeType = {
    id : number,
    name : string,
    city? : string
}
let e1 : EmployeeType = {
    id : 100,
    name : "Magesh",
    city : "Bangalore"
}

let e2 : EmployeeType = {
    id : 200,
    name : 'John'
}

// class
class Employee {
    //instance attributes
    //private attribute
    private _id = 0;

    //protected => accessible in the Employee and its derived classes but not through object instances
    protected deptCode : string = 'DP-DEV'

    //accessor methods
    get id(){
        return this._id;
    }
    set id(value){
        if (value < 0) throw new Error('id cannot be negative')
        this._id = value
    }

    //public attributes
    name = '';

    //readonly attribute
    readonly city : string = '';

    //constructor method
    constructor(id : number, name : string, city? : string){
        this.id = id;
        this.name = name;
        if (city){
            this.city = city;
        }

    }

    //intance methods
    format(){
        return `id = ${this.id}, name = ${this.name}, city = ${this.city}`
    }

    //static attribute
    static version = '1.0'

    //static method
    static IsEmployee(obj : any) : boolean{
        return obj instanceof Employee;
    }
}

let emp = new Employee(100, 'Magesh', 'Bangalore')


class FullTimeEmployee extends Employee {

    benefits = '';

    constructor(id : number, name : string, city : string, benefits : string){
        super(id, name, city);
        this.benefits = benefits;
    }

    format(){
        return `${super.format()}, benefits = ${this.benefits}, deptCode = ${this.deptCode}`
    }
}

let fte = new FullTimeEmployee(200, 'Philip', 'New Delhi', 'Travel Allowance')
console.log(fte.format())

// console.log(fte.deptCode)
// arrow functions
let add = (x : number, y : number) : number =>  x + y ;