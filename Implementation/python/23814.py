d = int(input())
n,m,k = map(int,input().split())
max_num = (n+m+k)//d
remainder_n = d - (n%d)
remainder_m = d - (m%d)
result = 0
one = two = three = four = 0
if n//d + m//d + k//d == max_num or (remainder_n > k and remainder_m>k) :
    one = k
if remainder_n <= k and (n+remainder_n)//d + m//d + (k-remainder_n)//d == max_num:
    two = k-remainder_n
if remainder_m <= k and n//d + (m+remainder_m)//d + (k-remainder_m)//d == max_num:
    three = k-remainder_m
if remainder_m + remainder_n <= k and (n+remainder_n)//d + (m+remainder_m)//d + (k-remainder_m-remainder_n)//d == max_num:
    four = k-remainder_n-remainder_m
result = max(one,two,three,four)
print(result)