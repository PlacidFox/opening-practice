from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "random_secret_key" # to create for production
    
    from .views import views
    
    app.register_blueprint(views, url_prefix="/")
    
    return app
    