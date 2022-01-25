n,m = map(int,input().split())
check_arr = [False for _ in range(n+1)]

def solution(n,cnt,target,s):
  if cnt == target:
    return s+"\n"
  result = ""
  for i in range(1,n+1):
    if (not check_arr[i]):
      check_arr[i] = True
      result += solution(n,cnt+1,target,s+f'{str(i)} ')
      check_arr[i] = False
      
  return result
print(solution(n,0,m,""))