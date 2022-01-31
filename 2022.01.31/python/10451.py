import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)
t = int(input())
def search(num):
    if visited[num] : return 1
    visited[num] = True
    return search(nums[num])

for i in range(t):
    n = int(input())
    nums = [0] +  list(map(int,input().split()))
    visited = [False for _ in range(n+1)]
    result = 0
    for i in range(1,len(nums)):
        if visited[i]: continue
        result += search(i)
    print(result)