# coding=utf-8
# @Time: 2023/11/20 11:34
# @File: methods.py
# @Software: PyCharm

import pandas as pd


def init_Food():
    imageurls = []
    # 读取文本文件内容并提取偶数行的URL
    with open('static/imageUrl.txt', 'r', encoding='utf-8') as file:
        lines = file.readlines()
        for i in range(1, len(lines), 2):  # 从第2行开始，步长为2，即提取偶数行
            line = lines[i]
            url = line.strip()  # 假设每行只包含一个URL
            imageurls.append(url)

    food = []
    # 读取 Excel 文件
    df = pd.read_excel('static/list.xlsx')  # 替换为你的文件路径和文件名
    df.fillna(0, inplace=True)  # 将空白单元格替换为 0
    # 获取单元格内容
    for i in range(0, 79):
        row = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
        for j in range(0, 18):
            row[j] = df.iloc[i, j]
        cata = ''  # 食材种类
        eva = ''  # 评价等级
        color = ''  # 边框颜色
        # 食材分类
        if 0 <= i <= 13:
            cata = 'food,grain'
        if 14 <= i <= 44:
            cata = 'food,vegetable'
        if 45 <= i <= 61:
            cata = 'food,fruit'
        if 62 <= i <= 79:
            cata = 'food,meat'
        # 根据分数设置评价等级和边框颜色
        if row[17] <= 4:
            eva = 'Limit'
            color = '#fbbd08'
        if 4 < row[17] <= 6:
            eva = 'Normal'
            color = '#666666'
        if 6 < row[17] <= 9:
            eva = 'Good'
            color = '#8dc63f'
        if row[17] > 9:
            eva = 'Excellent'
            color = '#39b54a'
        foodItem = dict(name=row[0], cal=row[16], cata=cata, amount=100, score=row[17], eva=eva, color=color,
                        nutrition=[row[1], row[2], row[3], row[14], row[15], row[4], row[8], row[9], row[6], row[5],
                                   row[7], row[10], row[11], row[12], row[13]], image=imageurls[i])
        food.append(foodItem)
    return food


if __name__ == '__main__':
    pass
