n = int(input())
arr = sorted(map(int,input().split()))


def search(arr,n):
  idx_arr = [0 for _ in range(3)]
  min_sum = 10**18*9
  for i in range(n-2):
    left,right = i+1, n-1
    while left<right:
      total = arr[i] + arr[left] + arr[right]
      if (abs(total) < abs(min_sum)):
        idx_arr = [arr[i],arr[left],arr[right]]
        min_sum = total
      if total>0:
        right -= 1
      if total<0:
        left += 1
      if total == 0:
        return " ".join(map(str,sorted(idx_arr)))
  return " ".join(map(str,sorted(idx_arr)))

answer = search(arr,n)
print(answer)