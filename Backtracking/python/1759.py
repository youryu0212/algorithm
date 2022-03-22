from itertools import combinations
l,c = map(int,input().split())
alpha = sorted(input().split())

answer = ""
mo_set = {"a","e","i","o","u"}
def search(s):
  mo_cnt = 0
  ja_cnt = 0
  for char in s:
    if char in mo_set:
      mo_cnt+=1
    else:
      ja_cnt+=1
  if mo_cnt>=1  and ja_cnt>=2:
    return s
  return False
for s in list(combinations(alpha,l)):
  s =search("".join(s))
  if (s):
    answer += s + "\n"
print(answer)