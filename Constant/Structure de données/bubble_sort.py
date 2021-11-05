soap = [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42]

for h in range(len(soap)-1):
  for i in range(len(soap)-1) :
    if soap[i] > soap[i+1]:
      temp = soap[i]
      soap[i] = soap[i+1]
      soap[i+1] = temp

print(soap)
