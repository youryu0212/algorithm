e,s,m = map(int,input().split())
year = s

while True:
  if ((year%15) or 15) == e and ((year%28) or 28) == s and ((year%19) or 19) == m :
    break
  year += 28
print(year)