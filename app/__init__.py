from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
import os

db = SQLAlchemy()
login_manager = LoginManager()
bcrypt = Bcrypt()

def create_app():
    load_dotenv()
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'jnfndndweniw'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://hassan:munene14347@localhost/portfolio'
    #app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    #app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')

    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)

    from .models import User
    from .routes import main
    from .auth import auth

    app.register_blueprint(main)
    app.register_blueprint(auth)

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    return app
