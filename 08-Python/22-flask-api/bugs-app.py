from flask import Flask, render_template, jsonify, request

app = Flask(__name__)
""" 
bug
    - id
    - title
    - createdAt
    - isClosed

Keep the bugs in the memory
autoincrement the id for the newly created bugs (starting from 1)

expose the following end points         (response status codes)
GET - http://localhost:8080/bugs        (200)
GET - http://localhost:8080/bugs/100    (200/404)
POST - http://localhost:8080/bugs       (201)
PUT - http://localhost:8080/bugs/100    (200/404)
DELETE - http://localhost:8080/bugs/100 (200/404)

Investigate how to send the appropriate status code as response
"""
app.run(port=8080, debug=True)