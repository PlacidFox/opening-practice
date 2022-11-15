function init_get_choice(){

    let init_selected_case_id = "";
    let dest_selected_case_id = "";
    let is_init_case_selected = false;
    let is_dest_case_selected = false;
    let color_noir = document.getElementById("case_A8").style.backgroundColor;
    let color_blanc = document.getElementById("case_B8").style.backgroundColor;


    console.log("TEST");

    document.querySelectorAll('.case').forEach(item => {
        item.addEventListener('click', function () {

            if (is_init_case_selected == true){ 
                if (init_selected_case_id == item.id) {
                    init_selected_case_id = null;
                    is_init_case_selected = false;
                    show_selected_case(init_selected_case_id, dest_selected_case_id);
                } 
                else{
                    if (dest_selected_case_id == item.id) {
                        dest_selected_case_id = null;
                        is_dest_case_selected = false;
                        show_selected_case(init_selected_case_id, dest_selected_case_id);
                    } 
                    else{
                        dest_selected_case_id = item.id;
                        is_dest_case_selected = true;
                        show_selected_case(init_selected_case_id, dest_selected_case_id);
                        console.log(dest_selected_case_id);     
                    }
                }
            }
            else{
                init_selected_case_id = item.id;
                is_init_case_selected = true;
                show_selected_case(init_selected_case_id, dest_selected_case_id);     
                console.log(init_selected_case_id);               
                
            }
            

    })
    })
}

function show_selected_case(init_selected_case_id, dest_selected_case_id){

    let color_noir = document.getElementById("case_A8").style.backgroundColor;
    let color_blanc = document.getElementById("case_B8").style.backgroundColor;


    document.querySelectorAll('.case_white').forEach(item => {
        item.style.backgroundColor = color_blanc;
    })
    document.querySelectorAll('.case_black').forEach(item => {
        item.style.backgroundColor = color_noir;
    })

    if (init_selected_case_id !== null){
        document.getElementById(init_selected_case_id).style.backgroundColor = "blue";
    }
    if (dest_selected_case_id !== null){
        document.getElementById(dest_selected_case_id).style.backgroundColor = "green";
    }
}
