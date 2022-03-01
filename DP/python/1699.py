n = int(input())
dp = [i for i in range(n+1)]
for i in range(1,n+1):
    for j in range(1,i):
        if j*j > i:
            break
        if dp[i] > dp[i-j*j] +1:    # dp[i-j**2] + dp[j**2](1개) 로 계산됨
            dp[i] = dp[i-j*j] +1
print(dp[n])