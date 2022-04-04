import sys
input = sys.stdin.readline
n,m = map(int,input().rstrip().split())
dic = {}
for _ in range(n):
  id_,password_ = input().split()
  dic[id_] = password_
result = ""
for _ in range(m):
  id_ = input().rstrip()
  result += dic[id_]+ "\n"
print(result)