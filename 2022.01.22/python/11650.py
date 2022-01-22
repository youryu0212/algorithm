import sys
input = sys.stdin.readline
n = int(input())
nums = sorted([list(map(int,input().split())) for _ in range(n)],key=lambda x:(x[0],x[1]))
for num in nums:
    print(" ".join(map(str,num)))