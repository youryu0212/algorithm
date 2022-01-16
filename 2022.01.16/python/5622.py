dial = {};
for i in range(15):
    dial[ord("A")+i] = 3+(i//3)
for i in range(15,19):
    dial[ord("A")+i] = 8
for i in range(19,22):
    dial[ord("A")+i] = 9
for i in range(22,26):
    dial[ord("A")+i] = 10
s = input()
result = 0
for char in s:
    result += dial[ord(char)]
print(result)