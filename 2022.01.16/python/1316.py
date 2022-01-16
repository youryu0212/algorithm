n = int(input())
result = 0
for i in range(n):
    s = input()
    alpha_cnt = [False] * 26
    saved_char = ord(s[0])-ord('a')
    check = True
    for j in range(1,len(s)):
        new_char = ord(s[j])-ord('a')
        if alpha_cnt[new_char]:
            check = False
            break
        if new_char != saved_char:
            alpha_cnt[saved_char] = True
            saved_char = new_char
    if check:
        result +=1
print(result)