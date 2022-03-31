from heapq import heappush,heappop
import sys
input = sys.stdin.readline

n = int(input())
minus_heapq = []
plus_heapq = []
idx = 0
for i in range(n):
    num = int(input())
    m = False
    p = False
    if num>0:
        heappush(plus_heapq,num)
    elif num<0:
        heappush(minus_heapq,-num)
    else:
        if minus_heapq:
            m = heappop(minus_heapq)
        if plus_heapq:
            p = heappop(plus_heapq)
        if m and not p:
            print(-m)
            continue
        if p and not m:
            print(p)
            continue
        if not p and not m:
            print(0)
            continue
        if m<=p:
            heappush(plus_heapq,p)
            print(-m)
        else:
            heappush(minus_heapq,m)
            print(p)