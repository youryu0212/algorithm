n = int(input())
star_list = [[0 for _ in range(n)] for _ in range(n)]

def stars(star_list,r,c):
    if star_list[r][c] != 0 : return star_list[r][c]
    if r%3 == 1 and c%3 == 1:
        star_list[r][c] = " "
        return " "
    if r>=3 and c>= 3:
        star_list[r][c] = stars(star_list,r//3,c//3)
    else:
        star_list[r][c] = "*"
    return star_list[r][c]
for i in range(n):
    for j in range(n):
        star_list[i][j] = stars(star_list,i,j)
print('\n'.join([''.join(i) for i in star_list]))