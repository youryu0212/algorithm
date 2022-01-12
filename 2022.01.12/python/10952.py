result = []
while True:
    a,b = map(int,input().split())
    if a==b==0:
        break
    result.append(str(a+b))
print("\n".join(result))