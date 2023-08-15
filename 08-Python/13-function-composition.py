def fn():
    print("fn invoked!")
    
def logFn(fn):
    def log_wrapper():
        print("invocation started")
        fn()
        print("invocation completed")
    return log_wrapper

logged_fn = logFn(fn)
logged_fn()

def logFn_With_Args(fn):
    def log_wrapper(*args):
        print("invocation started")
        fn(*args)
        print("invocation completed")
    return log_wrapper

def add(x,y):
    print(f"add result = {x + y}")
    
logged_add = logFn_With_Args(add)
logged_add(100,200)

print(logged_add.__name__)