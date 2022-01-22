"""
함수형 프로그래밍 코드 :
"""

n = int(input())
for s in sorted([input().split() for _ in range(n)],key=lambda x:(int(x[0]))):
  print(" ".join(s))


"""
빠른 동작 코드 : 

import sys
input = sys.stdin.readline
n = int(input())
result = ""
for s in sorted([input().split() for _ in range(n)],key=lambda x:(int(x[0]))):
  result+=" ".join(s)+"\n"
sys.stdout.write(result)
"""