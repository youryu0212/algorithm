n = int(input())
if n == 1:
    print(0)
    exit()

def make_prime():
  prime = [True for _ in range(n+1)]
  prime[0] = prime[1] = 0
  for i in range(2,int(n**0.5)+1):
    j = 2
    while (i*j <= n):
      prime[i*j] = False
      j += 1
  return prime
def sum_prime(prime):
  prime_sum_list = [0]
  idx = 0
  for i in range(2,n+1):
    if prime[i]:
      prime_sum_list.append(i + prime_sum_list[idx])
      idx+=1
  return prime_sum_list
arr = make_prime()
prime_sum_list = sum_prime(arr)

left,right = 0,1
answer = 0
while left<len(prime_sum_list):
  num = prime_sum_list[right] - prime_sum_list[left]
  if num > n:
    left += 1
    continue
  if num == n:
    answer += 1
  if right == len(prime_sum_list)-1:
    left += 1
    continue
  right += 1
print(answer)