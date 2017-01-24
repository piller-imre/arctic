from flask import Flask, render_template, request, jsonify
import math

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/distance', methods=['POST'])
def calc_distance():
    data = request.get_json()
    print(data)
    return 'The request has proceed!'

if __name__ == '__main__':
    app.run(debug=True, port=5432)

