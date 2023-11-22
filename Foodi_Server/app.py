from flask import Flask, request

from methods import *

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/food/<cata>')
def api_food(cata):
    food = init_Food()
    if cata == "grain":
        return food[0:14]
    if cata == "vegetable":
        return food[14:45]
    if cata == "fruit":
        return food[45:62]
    if cata == "meat":
        return food[62:80]


@app.route('/meal/<cata>')
def api_meal(cata):
    MealList = init_Meal()
    List = []
    for meal in MealList:
        if cata in meal['cata']:
            List.append(meal)
    return List

@app.route('/item/<name>')
def api_item(name):
    food = init_Food()
    for foodItem in food:
        if foodItem['name'] == name:
            return foodItem
    meal = init_Meal()
    for mealItem in meal:
        if mealItem['name'] == name:
            return mealItem

@app.route('/search/<key>')
def api_search(key):
    MealList = init_Meal()
    List = []
    for meal in MealList:
        if key in meal['name']:
            List.append(meal)
    return List


@app.route('/test', methods=['POST'])
def test():
    print(request.form)
    return request.form


if __name__ == '__main__':
    app.run()
