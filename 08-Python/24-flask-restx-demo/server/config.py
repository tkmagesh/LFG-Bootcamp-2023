class BaseConfig:
    TESTING = False
    SECRET_KEY = "change me"
    pass

class DevelopmentConfig(BaseConfig):
    pass

class TestingConfig(BaseConfig):
    TESTING = True
    pass