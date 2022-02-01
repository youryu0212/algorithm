import sys
input = sys.stdin.readline

nums = [list(map(int,input().split())) for _ in range(9)]
target = [[i,j] for i in range(9) for j in range(9) if nums[i][j] == 0]


def check(r,c,num):
  for i in range(9):
    if nums[r][i] == num : return False
    if nums[i][c] == num : return False
  x,y = (r//3)*3, (c//3)*3
  for i in range(3):
    for j in range(3):
      if nums[x+i][y+j] == num : return False
  return True;
def solution(cnt):
  if cnt == len(target):
    for num in nums:
      sys.stdout.write(" ".join(map(str,num))+"\n")
    exit()
  r,c = target[cnt][0],target[cnt][1]
  for i in range(1,10):
    if (check(r,c,i)):
      nums[r][c] = i
      solution(cnt+1)
      nums[r][c] = 0
solution(0)