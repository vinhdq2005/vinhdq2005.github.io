number_list = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX']
numbers = {}

for i, num in enumerate(number_list):
    numbers[num] = i+1

print("Input a Roman number: ", end="")
inp_num = input()
if inp_num in numbers:
    print("Arabic number:", numbers[inp_num])
else:
    print("Not found")