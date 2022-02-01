prime = [True for _ in range(123456*2+1)]
prime[0] = prime[1] = False
for i in range(2,int((123456*2)**0.5)+1):
    j = 2
    while i*j<=123456*2:
        prime[i*j] = False
        j+=1
while True:
    n = int(input())
    if n == 0: break
    cnt = 0
    for i in range(n+1,n*2+1):
        if prime[i] : cnt += 1
    print(cnt)