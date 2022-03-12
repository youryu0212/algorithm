import heapq
import sys
input = sys.stdin.readline

n = int(input())
heap_ = []
for _ in range(n):
    x = int(input())
    if x != 0:
        heapq.heappush(heap_,x)
    else:
        output = 0
        if heap_:
            output = heapq.heappop(heap_)
        print(output)