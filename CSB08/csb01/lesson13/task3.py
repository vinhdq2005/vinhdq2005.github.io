# Cau 3: Palindrome là string khi viết theo chiều xuôi hay chiều ngược đều là một string. VD: lol, anna,…  Viết hàm check một string có phải palindrome hay không, trả về True nếu perfect, False nếu không
def check_Palindrome(string):
    new_str = ""
    for i in range (len(string)-1, -1, -1):
        new_str += string[i]
    print(new_str)
    print(string)
    if new_str == string:
        return True
    else:
        return False

print("Nhap mot string: ", end="")
string = str(input())

if check_Palindrome(string):
    print("True")
else:
    print("False")