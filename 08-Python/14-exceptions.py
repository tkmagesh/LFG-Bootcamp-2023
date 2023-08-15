""" 
try:
    do something
except:
    handle the error
else:
    do what needs to be done if there is no error
finally:
    any logic that has to be executed irrespective of success or exception
    
"""



# function that raises a possible ZeroDivisionError
def divide(x,y):
    return x / y

# custom exception
class MyCustomError(Exception):
    pass

# function that raises our custom exception (MyCustomError)
def do_something():
    #raising (throwing) the error/exception
    raise MyCustomError()

# divisor = 0 # to raise the ZeroDivisionError
divisor = 7
try:
    result = divide(100,divisor)
    # print("abc" * 5)
    do_something()
except ZeroDivisionError: #catch ZeroDivisionError exception
    print("do not attempt to divide by 0")
except MyCustomError: #catch MyCustomError exception
    print("our custom exception was raised")
except: # catch unknown exceptions
    print("something went wrong")
else:
    print(f"result = {result}")
finally:
    print("divide operation completed")