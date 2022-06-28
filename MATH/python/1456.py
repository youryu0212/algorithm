a,b = map(int,input().split())

def get_prime():
  prime_arr = [True for _ in range(10**7+1)]

  prime_arr[0] = False
  prime_arr[1] = False
  for i in range(2,int((10**7)**0.5)):
    if not prime_arr[i]:
      continue
    for j in range(i*i, 10**7+1, i):
      prime_arr[j] = False
  return list(filter(lambda idx:prime_arr[idx], range(len(prime_arr))))

def solution(a,b):
  prime_arr = get_prime()
  cnt = 0

  for prime_num in prime_arr:
    if prime_num*prime_num > b:
      break
    j = 2
    while prime_num ** j <= b:
      if (prime_num ** j <a):
        j+=1
        continue
      cnt += 1
      j += 1
  return cnt

answer = solution(a,b)
print(answer)