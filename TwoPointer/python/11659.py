import sys
input = sys.stdin.readline
n,m = map(int,input().split())
arr = list(map(int,input().split()))
sum_arr = [0]
for i in range(len(arr)):
  sum_arr.append(arr[i] + sum_arr[i])
for _ in range(m):
  a,b = map(int,input().split())
  a -= 1
  print(sum_arr[b] - sum_arr[a])
