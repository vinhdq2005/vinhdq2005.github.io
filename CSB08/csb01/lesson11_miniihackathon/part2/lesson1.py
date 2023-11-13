laptop = {
    "HP": 20,
    "DELL": 50,
    "MACBOOK": 12,
    "ASUS": 30,
}
laptop["TOSHIBA"] = 10

print("Available products: ")
for key in laptop:
    print("-", key, ":", laptop[key])

