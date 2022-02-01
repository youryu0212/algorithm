n,m = map(int,input().split())

def solution(n,cnt,target,acc):
  if cnt == target:
    return acc+"\n"
  result = ""
  for i in range(1,n+1):
    result += solution(n,cnt+1,target,acc+str(i)+" ")
  return result
print(solution(n,0,m,""))