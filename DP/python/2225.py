n,k = map(int,input().split())
dp = [[1 for _ in range(201)] for _ in range(201)]
for i in range(1,201):
  for j in range(2,201):
    dp[i][j] = (dp[i][j-1] + dp[i-1][j])%1000000000
print(dp[n][k])