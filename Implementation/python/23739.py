n = int(input())
data = [int(input()) for _ in range(n)]
limit_time = 30
result = 0

for num in data:
    if num >60:
        limit_time = 30
        continue
    if num%2 == 0:
        if limit_time >= num//2:
            result += 1
    else:
        if limit_time > num//2:
            result += 1
    limit_time -= num
    if limit_time<=0:
        limit_time = 30
print(result)