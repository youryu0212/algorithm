import sys
from heapq import heapify, heappush, heappop
input = sys.stdin.readline

T = int(input())

def D (n,label) :
  if n>0:
    while max_heap:
      num,label = heappop(max_heap)
      if visited[label]: continue
      visited[label] = True
      return num
  if n<0:
    while min_heap:
      num,label = heappop(min_heap)
      if visited[label]: continue
      visited[label] = True
      return num
  return None

def I(num,label) :
  heappush(max_heap,(-num,label))
  heappush(min_heap,(num,label))

fnc_dic = {
  "D":D,
  "I":I,
}

for _ in range(T):
  k = int(input())
  visited = [False for _ in range(k)]
  label = 0

  max_heap = []
  min_heap = []
  heapify(max_heap)
  heapify(min_heap)
  for _ in range(k):
    order,num = input().rstrip().split()
    fnc_dic[order](int(num),label)
    label += 1
  result = ["EMPTY"]
  if max_heap:
    temp = D(1,0)
    if type(temp) == int:
      result = [-temp, -temp]
      
  if min_heap:
    temp = D(-1,0)
    if type(temp) == int:
      result[1] = temp
  print(" ".join(map(str,result)))