# Viết chương trình cho người dùng nhập vào một tháng trong năm và in ra số ngày của tháng này
import calendar
print("Input a month: ", end="")
month = int(input())
print(calendar.monthrange(2023, month)[1])