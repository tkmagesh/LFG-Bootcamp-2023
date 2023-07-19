function Employee(id, name, city){
    // this => new object
    this.id = id;
    this.name = name;
    this.city = city;
    // this => returned by default
}

var emp = new Employee(100, 'Magesh', 'Bangalore')
emp instanceof Employee
console.log(emp.constructor)

var s1 = new spinner()
s1.up()
s1.up()
