
diem = float(input("nhập điểm trung bình: "))
hanhkiem = input("nhập hạnh kiểm: ")

if 10 >= diem >= 8.0:
    if hanhkiem == "tốt":
        print("HSG")
    elif hanhkiem == "khá":
        print("HSK")
    elif hanhkiem == "trung bình":
        print("HSTB")
    elif hanhkiem == "yếu":
        print("HSY")
elif diem >= 6.5:
    if hanhkiem == "tốt" or hanhkiem == "khá":
        print("HSK")
    elif hanhkiem == "trung bình":
        print("HSTB")
    elif hanhkiem == "yếu":
        print("HSY")
elif diem >= 5.0:
    if hanhkiem == "tốt" or hanhkiem == "khá" or hanhkiem == "trung bình":
        print("HSTB")
    elif hanhkiem == "yếu":
        print("HSY")
elif 0 <= diem < 5.0:
    print("HSY")