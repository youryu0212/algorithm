import sys
input = sys.stdin.readline
n = int(input())
nums = []
for _ in range(n):
    nums.append(int(input()))

def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr)//2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    i = j = k = 0
    while (i<len(left) and j<len(right)):
        if left[i] <= right[j]: 
            arr[k] = left[i]
            i += 1
        else: 
            arr[k] = right[j]
            j += 1
        k+=1
    while i<len(left):
        arr[k] = left[i]
        k+=1
        i+=1
    while j<len(right):
        arr[k] = right[j]
        k += 1
        j += 1
    return arr
merge_sort(nums)
for num in nums:
    print(num)