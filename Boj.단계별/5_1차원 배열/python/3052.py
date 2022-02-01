cnt = [0 for _ in range(42)]
result = 0
for _ in range(10):
    cnt[int(input())%42] += 1
for i in range(len(cnt)):
    if cnt[i]>0:
        result += 1
print(result)