from flask import Flask, render_template

app = Flask(__name__)

@app.route('/') # => When a request is make for "/", execute the function and return the result of the function to the user
def index():
    #return "Welcome to Flask!"
    return render_template('index.html')

app.run(port=8080, debug=True)