
import functools
import time


def fn():
    print("fn invoked")
    
# A wrapper which will wrap the given function with "log" capabilities

#fn => function to be wrapped with
def log( fn ):
    def log_wrapper(*args, **kwargs):
        #log before the given function execution
        print(f"{fn.__name__} - invocation started")
        
        #execute the given function
        fn(*args, **kwargs)
        
        #log after the given function execution
        print(f"{fn.__name__} - invocation started")
    return log_wrapper

# manual function composition
logFn = log(fn)
logFn()

# function composition using decorator
@log # decorator
def f1():
    print("f1 invoked")

f1()

# decorator for profiling functions
def record_time(fn):  
    @functools.wraps(fn) #retails the metadata of "fn" in the "time_wrapper"
    def time_wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = fn(*args, **kwargs)
        end = time.perf_counter()
        time_taken = end - start
        print(f"{fn.__name__} Time taken :{time_taken:.4f} seconds")
        return result
    return time_wrapper

@log
@record_time
def do_something(no_times):
    for _ in range(no_times):
        sum([i ** 2 for i in range(10000)])

do_something(1000)