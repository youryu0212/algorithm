# 문제 출력방식에 배열 그냥 출력하면 에러나고, 배열 엘리먼트 끼리, 로 한 다음 붙여서 출력해주는 방식으로 해줘야함 요소 사이에 공백 때문에 오답이었음

from collections import deque

t = int(input())

def D(deq,reverse_cnt):
  if len(deq) == 0:
    return "error"
  if reverse_cnt%2 == 0:
    deq.popleft()
  else:
    deq.pop()
  return None

for _ in range(t):
  orders = input()
  n = int(input())
  s = input().split(",")
  reverse_cnt = 0
  flag = False
  if len(s)==1:
    s[0] = s[0][1:-1]
  elif len(s)>1:
    s[0] = s[0][1:]
    s[-1] = s[-1][:-1]
  deq = deque()
  for num in s:
    if num != "":
      deq.append(int(num))
  for order in orders:
    if order == "R":
      reverse_cnt += 1
    else:
      temp = D(deq,reverse_cnt)
      if temp:
        flag = True
        break
  if not flag:
    if reverse_cnt%2 == 0:
      print(f'[{",".join(map(str,deq))}]')
    else:
      print(f'[{",".join(map(str,list(deq)[::-1]))}]')
  else:
    print("error")