n,m = map(int,input().split())
arr = sorted(map(int,input().split()))

answer = []
def combinations (idx,result,length):
  if length == m:
    answer.append(" ".join(map(str,result)))
    return
  for i in range(idx,n):
    combinations(i,result+[arr[i]],length+1)

for i in range(n):
  combinations(i,[arr[i]],1)
print("\n".join(answer))