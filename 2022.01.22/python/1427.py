s = input()
result = ""
cnt = [0 for _ in range(10)]
for char in s:
    cnt[int(char)] += 1

for i in range(9,-1,-1):
    while cnt[i]:
        cnt[i] -= 1
        result += str(i)
print(result)