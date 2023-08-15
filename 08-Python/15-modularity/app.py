""" 
import math_utils
print("application started")
print(math_utils.add(10,20))
print(math_utils.subtract(10,20))

"""

# from math_utils import add, subtract
from math_utils import *
print("application started")
print(add(10,20))
print(subtract(10,20))

# using import aliases
from math_utils import add as add_numbers
print(add_numbers(300,400))

import utils.string_utils
print(utils.string_utils.length('asdkjfla;dsfas'))

from utils.string_utils import length
print(length("asdfhjadsfhadsfda"))