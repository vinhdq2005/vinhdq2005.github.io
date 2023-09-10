print("Input a text: ", end="")
inp_str = input()

def is_palindrome(str):
    str_length = len(str)
    reversed_str = ""
    for i in range(str_length-1, -1, -1):
        reversed_str += str[i]
    if reversed_str == str:
        print("This is a palindrome")
    else:
        print("This is not a palindrome")
        
is_palindrome(inp_str)