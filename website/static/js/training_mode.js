const colorOK = "green";
const colorWrong = "red";

let color_training;

let moves_training;

let opening_name;

let json_data;

let move_white;
let move_black;

let iter_white_play = 0;
let iter_black_play = 1;

let iter_white_auto_play = 0
let iter_black_auto_play = 1;

function fetch_json(data_json_f){
    json_data = data_json_f;
}

function get_color_training(){
    color_training =  json_data["color"];

}

function select_random_moves(){

    let random_games_id = Math.floor(Math.random() * Object.keys(json_data["games"]).length) //random number between 0 and number of games -1 (it index er of the game in the DB)

    moves_training = json_data["games"][random_games_id]["moves_uci"];
    opening_name = json_data["games"][random_games_id]["name"];

}

function launch_training_fail_safe(){

    document.getElementById("text_training_status").innerHTML = "TRAINING IN PROGRESS... (FAIL SAFE)";
    document.getElementById("text_training_opening").innerHTML = "A RANDOM WHITE OPENING";

    select_random_moves();

    get_color_training();
    setBoard(color_training.toLowerCase());

    if (color_training == "White"){
        move_white = moves_training[iter_white_play];
        listen_choice_training_white("fail_safe");//fail_safe to put in a ENUM ?
    }

    if (color_training == "Black"){
        move_black = moves_training[iter_black_play]
        do_auto_next_moves_white();
        listen_choice_training_black("fail_safe");//fail_safe to put in a ENUM ?
    }




}

function launch_training_death_match(){

    document.getElementById("text_training_status").innerHTML = "TRAINING IN PROGRESS... (DEATH MATCH)";
    document.getElementById("text_training_opening").innerHTML = "A RANDOM WHITE OPENING";

    select_random_moves();

    get_color_training();
    setBoard(color_training.toLowerCase());

    if (color_training == "White"){
        move_white = moves_training[iter_white_play]
        listen_choice_training_white("death_match");//deatch match to put in a ENUM ?
    }

    if (color_training == "Black"){
        move_black = moves_training[iter_black_play]
        do_auto_next_moves_white();
        listen_choice_training_black("death_match");//deatch match to put in a ENUM ?
    }

    


}

function do_auto_next_moves_black(){

    if (iter_black_auto_play < Object.keys(moves_training).length){

    let move = moves_training[iter_black_auto_play]
    set_list_moves(move["from_square"].toUpperCase(), move["to_square"].toUpperCase(), 2);
    move_pieces(move["from_square"].toUpperCase(), move["to_square"].toUpperCase());

    iter_black_auto_play += 2;

    }
    else{
        document.getElementById("text_training_status").innerHTML = "SUCCESS"
        document.getElementById("text_training_status").style.color = "green"
        document.getElementById("text_training_opening").innerHTML = "It was : " + opening_name;
        document.getElementById("text_training_opening").style.color = "green"
    }

}

function do_auto_next_moves_white(){

    if (iter_white_auto_play < Object.keys(moves_training).length){

    let move = moves_training[iter_white_auto_play]
    set_list_moves(move["from_square"].toUpperCase(), move["to_square"].toUpperCase(), 1);
    move_pieces(move["from_square"].toUpperCase(), move["to_square"].toUpperCase());

    iter_white_auto_play += 2;

    }
    else{
        document.getElementById("text_training_status").innerHTML = "SUCCESS"
        document.getElementById("text_training_status").style.color = "green"
        document.getElementById("text_training_opening").innerHTML = "It was : " + opening_name;
        document.getElementById("text_training_opening").style.color = "green"
    }

}

function listen_choice_training_white(type_training){ // Fail Safe or Death Match

    let init_selected_sq_id = null;
    let dest_selected_sq_id = null;
    let is_init_sq_selected = false;
    let is_dest_sq_selected = false;

    let color_to_play = 1 //1 : white, 2: black

    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('click', function (f) {
        
             if (is_init_sq_selected == true){ 
                if (init_selected_sq_id == item.id) {//deselect the first box if already selected -> cancel
                    init_selected_sq_id = null;
                    is_init_sq_selected = false;
                    show_selected_sq(init_selected_sq_id, dest_selected_sq_id);
                } 
                else{
                    dest_selected_sq_id = item.id; //select the destination box only if the first box is selected // NO VALID MOVE CHECK
                    is_dest_sq_selected = true;
                    show_selected_sq(init_selected_sq_id, dest_selected_sq_id);

                    if (init_selected_sq_id == move_white["from_square"].toUpperCase() && (dest_selected_sq_id == move_white["to_square"].toUpperCase()) ){

                        if (checkIfCastle(init_selected_sq_id, dest_selected_sq_id)){
                            set_list_moves_castle(init_selected_sq_id, dest_selected_sq_id, color_to_play);
                            move_pieces_castle(init_selected_sq_id, dest_selected_sq_id);
                        }
                        else{
                            set_list_moves(init_selected_sq_id, dest_selected_sq_id, color_to_play);
                            move_pieces(init_selected_sq_id, dest_selected_sq_id);
                        }

                        init_selected_sq_id = null;
                        dest_selected_sq_id = null;
                        is_init_sq_selected = false;
                        is_dest_sq_selected = false;

                        iter_white_play +=2;
                        move_white = moves_training[iter_white_play]

                        clear_selected_sq();

                        do_auto_next_moves_black();

                    }
                    else{
                        if (type_training == "fail_safe"){ //fail_safe to put in a ENUM ?
                            clear_selected_sq();
                            document.getElementById(dest_selected_sq_id).style.backgroundColor = "red"

                            init_selected_sq_id = null;
                            dest_selected_sq_id = null;
                            is_init_sq_selected = false;
                            is_dest_sq_selected = false;
                        }
                        if (type_training == "death_match") {//to put in a ENUM ?
                            document.getElementById(dest_selected_sq_id).style.backgroundColor = "red"

                            document.getElementById(move_white["from_square"].toUpperCase()).style.backgroundColor = "green"
                            document.getElementById(move_white["to_square"].toUpperCase()).style.backgroundColor = "green"

   
                            document.getElementById("text_training_status").innerHTML = "FAIL"
                            document.getElementById("text_training_status").style.color = "red"
                            document.getElementById("text_training_opening").innerHTML = "Good Move was : " + move_white["from_square"].toUpperCase() + move_white["to_square"].toUpperCase();
                            document.getElementById("text_training_opening").style.color = "red"


                        }

                    }

                }
            }
            else{
                if (item.innerHTML.charAt(0) === color_ref[color_to_play].charAt(0)){ //select the first box only if a piece is there and of the color to play
                    init_selected_sq_id = item.id;
                    is_init_sq_selected = true;
                    show_selected_sq(init_selected_sq_id, dest_selected_sq_id);     
         
                }
            }

            })
    })
}

function listen_choice_training_black(type_training){ // Fail Safe or Death Match

    let init_selected_sq_id = null;
    let dest_selected_sq_id = null;
    let is_init_sq_selected = false;
    let is_dest_sq_selected = false;

    let color_to_play = 2 //1 : white, 2: black

    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('click', function (f) {
        
             if (is_init_sq_selected == true){ 
                if (init_selected_sq_id == item.id) {//deselect the first box if already selected -> cancel
                    init_selected_sq_id = null;
                    is_init_sq_selected = false;
                    show_selected_sq(init_selected_sq_id, dest_selected_sq_id);
                } 
                else{
                    dest_selected_sq_id = item.id; //select the destination box only if the first box is selected // NO VALID MOVE CHECK
                    is_dest_sq_selected = true;
                    show_selected_sq(init_selected_sq_id, dest_selected_sq_id);

                    if (init_selected_sq_id == move_black["from_square"].toUpperCase() && (dest_selected_sq_id == move_black["to_square"].toUpperCase()) ){

                        if (checkIfCastle(init_selected_sq_id, dest_selected_sq_id)){
                            set_list_moves_castle(init_selected_sq_id, dest_selected_sq_id, color_to_play);
                            move_pieces_castle(init_selected_sq_id, dest_selected_sq_id);
                        }
                        else{
                            set_list_moves(init_selected_sq_id, dest_selected_sq_id, color_to_play);
                            move_pieces(init_selected_sq_id, dest_selected_sq_id);
                        }

                        init_selected_sq_id = null;
                        dest_selected_sq_id = null;
                        is_init_sq_selected = false;
                        is_dest_sq_selected = false;

                        iter_black_play +=2;
                        move_black = moves_training[iter_black_play]

                        clear_selected_sq();

                        do_auto_next_moves_white();

                    }
                    else{
                        if (type_training == "fail_safe"){ //fail_safe to put in a ENUM ?
                            clear_selected_sq();
                            document.getElementById(dest_selected_sq_id).style.backgroundColor = "red"

                            init_selected_sq_id = null;
                            dest_selected_sq_id = null;
                            is_init_sq_selected = false;
                            is_dest_sq_selected = false;
                        }
                        if (type_training == "death_match") {//to put in a ENUM ?
                            document.getElementById(dest_selected_sq_id).style.backgroundColor = "red"

                            document.getElementById(move_black["from_square"].toUpperCase()).style.backgroundColor = "green"
                            document.getElementById(move_black["to_square"].toUpperCase()).style.backgroundColor = "green"

   
                            document.getElementById("text_training_status").innerHTML = "FAIL"
                            document.getElementById("text_training_status").style.color = "red"
                            document.getElementById("text_training_opening").innerHTML = "Good Move was : " + move_black["from_square"].toUpperCase() + move_black["to_square"].toUpperCase();
                            document.getElementById("text_training_opening").style.color = "red"


                        }

                    }

                }
            }
            else{
                if (item.innerHTML.charAt(0) === color_ref[color_to_play].charAt(0)){ //select the first box only if a piece is there and of the color to play
                    init_selected_sq_id = item.id;
                    is_init_sq_selected = true;
                    show_selected_sq(init_selected_sq_id, dest_selected_sq_id);     
         
                }
            }

            })
    })
}

