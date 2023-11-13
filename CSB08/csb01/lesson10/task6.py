print("Input sequence: ", end="")
inp_str = input()

char_count = {}

for char in inp_str:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1
print(char_count)