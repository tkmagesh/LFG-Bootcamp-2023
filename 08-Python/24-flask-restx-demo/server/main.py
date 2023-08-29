from flask import Flask
from flask_restx import Api, Namespace, Resource
from flask_cors import CORS
from structlog import get_logger
from werkzeug.middleware.proxy_fix import ProxyFix

logger = get_logger(__name__)

#instantiate the app
app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_port=1)

#load the configuration from the DevelopmentConfig class in 'server/config.py'
app.config.from_object('server.config.DevelopmentConfig')

#instantiate CORS
cors = CORS()
cors.init_app(app, resources={"*" : { "origins" : "*"}})

#instantiate api
api = Api(version="1.0", title="Flask Restx", doc="/api/v1/docs")
api.init_app(app)
api_namespace = Namespace("api")

class Ping(Resource):
    def get(self):
        logger.debug("Ping.GET")
        return { "message" : "pong"}, 200
    
api_namespace.add_resource(Ping, "/ping")
api.add_namespace(api_namespace, path="/api/v1")
""" 
    App
    |
    -- Api
        |
        -- Namespace
            |
            -- Resource
            
to start the server
gunicon -b 0.0.0.0:8000 server.main:app
"""