function Employee(id, name, city){
    this.id = id;
    this.name = name;
    this.city = city;
}
Employee.prototype.print = function(){
    console.log(this.id, this.name, this.city)
}