from heapq import heappush,heappop
import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
data = [[] for _ in range(n+1)]
for _ in range(m):
    a,b,c = map(int,input().split())
    data[a].append([c,b])
start,end = map(int,input().split())

def search(data,start,end):
    heap = []
    visited = [False for _ in range(n+1)]
    heappush(heap,[0,start,[]])
    cost_list = [0 for _ in range(n+1)]
    while heap:
        cost,to_idx,route = heappop(heap)
        if visited[to_idx]:
            continue
        visited[to_idx] = True
        if to_idx == end:
            print(cost)
            print(len(route)+1)
            print(" ".join(route),to_idx)
            return
        for next_idx in data[to_idx]:
            if visited[next_idx[1]]:
                continue
            heappush(heap,[next_idx[0]+cost,next_idx[1],route+[str(to_idx)]])
search(data,start,end)