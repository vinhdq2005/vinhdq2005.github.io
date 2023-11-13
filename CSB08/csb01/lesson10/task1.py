numbers = {'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5,'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9, 'X': 10}
print("Input a Roman number: ", end="")
inp_num = input()
if inp_num in numbers:
    print("Arabic number:", numbers[inp_num])
else:
    print("Not found")