from collections import Counter
import sys
input = sys.stdin.readline
n,m,b = map(int,input().split())
graph = []
for _ in range(n):
    graph.extend(list(map(int,input().split())))
graph_dic = Counter(graph)
min_time = 10**18*9
height = 0 

for h in range(max(graph_dic.keys()),-1,-1):
    inventory = b
    add_block = 0
    cur_time = 0
    for cur_h, cur_cnt in graph_dic.items():
        dif = cur_h - h
        if dif > 0 :
            inventory += dif*cur_cnt
        elif dif<0:
            add_block -= dif*cur_cnt
    if inventory<add_block: continue
    cur_time = (inventory-b)*2 + add_block
    if cur_time<min_time:
        min_time = cur_time
        height = h
print(min_time,height)