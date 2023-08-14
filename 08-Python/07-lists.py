products = ["pen", "pencil", "marker", "notepad"]

#Accessing elements using index
print(products[0])

print(products[2])

print(products[1:3])

print(products[-1:])

print(products[-4:-1])

#check for the existence of an item

print("pen" in products)

print("pen" not in products)

#change the items in a list
products[0:3] = ['fountain pen', 'permenant marker', 'scribble pad']

products[0:3] = ["pen"]

#adding new items
products.append('stappler')
products.insert(1, 'mouse')

#removing items
products.pop()
products.remove('marker')

#iterating a list
for x in products:
    print(x)
    
for idx in range(len(products)):
    print(products[idx])
    