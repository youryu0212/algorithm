n = int(input())
nums = []
for _ in range(n):
  nums.append(int(input()))

def insertion_sort(arr):
  for i in range(1,len(arr)):
    key_num = arr[i]
    idx = i-1
    for j in range(i-1,-1,-1):
      if key_num<arr[j]:
        arr[j+1] = arr[j]
        idx -= 1
      else:
        break
    if idx != i-1 : arr[idx+1] = key_num
insertion_sort(nums);
for num in nums:
  print(num)