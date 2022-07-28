import sys
input = sys.stdin.readline
t = int(input())
for _ in range(t):
    n = int(input())
    data = []
    result = 1
    for _ in range(n):
        data.append(list(map(int,input().split())))
    data.sort(key = lambda x:x[0])
    now = data[0][1]
    for i in range(1,n):
        if now>data[i][1]:
            now = data[i][1]
            result += 1
    print(result)