import sys
input = sys.stdin.readline

n,m,r = map(int,input().split())
arr = [list(input().rstrip().split()) for _ in range(n)]

def one (arr) :
  length = len(arr)//2
  for i in range(length):
    arr[i] , arr[-1-i] = arr[-1-i],arr[i]
  return arr

def two (arr):
  for i in range(len(arr)):
    arr[i] = arr[i][::-1]
  return arr
def three (arr):
  new_arr = [[0 for _ in range(len(arr))] for _ in range(len(arr[0]))]
  for i in range(len(arr)):
    for j in range(len(arr[0])):
      new_arr[j][len(arr)-i-1] = arr[i][j]
  return new_arr
def four (arr):
  new_arr = [[0 for _ in range(len(arr))] for _ in range(len(arr[0]))]
  for i in range(len(arr)):
    for j in range(len(arr[0])):
      new_arr[len(arr[0])-j-1][i] = arr[i][j]
  return new_arr

def divide(arr):
  half_r, half_c = len(arr)//2, len(arr[0])//2
  one = [arr[i][:half_c] for i in range(0,half_r)]
  two = [arr[i][half_c:] for i in range(0,half_r)]
  three = [arr[i][half_c:] for i in range(half_r,len(arr))]
  four = [arr[i][:half_c] for i in range(half_r,len(arr))]
  return one,two,three,four
def five (arr):
  one,two,three,four = divide(arr)
  new_arr = []
  for i in range(len(arr)//2):
    new_arr.append(four[i] + one[i])
  for i in range(len(arr)//2):
    new_arr.append(three[i] + two[i])
  return new_arr
def six (arr):
  one,two,three,four = divide(arr)
  new_arr = []
  for i in range(len(arr)//2):
    new_arr.append(two[i] + three[i])
  for i in range(len(arr)//2):
    new_arr.append(one[i] + four[i])
  return new_arr

def create_arr_string(arr):
  s = ""
  for i in range(len(arr)):
    s += " ".join(arr[i]) + "\n"
  return s

orders_dic = {"1":one,"2":two,"3":three,"4":four,"5":five,"6":six}
orders = input().split()
for order in orders:
  arr = orders_dic[order](arr)
print(create_arr_string(arr))