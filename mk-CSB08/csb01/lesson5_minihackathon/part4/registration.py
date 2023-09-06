# Viết chương trình cho phép người dùng đăng ký tài khoản với 3 thông tin: tên đăng nhập, mật khẩu, 
print("== Registration ==")
print("Username: ", end="")
username = input()


while True:
    print("Password: ", end="")
    password = input()
    checkLetter = False
    checkDigit = False
    for i in range(len(password)):
        if password[i].isdigit() == False:
            checkLetter = True
        else:
            checkDigit = True
    if len(password) > 8 and checkLetter == True and checkDigit == True:
        break
    else:
        print("Invalid password. Please input again.")
        
while True:
    print("Repeat password: ", end="")
    repeatPass = input()
    if repeatPass != password:
        print("Passwords not match. Please input again.")
    else:
        break

while True:
    print("Email: ", end="")
    email = input()
    if "@" in email and "." in email:
        break
    else:
        print("Invalid email. Please input again.")
print("Registered successfully.")