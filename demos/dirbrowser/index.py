from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

def get_subdirectories(path):
    # TODO: Use proper directory checking instead of string concatenation!
    subdirs = [name for name in os.listdir(path) if os.path.isdir(path + name)]
    subdirs.sort()
    return subdirs


def get_files(path):
    """Get the list of the files at the given directory."""
    files = [name for name in os.listdir(path) if os.path.isfile(path + name)]
    files.sort()
    return files


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/directories', methods=['POST'])
def directories():
    data = request.get_json()
    path = data['path']
    subdirs = get_subdirectories(path)
    files = get_files(path)
    result = {"directories": subdirs, "files": files}
    return json.dumps(result)


if __name__ == '__main__':
    app.run(debug=True, port=5050)

