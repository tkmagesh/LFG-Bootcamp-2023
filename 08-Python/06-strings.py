line = 'this is a line'
multi_line = '''
    this is line 1
    this is line 2
    this is line 3
'''

# strings are array of characters
print(line)

print(line[0])

print(line[1])



# check for the existence (non) of a string
# if "python" not in line:
if "python" in line:
    print("something about python")
else:
    print("more blah!")
    
# slicing 
print(line[1:5])
print(line[0:6])
print(line[:6])
print(line[6:len(line)])
print(line[6:])

# concatenation
print("string - 1" + "string - 2")

# formating a string
x = 100
y = 200
print("sum of {} and {} is {}".format(x, y, x + y))
print(f"sum of {x} and {y} is {x+y}")
