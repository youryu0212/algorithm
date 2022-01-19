m = int(input())
n = int(input())
result = 0
min_prime = False;
prime = [False for _ in range(n+1)]
prime[0] = prime[1] = True
for i in range(2,n):
    j = 2
    while i*j <= n:
        prime[i*j] = True
        j+=1
for i in range(m,n+1):
    if prime[i]: continue
    if not min_prime : min_prime = i
    result += i
if result == 0 : print(-1)
else:
    print(result)
    print(min_prime)