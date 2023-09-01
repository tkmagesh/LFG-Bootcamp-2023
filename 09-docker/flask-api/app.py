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

# how to handling the request payload
@app.route("/greet", methods=["POST"])
def greet():
    # expected request payload = {"name" : "magesh"}
    # response = { "message" : "Hi magesh, Have a nice day!"}
    req_payload = request.get_json() # req_payload -> a dictionary with the data
    res_payload = { "message" : f"Hi {req_payload['name']}, Have a nice day!"}
    return jsonify(res_payload)

# how to handle route params
# req url example : http://localhost:8080/greet/magesh

@app.route('/greet/<string:username>', methods=['GET'])
def param_greet(username): 
    res_payload = { "message" : f"Hi {username}, Have a nice day!"}
    return jsonify(res_payload)

@app.route("/bugs/<int:id>/<string:name>", methods=["GET"])
def get_Bug_By_Id(id, name):
    print(id, name)
    return "thank you"
    

app.run(port=8080, debug=True, host="0.0.0.0")