import sys
input = sys.stdin.readline
n = int(input())
dp = [0] * 1000001
dp[1] = 1
dp[2] = 2
dp[3] = 3
dp[4] = 5
dp[5] = 8
for i in range(6,n+1):
    dp[i] = (dp[i-1] + dp[i-2])%15746
print(dp[n])