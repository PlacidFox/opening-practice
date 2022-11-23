const color = "red";

let value;
let color_pgn;
let pgn_name;
let moves_uci;

let json_data;

function fetch_json(data_json_f){
    json_data = data_json_f;

}


function training_test(){

    document.getElementById("textp").innerHTML = "Test Training Mode " + json_data["color"] + " : " + json_data["games"][0]["name"];
    document.getElementById("moves-header-TEMPO").innerHTML = json_data["games"][0]["name"];

    json_data["games"][0]["moves_uci"].forEach(element => {
        console.log(element["from_square"])

        if (element["color"] == "White") { color_to_play = 1}
        if (element["color"] == "Black") { color_to_play = 2}

        set_list_moves(element["from_square"].toUpperCase(),element["to_square"].toUpperCase(), color_to_play)
    });

    //document.getElementById("table-moves").innerHTML = 


}


