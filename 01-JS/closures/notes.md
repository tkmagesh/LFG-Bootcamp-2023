# Closures #

## Steps for creating a closure ##
1. Create an outer function
2. Declare a variable in the outer function
3. Create an inner function
4. Refer to the variable of the outer function in the inner function
5. Extend the lifetime of the inner function beyond the lifetime of the outer function

![image closures](./closures.png)

## Pure Function ##
- A function with no side effects
- The invocation of the function should be able to be replaced with the result of the function without affecting the outcome
- For the given inputs, the output should remain the same

## Memoization ##
- Ability for a function to remember its results