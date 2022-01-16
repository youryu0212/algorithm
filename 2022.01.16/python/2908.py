arr = input().split()
for i in range(len(arr)):
    arr[i] = arr[i][::-1]
print(max(map(int,arr)))