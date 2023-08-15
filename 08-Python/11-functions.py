
""" 
def greet():
    name = "Magesh"
    print(f"Hi {name}, Have a nice day")

greet()
"""

#parameters
def greet(fName, lName):
    print(f"Hi {fName} {lName}, Have a nice day")

#positional argument
greet('Magesh', 'Kuppan')

#named arguments
greet(fName='Magesh', lName='Kuppan')
greet(lName='Kuppan', fName='Magesh')

# default arguments
def divide(no, divisor = 1):
    print(no / divisor)

divide(100)
divide(divisor=7, no=100)


""" 
def divide(no, divisor):
    return (no / divisor)

print(divide(100,7)) 
"""

def divide(no, divisor):
    quotient = no // divisor
    remainder = no % divisor
    return quotient, remainder

""" 
q, r = divide(100,7)
print(q, r)
"""
q, _ = divide(100,7)
print(q)

#default arguments
def add(x, y=10):
    return x + y

print(add(10,20))
print(add(10))
print(add(x=10))
print(add(x=10, y=20))

#function with no body
def fn():
    pass
    
fn()