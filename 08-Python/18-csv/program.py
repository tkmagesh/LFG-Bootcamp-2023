import csv
import os

""" 
"csv" module for handling csv data
https://docs.python.org/3/library/csv.html

"""
#check if a file exists
file_exists = os.path.isfile('data.csv')
print(file_exists)



# field names to designate the data
fieldnames = ['first_name', 'last_name']

if not file_exists:
    #create a file (append mode)
    csv_file = open("data.csv", mode='+a', newline='')
    
    #DictWriter knows to convert a dictionary into csv data
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    
    #write the field names as the header in the file
    writer.writeheader()
    
    #write the data
    writer.writerow({'first_name': 'Baked', 'last_name': 'Beans'})
    writer.writerow({'first_name': 'Lovely', 'last_name': 'Spam'})
    writer.writerow({'first_name': 'Wonderful', 'last_name': 'Spam'})
    csv_file.close()
else:
    #open the file for reading
    csv_file = open("data.csv", mode='r', newline='')
    
    #create a DictReader (the first line will be considered as the field names)
    reader = csv.DictReader(csv_file)
    
    # for each line in the file
    for row in reader:
        print(row) # row => dictionary with the data from the file
        
    # close the file
    csv_file.close()