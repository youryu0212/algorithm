n = sorted(input(),reverse=True)
result = -1
if sum(map(int,n)) %3 == 0 and "0" in n:
  result = "".join(n)
print(result)