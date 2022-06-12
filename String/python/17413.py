words = input()
word =[]
tag = []
output_list = []
output_string = ''
i=0
while True:
    if i == len(words):
        break
    while i < len(words) and words[i] != '<':
        if words[i] == ' ':
            output_list.append(word[::-1])
            output_list.append([' '])
            word = []
            i+=1
            continue
        word.append(words[i])
        i+=1
    if word:
        output_list.append(word[::-1])
        word = []
    while i<len(words) and words[i] != '>':
        tag.append(words[i])
        i+=1
    if i<len(words) and words[i] == '>':
        output_list.append(tag)
        tag = []
        output_list.append(['>'])
        i+=1
for s in output_list:
    output_string += "".join(s)
print(output_string)