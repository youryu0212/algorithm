a,p = map(int,input().split())
d = [a]
check = [0 for _ in range(9**5*6+1)]
idx = 0
while True:
    num = d[idx]
    new_num = 0
    idx += 1
    check[num] += 1
    if (check[num]==3): break
    while num:
        new_num += (num%10)**p
        num //= 10
    d.append(new_num)
result = 0
for i in range(1,len(check)):
    if check[i] == 1:
        result += 1
print(result)