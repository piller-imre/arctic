from flask import Flask, render_template, request, jsonify
import json
import math

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/distance', methods=['POST'])
def calc_distance():
    data = request.get_json()
    x = data['x']
    y = data['y']
    distance = math.sqrt(x*x + y*y)
    result = {"distance": distance}
    return json.dumps(result)

if __name__ == '__main__':
    app.run(debug=True, port=5432)

