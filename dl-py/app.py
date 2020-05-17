# coding=utf-8
# import base64
import random
# import numpy as np
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/api/examine', methods=['POST'])
def examine():
    app.logger.info('Image: ' + request.form['image'])
    app.logger.info('Class: ' + request.form['task'])
    app.logger.info('Level: ' + request.form['level'])
    # convert(request.form['image'])
    if random.randint(0, 9) > 4:
        return jsonify(result=True, accuracy=random.randint(80, 99))
    else:
        return jsonify(result=False, accuracy=random.randint(55, 79))


if __name__ == '__main__':
    app.run(debug=True)


# Функция для конвертирования изображения из формата Data URI в формат numpy array 28x28
# def convert(data):
    # app.logger.info(arr)
