def is_palindrome(inp):
    if inp == inp[::-1]:
        print("This is palindrome")
    else:
        print("This is not palindrome")
print("Input a text: ", end="")
inp_text = str(input())
is_palindrome(inp_text)
