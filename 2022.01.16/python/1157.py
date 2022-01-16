s = input().upper()
cnt_arr = [0 for _ in range(26)]
for char in s:
    cnt_arr[ord(char)-ord("A")] += 1
max_num = max(cnt_arr)
result = False
for i in range(len(cnt_arr)):
    if cnt_arr[i] == max_num:
        if result:
            result = "?"
            break
        result = chr(ord("A")+i)
print(result)