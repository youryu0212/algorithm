result = 0
idx = 0
for i in range(1,10):
    a = int(input())
    if a>result:
        result = a
        idx = i

print(result)
print(idx)