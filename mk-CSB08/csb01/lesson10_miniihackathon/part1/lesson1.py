laptop = {
    "HP": 20,
    "DELL": 50,
    "MACBOOK": 12,
    "ASUS": 30,
}

print("Available MACBOOKs:", laptop["MACBOOK"])

print("Input a brand:", end=" ")
brand = input()

print("Available", brand + "s", laptop[brand])