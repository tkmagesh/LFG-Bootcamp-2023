# Python #
- interpreted
- loosely typed
- simple & versatile

## Characterestics ##
- Object Oriented Programming
- Functional Programming
- Multithreaded Programming
- Database programming
- Web Application
- Web APIs (REST services)

## Data Types ##
- Integer
- Float
- Boolean
- String
- None

## Operators ##
### Arithmatic operators ###
- + (addition)
- - (subtraction)
- * (multiplication)
- / (divistion)
- % (modulus)
- // (floor division)
- ** (exponentiation)

### Assignment Operators ###
- = 
- +=, -=, *=, /=, %=, //= etc

### Comparison Operators ###
- ==, !=, >, <, >=, <=

### Logical Operators ###
- and (a > 5 and b < 3)
- or (a > 5 or b < 3)
- not (a > 5 and b < 3)

## Assignment-01 ##
- Build an interactive calculator
    - Display the following menu
        ```
            1. add
            2. subtract
            3. multiply
            4. divide
            5. exit
        ```
    - Accept the user choice
    - Exit if the user choice is 5
    - if the user choice is 1 to 4, accept 2 number from the user and perform the corresponding operation
    - Else print "invalid choice"
    - Display the menu again (until the user choice is 5)

## Assignment-02 ##
- Program to check if the input number from the user is a prime number or not

## Collections in Python ##
- List
- Tuple
- Dictionary
- Set

### List Assignment ###
```
If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:

Each resistor has a resistance value.
Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number. For example, if they printed a brown band (value 1) followed by a green band (value 5), it would translate to the number 15.

In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands. The program will take color names as input and output a two digit number, even if the input is more than two colors!

The band colors are encoded as follows:

Black: 0
Brown: 1
Red: 2
Orange: 3
Yellow: 4
Green: 5
Blue: 6
Violet: 7
Grey: 8
White: 9

From the example above: brown-green should return 15 brown-green-violet should return 15 too, ignoring the third color.
```

### Assignment ###
```
Write a function to convert from normal numbers to Roman Numerals.
The Romans wrote numbers using letters - I, V, X, L, C, D, M.
    1  => I
    2 => II
    3 => III
    4 => IV
    5  => V
    6 => VI
    7  => VII
    8 => VIII
    9  => IX
    10 => X
    For more info - http://www.novaroma.org/via_romana/numbers.html

To see this in practice, consider the example of 1990.

In Roman numerals 1990 is MCMXC:

1000=M 900=CM 90=XC

2008 is written as MMVIII:

2000=MM 8=VIII

```

## Virtual Environment ##
### To create
- python -m venv .venv

### To activate the virtual environment
- Powershell
    - <venv>\Scripts\Activate.ps1
- CMD
    - <venv>\Scripts\activate.bat

### To deactivate
- deactivate