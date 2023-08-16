
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
    # __init__ is invoked whenever a new instance of this class is created
    def __init__(self, id, fName="", lName=""): # self => reference of the newly created object
        print("A new employee instance is being created")
        # prefixing the attribute with "_" is a CONVENTION to denote that it is a private attribute
        self._id = id 
        self._first_name = fName
        self._last_name = lName 
        self.days_worked = 0
    
    # __str__ is invoked when the object is converted to a string 
    # use str() function
    def __str__(self):
        return "This is an employee"

    # __repr__ is invoked to get the object string to be displayed
    # "f{obj!r}"
    # use the repr()
    def __repr__(self):
        return f"firstName = {self.first_name}, lastName = {self.last_name}, daysWorked = {self.days_worked}"
    
    def mark_attendance(self):
        self.days_worked += 1
    
    # @property makes the 'id' member accessible as an attribute (ex: e.id) and NOT as a method
    @property
    def id(self):
        print("id getter invoked")
        return self._id
    # by not creating a setter for 'id', we are making the 'id' readonly

    # getter & setter for "firstName"
    @property
    def firstName(self):
        return self._first_name
    
    @firstName.setter
    def firstName(self, value):
        print("firstname setter invoked")
        self._first_name = value
        
"""         
When an Employee object is created
Ensure that the firstName and lastName are not empty strings 
"""