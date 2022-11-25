from flask import Blueprint, render_template

import os, json

JSON_PATH_WHITE = "./data/json_opening_white.json"
JSON_PATH_BLACK = "./data/json_opening_black.json"

views = Blueprint("views", __name__)

@views.route("/")
def home():
    
    return render_template("base.html")

@views.route("/training-white")
def trainingwhite():

    if os.path.exists(JSON_PATH_WHITE):
        with open(JSON_PATH_WHITE, "r") as jsonFile:
            data_json = json.load(jsonFile)        
            
            
    return render_template("trainingwhite.html", data_json = data_json)


@views.route("/training-black")
def trainingblack():

    if os.path.exists(JSON_PATH_BLACK):
        with open(JSON_PATH_BLACK, "r") as jsonFile:
            data_json = json.load(jsonFile)        
            
            
    return render_template("trainingblack.html", data_json = data_json)
