let link_img_Wrook = "<img class=\"piece\" src=\"/static/img_piece/maestro/wR.svg\">"
let link_img_Wknight = "<img class=\"piece\" src=\"/static/img_piece/maestro/wN.svg\">"
let link_img_Wbishop = "<img class=\"piece\" src=\"/static/img_piece/maestro/wB.svg\">"
let link_img_Wqueen = "<img class=\"piece\" src=\"/static/img_piece/maestro/wQ.svg\">"
let link_img_Wking = "<img class=\"piece\" src=\"/static/img_piece/maestro/wK.svg\">"
let link_img_Wpawn = "<img class=\"piece\" src=\"/static/img_piece/maestro/wP.svg\">"

let link_img_Brook = "<img class=\"piece\" src=\"/static/img_piece/maestro/bR.svg\">"
let link_img_Bknight = "<img class=\"piece\" src=\"/static/img_piece/maestro/bN.svg\">"
let link_img_Bbishop = "<img class=\"piece\" src=\"/static/img_piece/maestro/bB.svg\">"
let link_img_Bqueen = "<img class=\"piece\" src=\"/static/img_piece/maestro/bQ.svg\">"
let link_img_Bking = "<img class=\"piece\" src=\"/static/img_piece/maestro/bK.svg\">"
let link_img_Bpawn = "<img class=\"piece\" src=\"/static/img_piece/maestro/bP.svg\">"


const dict_init_pieces_position = {
    A1: "Wrook",
    B1: "Wknight",
    C1: "Wbishop",
    D1: "Wqueen",
    E1: "Wking",
    F1: "Wbishop",
    G1: "Wknight",
    H1: "Wrook",

    A2: "Wpawn",
    B2: "Wpawn",
    C2: "Wpawn",
    D2: "Wpawn",
    E2: "Wpawn",
    F2: "Wpawn",
    G2: "Wpawn",
    H2: "Wpawn",

    A7: "Bpawn",
    B7: "Bpawn",
    C7: "Bpawn",
    D7: "Bpawn",
    E7: "Bpawn",
    F7: "Bpawn",
    G7: "Bpawn",
    H7: "Bpawn",

    A8: "Brook",
    B8: "Bknight",
    C8: "Bbishop",
    D8: "Bqueen",
    E8: "Bking",
    F8: "Bbishop",
    G8: "Bknight",
    H8: "Brook"  
};

function init_pieces_position(){
    document.querySelectorAll('.square').forEach(box => {
        box.innerHTML = "" // to delete all pieces before placiung new ones

        // to delete previous move color // to put info function clear color ?
        document.querySelectorAll('.sq_white').forEach(item => {
            item.style.backgroundColor = color_white;
        })
        document.querySelectorAll('.sq_black').forEach(item => {
            item.style.backgroundColor = color_black;
        })
        
        if (box.id in dict_init_pieces_position){

            box.innerHTML = dict_init_pieces_position[box.id]
        } 


    })

    drawPieces()
}

function drawPieces() {

    document.querySelectorAll('.square').forEach(image => {

        if (image.innerText.length !== 0) {
            switch (image.innerText){
                case "Wrook":
                    image.innerHTML = image.innerHTML + link_img_Wrook;
                    break;
                case "Wknight":
                    image.innerHTML = image.innerHTML + link_img_Wknight;
                    break;
                case "Wbishop":
                    image.innerHTML = image.innerHTML + link_img_Wbishop;
                    break;
                case "Wqueen":
                    image.innerHTML = image.innerHTML + link_img_Wqueen;
                    break;
                case "Wking":
                    image.innerHTML = image.innerHTML + link_img_Wking;
                    break;
                case "Wpawn":
                    image.innerHTML = image.innerHTML + link_img_Wpawn;
                    break;

                case "Brook":
                    image.innerHTML = image.innerHTML + link_img_Brook;
                    break;
                case "Bknight":
                    image.innerHTML = image.innerHTML + link_img_Bknight;
                    break;
                case "Bbishop":
                    image.innerHTML = image.innerHTML + link_img_Bbishop;
                    break;
                case "Bqueen":
                    image.innerHTML = image.innerHTML + link_img_Bqueen;
                    break;
                case "Bking":
                    image.innerHTML = image.innerHTML + link_img_Bking;
                    break;
                case "Bpawn":
                    image.innerHTML = image.innerHTML + link_img_Bpawn;
                    break;
    

                
            }
        }})

}