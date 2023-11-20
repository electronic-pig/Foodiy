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


@app.route('/test', methods=['POST'])
def test():
    print(request.form)
    return request.form


if __name__ == '__main__':
    app.run()
