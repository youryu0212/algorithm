n,s = map(int,input().split())
arr = list(map(int,input().split()))
start = 0
result = 0

def search(num,idx,target):
  global result
  if num == target:
    result += 1
  for i in range(idx,len(arr)):
    search(num+arr[i],i+1,target)
if s==0:
  result = -1
search(0,0,s)
print(result)