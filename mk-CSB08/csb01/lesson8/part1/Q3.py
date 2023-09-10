print("Input a text: ", end="")
input_str = input()
def reverse_str(str):
    str_length = len(str)
    print("reverse text: ", end="")
    for i in range (str_length-1, -1, -1):
        print(str[i], end="")
reverse_str(input_str)
