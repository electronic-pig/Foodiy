# coding=utf-8
# @Time: 2023/11/20 11:34
# @File: methods.py
# @Software: PyCharm

import re

import pandas as pd
import requests

mealList = [{'name': '土豆烧牛肉', 'list': [65, 65, 65, 14, 38], 'cata': 'lunch', 'score': 8.6},
            {'name': '番茄炒蛋', 'list': [78, 78, 35, 35, 35, 35], 'cata': 'lunch', 'score': 8.3},
            {'name': '麻婆豆腐', 'list': [4, 4, 4, 4, 19], 'cata': 'lunch', 'score': 7.6},
            {'name': '宫保鸡丁', 'list': [8, 67, 67], 'cata': 'lunch', 'score': 7.7},
            {'name': '糖醋排骨', 'list': [63, 63, 63, 63], 'cata': 'lunch', 'score': 9.6},
            {'name': '酸辣土豆丝', 'list': [14, 14, 19], 'cata': 'lunch,vegetarian', 'score': 6.3},
            {'name': '地三鲜', 'list': [14, 14, 18, 18, 19, 19], 'cata': 'lunch,vegetarian', 'score': 3.6},
            {'name': '蛋炒饭', 'list': [78, 0], 'cata': 'lunch,dinner', 'score': 6.8},
            {'name': '小笼包', 'list': [2, 63], 'cata': 'breakfast', 'score': 3.4},
            {'name': '重庆小面', 'list': [2, 19], 'cata': 'breakfast,dinner,noodle', 'score': 7.6},
            {'name': '全麦面包', 'list': [2], 'cata': 'breakfast,keep', 'score': 8.6},
            {'name': '牛肉汉堡', 'list': [2, 65], 'cata': 'breakfast,dinner', 'score': 6.1},
            {'name': '皮蛋瘦肉粥', 'list': [12, 63, 78], 'cata': 'breakfast', 'score': 3.6},
            {'name': '水果燕麦粥', 'list': [12, 13, 57], 'cata': 'breakfast,keep,vegetarian', 'score': 5.6},
            {'name': '意大利面', 'list': [2, 35], 'cata': 'breakfast,noodle', 'score': 6.9},
            {'name': '水果沙拉', 'list': [57, 58, 59], 'cata': 'breakfast,dinner,keep,vegetarian', 'score': 6.1},
            {'name': '香煎牛排', 'list': [65, 65], 'cata': 'dinner,keep', 'score': 9.6},
            {'name': '炸酱面', 'list': [2, 43, 44], 'cata': 'dinner,noodle', 'score': 6.0},
            {'name': '豚骨拉面', 'list': [2, 43, 20], 'cata': 'dinner,noodle', 'score': 3.6},
            {'name': '柠檬鸡胸', 'list': [59, 67, 67], 'cata': 'dinner,keep', 'score': 9.6},
            {'name': '白灼西兰花', 'list': [40, 40], 'cata': 'lunch,dinner,vegetarian', 'score': 4.2},
            {'name': '开水白菜', 'list': [16, 16], 'cata': 'lunch,dinner,vegetarian', 'score': 2.6},
            {'name': '凉拌萝卜丝', 'list': [30, 30], 'cata': 'lunch,dinner,vegetarian', 'score': 3.4},
            {'name': '生煎金枪鱼', 'list': [70, 70, 70], 'cata': 'dinner,keep', 'score': 7.6},
            {'name': '荞麦面', 'list': [1, 2, 3], 'cata': 'breakfast,dinner,noodle,keep', 'score': 6.2},
            {'name': '薯条', 'list': [66, 67], 'cata': 'snack', 'score': 2.1},
            {'name': '冰激凌', 'list': [65, 66], 'cata': 'snack', 'score': 3.6},
            {'name': '巧克力', 'list': [65], 'cata': 'snack', 'score': 6.6},
            {'name': '棒棒糖', 'list': [66], 'cata': 'snack', 'score': 2.6},
            {'name': '威化饼干', 'list': [67, 68], 'cata': 'snack', 'score': 4.6},
            {'name': '双皮奶', 'list': [68], 'cata': 'snack', 'score': 8.6},
            {'name': '牛肉干', 'list': [69], 'cata': 'snack', 'score': 7.3},
            {'name': '炸鸡腿', 'list': [79], 'cata': 'snack', 'score': 5.6},
            {'name': '三黄油鸡', 'list': [67, 25, 17], 'cata': 'lunch,dinner', 'score': 9.6},
            {'name': '丝瓜炒小鲜', 'list': [21, 24, 17], 'cata': 'breakfast,dinner', 'score': 7.6},
            {'name': '乳香四季豆', 'list': [37, 24, 77], 'cata': 'lunch,dinner', 'score': 8.6},
            {'name': '冰糟鳕鱼冻', 'list': [70, 59, 17], 'cata': 'lunch,dinner', 'score': 9.6},
            {'name': '香菇炒肉', 'list': [67, 24, 17], 'cata': 'lunch,dinner', 'score': 6.6},
            {'name': '凤尾明虾', 'list': [67, 75, 76], 'cata': 'lunch,dinner', 'score': 6.9},
            {'name': '沪式炒素虾仁', 'list': [75, 25, 17], 'cata': 'lunch,dinner', 'score': 7.3}
            ]


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


def init_Meal():
    food = init_Food()
    mealurls = []
    # 读取文本文件内容并提取偶数行的URL
    with open('static/mealUrl.txt', 'r', encoding='utf-8') as file:
        lines = file.readlines()
        for i in range(1, len(lines), 2):  # 从第2行开始，步长为2，即提取偶数行
            line = lines[i]
            url = line.strip()  # 假设每行只包含一个URL
            mealurls.append(url)

    for index, meal in enumerate(mealList):
        meal['image'] = mealurls[index]
    # 计算膳食的营养表
    for meal in mealList:
        cal = 0
        nutrition = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        amount = 0
        for i in meal['list']:  # i是食材的索引
            cal += float(food[i - 1]['cal'])
            cal = round(cal, 1)
            amount += food[i - 1]['amount']
            for j in range(0, 15):
                nutrition[j] += float(food[i - 1]['nutrition'][j])
                nutrition[j] = round(nutrition[j], 2)
        meal['cal'] = cal
        meal['nutrition'] = nutrition
        meal['amount'] = amount
        # 根据分数设置评价等级和边框颜色
        if meal['score'] <= 4:
            meal['eva'] = 'Limit'
            meal['color'] = '#fbbd08'
        if 4 < meal['score'] <= 6:
            meal['eva'] = 'Normal'
            meal['color'] = '#666666'
        if 6 < meal['score'] <= 9:
            meal['eva'] = 'Good'
            meal['color'] = '#8dc63f'
        if meal['score'] > 9:
            meal['eva'] = 'Excellent'
            meal['color'] = '#39b54a'
    return mealList


def write_image_urls_to_file():
    with open('static/mealUrl.txt', 'w', encoding='utf-8') as file:
        for meal in mealList:
            url = f"https://image.baidu.com/search/flip?tn=baiduimage&ie=utf-8&word={meal['name']}"
            html = requests.get(url).text
            pic_urls = re.findall('"objURL":"(.*?)",', html, re.S)

            if pic_urls:
                file.write(f"{meal['name']}\n{pic_urls[0]}\n")  # 将食物和对应的第一张图片的URL写入文件
                print(meal['name'])
            else:
                print(f"No images found for {meal['name']}")


def recommendByFood(food):
    foodList = init_Food()
    foodIndex = 0
    for i in range(0, 79):
        if foodList[i]['name'] == food:
            foodIndex = i + 1
            print(foodIndex)
            break
    recommendMeal = []
    for meal in init_Meal():
        if foodIndex in meal['list']:
            recommendMeal.append(meal)
    return recommendMeal


if __name__ == '__main__':
    recommendByFood('牛肉')
