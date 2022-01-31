n = int(input())
s = input()
result = 0
for i in range(len(s)):
    char = s[i]
    result += ( (ord(char) - ord("a") + 1) % 124567891 * (31**i)% 1234567891 )
print(result%1234567891)