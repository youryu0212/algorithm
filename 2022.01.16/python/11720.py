n = int(input())
num_str = input()
result = 0
for i in range(len(num_str)-1,-1,-1):
    result += int(num_str[i])
print(result)