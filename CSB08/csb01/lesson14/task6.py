print("Input a number: ", end="")
inp_num = int(input())
count = 0

while inp_num > 1:
    inp_num = inp_num / 10
    count += 1
print("This number has", count, "digit(s)")