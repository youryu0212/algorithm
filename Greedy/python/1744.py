n = int(input())
minus_zero = []
plus = []
result = 0
for _ in range(n):
  num = int(input())
  if num<=0:
    minus_zero.append(num)
    continue
  if num==1:
    result+=1
    continue
  plus.append(num)
minus_zero.sort(reverse=True)
plus.sort()
while len(minus_zero)>1:
  result += minus_zero.pop() * minus_zero.pop()
while len(plus)>1:
  result += plus.pop() * plus.pop()
if len(minus_zero)>0:
  result += minus_zero[-1]
if len(plus)>0:
  result += plus[-1]
print(result)