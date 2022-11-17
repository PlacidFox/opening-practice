const color_ref = {
    1: "White", //uppercase to be split for verification
    2: "Black"
};

const color_noir = "maroon";
const color_blanc = "lightgoldenrodyellow";// to put in constantes fetch from CSS at init ? or const also get by the css file ? with SASS ?

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

    let init_selected_case_id = null;
    let dest_selected_case_id = null;
    let is_init_case_selected = false;
    let is_dest_case_selected = false;

    let color_to_play = 1 //1 : white, 2: black


    document.querySelectorAll('.case').forEach(item => {
        item.addEventListener('click', function () {

            if (is_init_case_selected == true){ 
                if (init_selected_case_id == item.id) {//deselect the first box if already selected -> cancel
                    init_selected_case_id = null;
                    is_init_case_selected = false;
                    show_selected_case(init_selected_case_id, dest_selected_case_id);
                } 
                else{
                    dest_selected_case_id = item.id; //select the destination box only if the first box is selected // NO VALID MOVE CHECK
                    is_dest_case_selected = true;
                    show_selected_case(init_selected_case_id, dest_selected_case_id);
                    get_choice(color_to_play, init_selected_case_id, dest_selected_case_id)

                    move_pieces(init_selected_case_id, dest_selected_case_id)

                    init_selected_case_id = null;
                    dest_selected_case_id = null;
                    is_init_case_selected = false;
                    is_dest_case_selected = false;

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
                    init_selected_case_id = item.id;
                    is_init_case_selected = true;
                    show_selected_case(init_selected_case_id, dest_selected_case_id);     
         
                }
            }

    })
    })
}

function clear_selected_case(){

    document.querySelectorAll('.case_white').forEach(item => {
        item.style.backgroundColor = color_blanc;
    })
    document.querySelectorAll('.case_black').forEach(item => {
        item.style.backgroundColor = color_noir;
    })

}

function show_selected_case(init_selected_case_id, dest_selected_case_id){

    clear_selected_case() // necessary every time ?

    if (init_selected_case_id !== null){
        document.getElementById(init_selected_case_id).style.backgroundColor = "blue";
    }
    if (dest_selected_case_id !== null){
        document.getElementById(dest_selected_case_id).style.backgroundColor = "green";
    }
}

function move_pieces (init_selected_case_id, dest_selected_case_id){

    document.getElementById(dest_selected_case_id).innerHTML = document.getElementById(init_selected_case_id).innerHTML

    document.getElementById(init_selected_case_id).innerHTML = ""


}