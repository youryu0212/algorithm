num = target = int(input());
cnt = 0
while True:
    if num<10:
        new_num = num
    else:
        new_num = num%10 + num//10
    num = (num%10)*10 + new_num%10
    cnt += 1
    if num == target:
        break
print(cnt)    