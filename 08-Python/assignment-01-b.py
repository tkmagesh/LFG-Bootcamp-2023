#refactored assignment-01
from inspect import signature

add = lambda x, y: x + y
subtract = lambda x, y: x - y
multiply = lambda x, y: x * y
divide = lambda x, y: x / y
power = lambda x, y : x ** y
is_even = lambda x : x % 2 == 0
is_odd = lambda x : x % 2 != 0 
multi_add = lambda x, y, z : x + y + z


operations = { }

def get_operands(no_operands):
    # prompt the user for inputs "no_operands" times and collect the input and return them as a tuple
    return (int(input(f"Enter value {i+1} : ")) for i in range(no_operands))

def do_operation(op):
    # no of arguments to the "op" function
    no_operands = len(signature(op).parameters)
    
    #get the values for the arguments to the operation function
    data = get_operands(no_operands)
    
    #call the function
    result = op(*data)
    
    #print the result
    print(result)

def op_exit():
    exit()

def load_operations():
    operations['1'] = {'menu': 'Add', 'operation' : lambda : do_operation(add)} 
    operations['2'] = {'menu': 'Subtract',
                       'operation': lambda: do_operation(subtract)}
    operations['3'] = {'menu': 'Multiply',
                       'operation': lambda: do_operation(multiply)}
    operations['4'] = {'menu': 'Divide',
                       'operation': lambda: do_operation(divide)}
    
    operations['5'] = {'menu': 'Power',
                       'operation': lambda: do_operation(power)}
    operations['6'] = {'menu': 'Modulus', 'operation': lambda: do_operation(
        lambda x, y: x % y)}
    operations['7'] = {'menu' : 'Check Even', 'operation': lambda: do_operation(is_even)}
    operations['8'] = {'menu' : 'Check Odd', 'operation': lambda: do_operation(is_odd)} 
    operations['9'] = {'menu' : 'Multi Add', 'operation': lambda: do_operation(multi_add)} 
   
    operations['10'] = {'menu' :'Exit', 'operation' : op_exit}

def get_user_choice():
    for op in operations:
        print(f"{op}. {operations[op]['menu']}")
    user_choice = input("Enter you choice : ")
    return user_choice


def run():
    load_operations()
    while True:
        user_choice = get_user_choice()
        if user_choice not in operations:
            print("invalid choice")
            continue
        operations[user_choice]['operation']()
    

if (__name__ == '__main__'):
    run()
    
