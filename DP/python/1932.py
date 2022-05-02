import sys
input = sys.stdin.readline
n = int(input())
data = [list(map(int,input().split())) for _ in range(n)]
dp = [[0 for _ in range(i+1)] for i in range(n)]
dp[0][0] = data[0][0]
for i in range(1,n):
    dp[i][0] = dp[i-1][0] + data[i][0]
    for j in range(1,i):
        dp[i][j] = max(dp[i-1][j-1],dp[i-1][j])+data[i][j]
    dp[i][-1] = dp[i-1][-1] + data[i][-1]
answer = max(dp[-1])
print(answer)