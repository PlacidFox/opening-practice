from flask import Blueprint, render_template

import os, json

JSON_PATH = "./data/test_json.json"

views = Blueprint("views", __name__)

@views.route("/")
def home():
    
    return render_template("base.html")

@views.route("/training-white")
def trainingwhite():
    value_test = "Training White : Caro-kann"
    
    if os.path.exists(JSON_PATH):
        with open(JSON_PATH, "r") as jsonFile:
            data_json = json.load(jsonFile)        


    color = data_json["color"]
    pgn_name = data_json["games"][0]["name"]
    moves_uci_data = data_json["games"][0]["moves_uci"]  
    
    moves_uci = []
    
    for move in moves_uci_data:
        moves_text = move["from_square"] + move["to_square"]
        moves_uci.append(moves_text)
    
    return render_template("trainingwhite.html", value_test = value_test, color = color, pgn_name = pgn_name, moves_uci = moves_uci, data_json = data_json)


