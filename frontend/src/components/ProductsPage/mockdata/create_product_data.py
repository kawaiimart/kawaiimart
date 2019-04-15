
'''
To use:
Create new folder [newfolder]. 
Put this file in [newfolder].
Put an "images" folder in [newfolder]
I ran the program using Python IDLE.
Meant for .png images.
'''

import os
from os import listdir
from os.path import isfile, join

#Function to write a JS object with passed info
def createJSObject(name, file, i):
    newObj = (
        "\t{\n"
        "\t\tid: \"" + str(i) + "\",\n"
        "\t\tname:  \""  + name +"\",\n"
        "\t\tdisplayname:  \""  + name +"\",\n"
        "\t\tprice:  \"$99.99\",\n"
        "\t\tdesc: \"An incredible product.\", \n" 
        "\t},\n")
    
    file.write(newObj)
               
# Gets pat 
dir_path = os.path.dirname(os.path.realpath(__file__))

# Gets all files
files = [f for f in listdir(str(dir_path) + "/images")]

filename = input("Enter a new name: ")

# Can enter with / without extension
if(filename[-3:] != ".js"):
    filename = filename + ".js"

# Opens file
file = open(str(filename), "w+")

# Starts writing js code
header = "const " + str(filename[0: -3])  + " =  [\n"
file.write(header)

filesSorted = sorted(files)

for i in range (len(filesSorted)):
    product = (filesSorted[i])[0:-4]
    createJSObject(product, file, i)

# Writes export code
file.write("]\n\nexport default " + filename[0:-3])

file.close()
    
