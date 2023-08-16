class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    # the string returned should be able to be used with eval() to create a new instance
    """ 
    p1 = Point(10,20)
    
    #get the repr of p1
    p1_repr = repr(p1)
    
    #use the string from the above step to create a new instance 
    p2 = eval(p1_repr)
    """
    def __repr__(self):
        return f"Point({self.x}, {self.y})"