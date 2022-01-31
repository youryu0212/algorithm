while True:
    s = input()
    if s == "0" : break
    if s == s[::-1]: result = "yes"
    else : result = "no"
    print(result)