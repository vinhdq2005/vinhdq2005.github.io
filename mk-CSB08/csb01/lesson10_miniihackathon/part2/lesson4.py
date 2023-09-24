laptop = {
    "HP": 20,
    "DELL": 50,
    "MACBOOK": 12,
    "ASUS": 30,
}
laptop["DELL"] = 60
laptop["MACBOOK"] = 2
i = 0
for key in laptop:
    print("-", key, ":", laptop[key])
    i += laptop[key]

print("Total products:", i)