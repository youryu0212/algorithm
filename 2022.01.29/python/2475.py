result = 0
for num in list(map(int,input().split())):
    result += num**2
print(result%10)