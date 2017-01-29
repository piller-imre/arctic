from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

def get_subdirectories(path):
    # TODO: Use proper directory checking instead of string concatenation!
    subdirs = [name for name in os.listdir(path) if os.path.isdir(path + name)]
    subdirs.sort()
    return subdirs


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/directories', methods=['POST'])
def directories():
    data = request.get_json()
    path = data['path']
    subdirs = get_subdirectories(path)
    result = {"directories": subdirs}
    return json.dumps(result)


if __name__ == '__main__':
    app.run(debug=True, port=5432)

