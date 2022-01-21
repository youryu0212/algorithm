n = int(input())
result = 0
for i in range(1,n+1):
    madeSum = num = i
    while num:
        madeSum += num%10
        num //= 10
    if madeSum == n:
        result = i
        break
print(result)