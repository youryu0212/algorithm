MAX_RANGE = 10000

def get_prime():
  prime_arr = [True for _ in range(MAX_RANGE)]
  prime_arr[0] = prime_arr[1] = False
  for i in range(2,int(MAX_RANGE**0.5+1)):
    for j in range(i**2,MAX_RANGE,i):
      prime_arr[j] = False
  return list(filter(lambda idx:prime_arr[idx],range(len(prime_arr))))

def binary_search (prime_arr,num):
  left,right = -1,len(prime_arr)-1
  while left+1 < right:
    mid = left + (right-left)//2
    if prime_arr[mid] * prime_arr[mid+1] <= num:
      left = mid
    else:
      right = mid
  return right

def solution():
  N = int(input())
  prime_arr = get_prime()
  left_idx = binary_search(prime_arr,N)
  print(prime_arr[left_idx]*prime_arr[left_idx+1])
solution()

