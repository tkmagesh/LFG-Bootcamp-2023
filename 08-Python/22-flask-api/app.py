from flask import Flask, render_template, jsonify, request

app = Flask(__name__)
""" 
@app.route('/', methods=['GET', 'POST']) # => When a request is make for "/", execute the function and return the result of the function to the user
def index():
    # returing a string response
    #return "Welcome to Flask!"
    
    # returning the contents of a file as response
    #return render_template('index.html')
    
    
    #return the data in JSON format
    if request.method == 'GET':
        data = {"req-method" : "GET", "name" : "Magesh"}
        return jsonify(data)
    else:
        data = {"req-method" : "POST","name" : "Magesh"}
        return jsonify(data) 
    """


@app.route('/', methods=['GET']) 
def get_index():
    #return the data in JSON format
    data = {"req-method" : "GET", "name" : "Magesh"}
    return jsonify(data)
    
@app.route('/', methods=['POST'])
def post_index():
    #return the data in JSON format
    data = {"req-method" : "POST", "name" : "Magesh"}
    return jsonify(data)

app.run(port=8080, debug=True)