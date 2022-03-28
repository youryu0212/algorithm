import sys
input = sys.stdin.readline
T = int(input())
def gcd(a,b):
    if a%b == 0:
        return b
    return gcd(b,a%b)
for _ in range(T):
    m,n,x,y = map(int,input().split())
    dif = m-n
    cnt = x
    gcd_ = gcd(m,n)
    lcm = m*n//gcd_
    b = x%n
    if b == 0:
        b = n
    check_bool = False
    while cnt<=lcm:
        if b == y:
            check_bool = True
            break
        cnt += m
        b += dif
        if b>n:
            b %= n
        if b<=0:
            b += n
    if check_bool or b==y:
        print(cnt)
    else:
        print(-1)