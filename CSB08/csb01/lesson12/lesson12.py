import os
# os.rmdir(" ") #xoa folder
if os.path.exists("D:\demo.txt "):
  os.remove("D:\demo.txt ")
else:
  print("The file does not exist")
# f = open("D:\demo.txt" ,"a")
# f.write("Hello\n")
# f.close()
# f = open("D:\demo.txt" ,"r")
# print(f.read())
# f.close()