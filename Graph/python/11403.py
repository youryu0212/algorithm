import sys
sys.setrecursionlimit(10**9)
n = int(input())
graph = [[] for _ in range(n)]
result = [[0 for _ in range(n)] for _ in range(n)]
for i in range(n):
    path = list(map(int,input().split()))
    for j in range(n):
        if path[j] == 1:
            graph[i].append(j)
def check(i,node):
    if result[i][node]: return
    result[i][node] = 1
    for next_node in graph[node]:
        if result[i][next_node]:
            continue
        check(i,next_node)
for i in range(n):
    for node in graph[i]:
        check(i,node)
for i in range(n):
    print(" ".join(map(str,result[i])))