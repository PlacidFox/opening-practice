from flask import Blueprint, render_template

views = Blueprint("views", __name__)

@views.route("/")
def home():
    
    value_test = "caro-kann"
    
    return render_template("base.html", value_test = value_test)

#remettre base si bug ?


