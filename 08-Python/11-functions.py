
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

#variadic function
def sum(*nos):
    result = 0
    for no in nos:
        result += no
    return result
    
print(sum(10,20,30,40,50))

#keyword arguments
def myFun(**kwargs):
    for (key,val) in kwargs.items():
        print(f"key-[{key}] = {val}")
    
myFun(key1=100, key2="Magesh", key3=[10,20,30])

#anonymous functions
def sqr(x): return x ** 2
print(sqr(9))

#lambda
#def cube(x): return x * x * x
cube = lambda x : x * x * x
print(cube(9))

def filter(list, predicate):
    result = []
    for item in list:
        if predicate(item):
            result.append(item)
    return result

nos_list = [3,1,4,2,5]
even_nos = filter(nos_list, lambda no : no % 2 == 0)
print(even_nos)