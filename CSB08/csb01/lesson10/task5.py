names = {
  'students': [
    {'firstName': 'Nikki', 'lastName': 'Roysden'},
    {'firstName': 'Mervin', 'lastName': 'Friedland'},
    {'firstName': 'Aron', 'lastName': 'Wilkins'}
  ],
  'teachers': [
    {'firstName': 'Amberly', 'lastName': 'Calico'},
    {'firstName': 'Regine', 'lastName': 'Agtarap'}
  ]
}

for group, name_list in names.items():
    print(f"List of {group}:")
    for person in name_list:
        print("-", person['firstName'], person['lastName'])