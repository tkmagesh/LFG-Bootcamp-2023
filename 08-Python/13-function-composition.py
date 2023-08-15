import functools

def logFn(fn):
    def log_wrapper():
        print("invocation started")
        fn()
        print("invocation completed")
    return log_wrapper

""" 
def fn():
    print("fn invoked!")
    
loggedFn = logFn(fn)
loggedFn() 
"""

# using the decorator syntax of the above is below:
@logFn
def fn():
    print("fn invoked!")
    
fn()

""" 
def logFn_With_Args(fn):
    @functools.wraps(fn) # to retain the metadata of the given function
    def log_wrapper(*args):
        print(f"[{fn.__name__}]invocation started")
        fn(*args)
        print(f"[{fn.__name__}]invocation completed")
    return log_wrapper

def add(x,y):
    print(f"add result = {x + y}")
    
logged_add = logFn_With_Args(add)
logged_add(100,200)

print(logged_add.__name__) 
"""

def logFn_With_Args(fn):
    @functools.wraps(fn) # to retain the metadata of the given function
    def log_wrapper(*args):
        print(f"[{fn.__name__}]invocation started")
        fn(*args)
        print(f"[{fn.__name__}]invocation completed")
    return log_wrapper

@logFn_With_Args
def add(x,y):
    print(f"add result = {x + y}")
    
add(100,200)