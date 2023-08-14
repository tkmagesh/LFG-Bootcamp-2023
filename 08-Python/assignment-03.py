# list of colors
color_code_list = ["Black","Brown","Red","Orange","Yellow","Green","Blue","Violet","Grey","White"]

#accepting input from the user
color_codes_str = input("Enter the color codes (seperated by ,) :")

#split the input using "," delimeter
color_codes = color_codes_str.split(",")


if (len(color_codes) < 2): #if 2 colors are not given as input
    print("insufficient input")
elif ((color_codes[0] not in color_code_list) or (color_codes[1] not in color_code_list)): #if any of the given input colors is not in the color_code_list
    print("invalid color(s)")
else:
    #index of the first color
    color_value_1 = color_code_list.index(color_codes[0]) 
    
    #index of the second color
    color_value_2 = color_code_list.index(color_codes[1]) 
    
    #format the output
    band_code = f"{color_value_1}{color_value_2}"
    
    #print the result
    print(band_code) 
