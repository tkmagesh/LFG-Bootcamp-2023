
class Employee:
    
    # constructor method that gets invoked whenever a new instance of Employee is created
    
    #first_name & last_name are hardcoded
    """ 
    def __init__(self): # self => reference of the newly created object
        print("A new employee instance is being created")
        self.first_name = "Magesh"
        self.last_name = "Kuppan" 
    """
    
    #first_name & last_name can be passed by the user, but required.
    """ 
    def __init__(self, fName, lName): # self => reference of the newly created object
        print("A new employee instance is being created")
        self.first_name = fName
        self.last_name = lName 
    """ 
    
    #first_name & last_name can be passed by the user, and optional.
    
    def __init__(self, fName="", lName=""): # self => reference of the newly created object
        print("A new employee instance is being created")
        self.first_name = fName
        self.last_name = lName 
    
      

# instance created using the class like a function
e = Employee()