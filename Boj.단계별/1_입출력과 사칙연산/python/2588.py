# 배열 뒤집어서 입력받기 ( 리스트로 )
# b부터 반복하면서 b의 LSB -> MSB
# digit : 곱 계산의 자릿수, place_value = (곱 계산 결과의) 합 계산의 자릿수

a = list(map(int,input()))[::-1]
b = list(map(int,input()))[::-1]

place_value = 1
result = 0

for y in b:
    digit = 1
    tmp = 0
    for x in a:
        tmp += x*y*digit
        digit *= 10
    print(tmp)
    result += tmp*place_value
    place_value *= 10
print(result)