def gcd(a,b):
    if a%b == 0:
        return b
    return gcd(b,a%b)

t = int(input())
for _ in range(t):
    a,b = map(int,input().split())
    print(a*b//gcd(a,b))