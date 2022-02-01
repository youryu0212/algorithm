prime = [True for _ in range(10001)]
prime[0] = prime[1] = False
for i in range(2,int((10000*2)**0.5)+1):
    j = 2
    while i*j <= 10000:
        prime[i*j] = False
        j += 1
for _ in range(int(input())):
    n = int(input())
    a = n//2
    while a:
        b = n-a
        if prime[a] and prime[b] : break
        a -= 1
    print(a,b)