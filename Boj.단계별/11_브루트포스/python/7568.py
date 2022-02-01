n = int(input())
bulk = []
result = ""
for _ in range(n):
    bulk.append(list(map(int,input().split())))
for a in bulk:
    rank = 1
    for b in bulk:
        if b[0]>a[0] and b[1]>a[1]: rank+=1
    result += f'{rank} '
print(result)