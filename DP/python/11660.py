import sys
input = sys.stdin.readline
n,m = map(int,input().split())
data = [list(map(int,input().split())) for _ in range(n)]
dp = [[0 for _ in range(n+1)] for _ in range(n+1)]
dp[1][1] = data[0][0]
for i in range(1,n):
    dp[1][i+1] = data[0][i] + dp[1][i]
for i in range(1,n):
    dp[i+1][1] = data[i][0] + dp[i][1]
    for j in range(1,n):
        dp[i+1][j+1] = data[i][j] + dp[i][j+1] + dp[i+1][j] - dp[i][j]
for _ in range(m):
    x_one, y_one, x_two, y_two = map(int,input().split())
    result = dp[x_two][y_two]
    if y_one > 1:
        result -= dp[x_two][y_one-1]
    if x_one > 1:
        result -= dp[x_one-1][y_two]
    if x_one>1 and y_one>1:
        result += dp[x_one-1][y_one-1]
    print(result)