import sys
input = sys.stdin.readline
n = int(input())
cnt = [0 for _ in range(10001)]
for _ in range(n):
    cnt[int(input())] += 1
for i in range(len(cnt)):
    while cnt[i]:
        cnt[i] -= 1
        sys.stdout.write(f"{i}\n")