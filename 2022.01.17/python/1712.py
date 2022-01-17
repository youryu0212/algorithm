a,b,c = map(int,input().split())
if (c-b) <= 0:
    result = -1
else:
    result = a//(c-b)+1
print(result)