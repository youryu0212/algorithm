s = input()
cnt = [-1 for _ in range(26)]
i = 0
for char in s:
    idx = ord(char)-ord("a")
    if cnt[idx] == -1:
        cnt[idx] = i
    i += 1
print(" ".join(map(str,cnt)))