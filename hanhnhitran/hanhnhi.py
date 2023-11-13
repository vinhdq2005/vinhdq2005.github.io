from datetime import datetime
month = datetime.now().month
day = datetime.now().day
year = datetime.now().year
import datetime
from datetime import date

print("Are you Canadian citizen?")
citizen = input()
print("Are you a resident of Alberta?")
resident = input()
print("What is the month of your birth date?")
month = int(input())
print("What is the day of your birth date?")
day = int(input())
print("What is the year of your birth date?")
year = int(input())

while True:
    if citizen.lower() != "yes" and citizen.lower() != "no":
        print("Invalid response to citizenship.")
        break
    if resident.lower() != "yes" and resident.lower() != "no":
        print("Invalid response to residency.")
        break
    if month < 1 or month > 12:
        print("Invalid month.")
        break
    if day < 1 or day > 31:
        print("Invalid day.")
        break
    if year < 1900 or year > 2023:
        print("Invalid year.")
        break
    break
    
isValidDate = True
try:
    datetime.datetime(year, month, day)
except ValueError:
    isValidDate = False

if not isValidDate:
    print("Invalid birth date")

today = date.today()
age = today.year - year - ((today.month, today.day) < (month, day))

if age < 18:
    print("You are not eligible to vote") 
else:
    if citizen.lower() == "yes" and resident.lower() == "yes":
        print("You are eligible to vote")
    elif citizen.lower() == "no" or resident.lower() == "no":
        print("You are not eligible to vote")
