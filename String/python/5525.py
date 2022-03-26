#  탐색 과정에서 문자열 바꾸면 안됨 (인덱스 순서대로 뒤로 가면서 체크하자)
#  총 길이는 2n + 1개
#  i = 0 부터  길이 - 2n 까지 반복 돌리면 문자열길이- (2n+1)번 인덱스 까지 조회 가능
# p = (2*n) + 1 길이의 IOI 형태 문자열 생성
n = int(input())
m = int(input())
s = input()

result,cnt = 0,0
i = 1
while i<m-1:
  if s[i-1] == "I" and s[i] == "O" and s[i+1] == "I":
    cnt += 1
    if cnt ==n:
      cnt -= 1
      result += 1
    i += 1
  else:
    cnt = 0
  i += 1
print(result)


# 틀려야하는데 왜 맞다고 나오지??
n = int(input())
m = int(input())
s = input()

result,cnt = 0,0;
i = 0
while (i<m-1):
    if s[i-1] =="I" and s[i] == "O" and s[i+1] == "I":
        cnt += 1
        if cnt==n:
            cnt -=1
            result +=1
        i += 1
    else:
        cnt = 0
    i+=1
print(result)