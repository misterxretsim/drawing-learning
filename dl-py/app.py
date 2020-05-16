from flask import Flask, jsonify
from flask import request
import random

app = Flask(__name__)


@app.route('/api/examine', methods=['POST'])
def examine():
    app.logger.info('Image: ' + request.form['image'])
    app.logger.info('Class: ' + request.form['task'])
    app.logger.info('Level: ' + request.form['level'])
    if random.randint(0, 9) > 4:
        return jsonify(result=True, accuracy=random.randint(80, 99))
    else:
        return jsonify(result=False, accuracy=random.randint(55, 79))


if __name__ == '__main__':
    app.run(debug=True)
