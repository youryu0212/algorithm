m,n = map(int,input().split())
prime = [True for _ in range(n+1)]
prime[0] = prime[1] = False
for i in range(2,int(n**0.5)+1):
    j = 2
    while i*j<=n:
        prime[i*j]=False
        j+=1
for i in range(m,n+1):
    if prime[i]: print(i)