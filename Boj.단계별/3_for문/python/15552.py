import sys
input = sys.stdin.readline
t = int(input())
for i in range(t):
    a,b = map(int,input().split())
    sys.stdout.write(str(a+b)+"\n")