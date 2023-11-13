numbers = {'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5,'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9, 'X': 10}
numbers_2 = {'XI': 11, 'XII': 12, 'XIII': 13, 'XIV': 14, 'XV': 15,'XVI': 16, 'XVII': 17, 'XVIII': 18, 'XIX': 19, 'XX': 20}

for key, value in numbers_2.items():
    numbers[key] = value
print("Input a Roman number: ", end="")
inp_num = input()
if inp_num in numbers:
    print("Arabic number:", numbers[inp_num])
else:
    print("Not found")