#  - 부터 - 까지의 숫자들은 전부 묶는다. 그래야 최소가 되니까

s = input()
split_s = s.split("-")

for i in range(len(split_s)):
  split_s[i] = sum(map(int,split_s[i].split("+")))
if s[0] == "-":
  split_s[0] *= -1
result = split_s[0]
for i in range(1,len(split_s)):
  result -= split_s[i]
print(result)