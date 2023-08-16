from abc import ABC, abstractmethod

# Abstract base class - provides the abstraction and the derived classed are expected to provide the concrete implementations for the abstractions
class Person(ABC):
    def __init__(self, firstName, lastName):
        self.firstName = firstName
        self.lastName = lastName
    
    @abstractmethod
    def calculateSalary():
        # no concrete implementation because of the method being an abstract method. all the derived classes MUST provide a concrete implementation for this method in order for them to be used
        pass

    
class Employee(Person):
    def __init__(self, id, firstName, lastName):
        super().__init__(firstName, lastName)
        self.id = id
        
    #concrete implementation for the abstract method in the Person base class
    def calculateSalary(self):
        return 1000
        
class FullTimeEmployee(Employee):
    def __init__(self, id, firstName, lastName, benefits):
        super().__init__(id, firstName, lastName)
        self.benefits = benefits
    
    def calculateSalary(self):
        return 2000
  
  
if (__name__ == '__main__'):  
    persons = [
        Employee(100, 'A', 'B'),
        Employee(101,'X', 'Y'),
        FullTimeEmployee(200, 'ABC', 'XYZ', 'Healthcare'),
        FullTimeEmployee(201, 'DEF', 'HGJ', 'Healthcare'),
        FullTimeEmployee(202, 'LMN', 'OPQ', 'Healthcare'),
    ]
    for p in persons:
        # even though the "persons" list has a mix of Employees and FullTimeEmployees, one can be confident that they all have the "calculateSalary()" method as both Employee and FullTimeEmployee classes inherit from the "Person" abstract class
        print(p.calculateSalary())