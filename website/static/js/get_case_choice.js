const color_ref = {
    1: "White", //uppersq to be split for verification
    2: "Black"
};

const color_black = "maroon";
const color_white = "lightgoldenrodyellow";// to put in constantes fetch from CSS at init ? or const also get by the css file ? with SASS ?

var nb_moves = 0;

function get_choice(color_id, move_from, move_to){

    var dict_choice = {
        color: color_ref[color_id],
        move_from: move_from,
        move_to: move_to
    };

    console.log(dict_choice)
    return dict_choice;
}



function listen_choice(){

    let init_selected_sq_id = null;
    let dest_selected_sq_id = null;
    let is_init_sq_selected = false;
    let is_dest_sq_selected = false;

    let color_to_play = 1 //1 : white, 2: black


    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('click', function () {

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
                    get_choice(color_to_play, init_selected_sq_id, dest_selected_sq_id);

                    set_list_moves(init_selected_sq_id, dest_selected_sq_id, color_to_play);
                    move_pieces(init_selected_sq_id, dest_selected_sq_id);

                    init_selected_sq_id = null;
                    dest_selected_sq_id = null;
                    is_init_sq_selected = false;
                    is_dest_sq_selected = false;

                    if (color_to_play == 1){ //switch colors
                        color_to_play = 2;
                    }
                    else {
                        color_to_play = 1;
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

function clear_selected_sq(){

    document.querySelectorAll('.sq_white').forEach(item => {
        item.style.backgroundColor = color_white;
    })
    document.querySelectorAll('.sq_black').forEach(item => {
        item.style.backgroundColor = color_black;
    })

}

function show_selected_sq(init_selected_sq_id, dest_selected_sq_id){

    clear_selected_sq() // necessary every time ?

    if (init_selected_sq_id !== null){
        document.getElementById(init_selected_sq_id).style.backgroundColor = "blue";
    }
    if (dest_selected_sq_id !== null){
        document.getElementById(dest_selected_sq_id).style.backgroundColor = "green";
    }
}

function move_pieces (init_selected_sq_id, dest_selected_sq_id){

    document.getElementById(dest_selected_sq_id).innerHTML = document.getElementById(init_selected_sq_id).innerHTML

    document.getElementById(init_selected_sq_id).innerHTML = ""


}

function set_list_moves (init_selected_sq_id, dest_selected_sq_id, color_to_play){

    //put into fct get pieces ?
    var pieces_moved = document.getElementById(init_selected_sq_id).innerHTML.charAt(1);
    if (document.getElementById(dest_selected_sq_id).innerHTML !== ""){
        if (pieces_moved == "p"){
            pieces_moved = init_selected_sq_id.charAt(0).toLowerCase() + "x"; 
        }
        
        else{
            pieces_moved += "x"
        }
    }
    if (pieces_moved == "p"){pieces_moved = " "}; 


    if (color_to_play == 1){
        nb_moves += 1;
        var tbodyRef = document.getElementById('table-moves');
        var newRow = tbodyRef.insertRow();
        newRow.id = "row-move-" + nb_moves;
        var newCell1 = newRow.insertCell();
        newCell1.id ='row-move-number'
        var newCell2 = newRow.insertCell();
        newCell2.id ='row-move-detail'
        var newCell3 = newRow.insertCell();
        newCell3.id ='row-move-detail'


        var newText1 = document.createTextNode(nb_moves + ".");
        var newText2 = document.createTextNode(pieces_moved+dest_selected_sq_id.toLowerCase());
        newCell1.appendChild(newText1);
        newCell2.appendChild(newText2);
    }

    if (color_to_play == 2){
        var Row = document.getElementById("row-move-" + nb_moves);
        var newCell3 = Row.lastChild

        var newText3 = document.createTextNode(pieces_moved+dest_selected_sq_id.toLowerCase());
        newCell3.appendChild(newText3);
    }

}