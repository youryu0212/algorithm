n = int(input())
cnt = 0
def hansoo(n):
    if n<100:
        return 1
    prev = n%10
    n //= 10
    dif = n%10 - prev
    while n:
        if dif != n%10 - prev:
            return 0
        prev = n%10
        n //= 10
    return 1
for i in range(1,n+1):
    cnt += hansoo(i)
print(cnt)