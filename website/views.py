from flask import Blueprint, render_template

import os, json

JSON_PATH = "./data/test_json.json"

views = Blueprint("views", __name__)

@views.route("/")
def home():
    
    return render_template("base.html")

@views.route("/training-white")
def trainingwhite():

    if os.path.exists(JSON_PATH):
        with open(JSON_PATH, "r") as jsonFile:
            data_json = json.load(jsonFile)        
            
            
    return render_template("trainingwhite.html", data_json = data_json)


