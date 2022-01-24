import sys
input = sys.stdin.readline
n = int(input())
s = sorted(set([input() for _ in range(n)]),key=lambda x: (len(x),x[:]))

for word in s:
    sys.stdout.write(word)