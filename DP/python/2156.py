n = int(input())
drink = [int(input()) for _ in range(n)]
dp = [[0,0,0] for _ in range(n)]
dp[0][1] = drink[0]
for i in range(1,n):
    dp[i][0] = max(dp[i-1])
    dp[i][1] = dp[i-1][0]+drink[i]
    dp[i][2] = dp[i-1][1]+drink[i]
print(max(dp[n-1]))