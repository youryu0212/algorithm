n = int(input())
dp = [0 for _ in range(n+1)]
dp[1] = 1
for i in range(2,n+1):
  j = 1
  cnt = 10**18*9
  while j*j <=i:
    cnt = min(cnt,dp[i-j*j])
    j+=1
  dp[i] = cnt+1
print(dp[n])