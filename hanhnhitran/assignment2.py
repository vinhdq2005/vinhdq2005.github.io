# while True:
#     data_points = int(input("How many data points do you have? "))
#     if data_points <= 0:
#         print("Must enter at least one data point.")
#     else:
#         for i in range(1, data_points+1, 1):
#             print("What is the year of data point", i, "?", end="")
#             inp_year = int(input())
#             if inp_year <= 0:
#                 print("Invalid year")
#                 break

year = []
data_points = int(input("How many data points do you have? "))
if data_points <= 0:
    print("Must enter at least one data point.")
else:
    for i in range(1, data_points+1, 1):
        print("What is the year of data point", i, "?", end="")
        inp_year = int(input())
        if inp_year <= 0:
            print("Invalid year")
            break
        else:
            year.append(inp_year)
            if i >= 2:
                if year[i-1] < year[i-2]:
                    print("Years must be entered in order.")
                    break
                elif inp_year in year:
                    print("Same year entered twice.")
                    break
                
            
            
            