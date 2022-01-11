t = int(input(""));
for i in range(1,t+1):
    str = " "*(t-i);
    for j in range(t-i,t):
        str += "*";
    print(str);