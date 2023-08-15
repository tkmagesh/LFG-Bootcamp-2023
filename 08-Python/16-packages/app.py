
#importing the module (calc) from the package (pkg)
""" 
from pkg import calc
print(calc.add(100,200)) 
"""


""" 
# importing the types defined in the pkg.calc module
#from pkg.calc import add, subtract

# importing all the types defined in the pkg.calc module
from pkg.calc import *

print(add(100,200))
print(subtract(100,200)) 
"""

#importing modules ( calc & greeter ) from the package (pkg)
#from pkg import calc, greeter

#importing all the modules from the package (pkg)
from pkg import * # made possible using the "__all__" in "__init__.py" file
print(calc.add(400,600))
greeter.greet()
