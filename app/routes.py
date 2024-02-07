from flask import Blueprint, render_template
from .models import Post

main = Blueprint('main', __name__)

@main.route('/')
def home():
    #posts = Post.query.all()
    return render_template('index.html')

@main.route('/software-engineering')
def software():
    return render_template('software-engineering.html')

@main.route('/technical-writing')
def writing():
    return render_template('technical-writing.html')

@main.route('/blog')
def blog():
    return render_template('blog.html')

@main.route('/contact')
def contact():
    return render_template('contact.html')