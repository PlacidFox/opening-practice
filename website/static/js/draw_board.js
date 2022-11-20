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

function setBoard(color){

    if (color == "white"){

        document.querySelector('.grid01').innerHTML = "A";
        document.querySelector('.grid02').innerHTML = "B";
        document.querySelector('.grid03').innerHTML = "C";
        document.querySelector('.grid04').innerHTML = "D";
        document.querySelector('.grid05').innerHTML = "E";
        document.querySelector('.grid06').innerHTML = "F";
        document.querySelector('.grid07').innerHTML = "G";
        document.querySelector('.grid08').innerHTML = "H";

        document.querySelector('.grid80').innerHTML = "8";
        document.querySelector('.grid70').innerHTML = "7";
        document.querySelector('.grid60').innerHTML = "6";
        document.querySelector('.grid50').innerHTML = "5";
        document.querySelector('.grid40').innerHTML = "4";
        document.querySelector('.grid30').innerHTML = "3";
        document.querySelector('.grid20').innerHTML = "2";
        document.querySelector('.grid10').innerHTML = "1";

        document.querySelector('.grid81').id = "A8";
        document.querySelector('.grid82').id = "B8";
        document.querySelector('.grid83').id = "C8";
        document.querySelector('.grid84').id = "D8";
        document.querySelector('.grid85').id = "E8";
        document.querySelector('.grid86').id = "F8";
        document.querySelector('.grid87').id = "G8";
        document.querySelector('.grid88').id = "H8";

        document.querySelector('.grid71').id = "A7";
        document.querySelector('.grid72').id = "B7";
        document.querySelector('.grid73').id = "C7";
        document.querySelector('.grid74').id = "D7";
        document.querySelector('.grid75').id = "E7";
        document.querySelector('.grid76').id = "F7";
        document.querySelector('.grid77').id = "G7";
        document.querySelector('.grid78').id = "H7";

        document.querySelector('.grid61').id = "A6";
        document.querySelector('.grid62').id = "B6";
        document.querySelector('.grid63').id = "C6";
        document.querySelector('.grid64').id = "D6";
        document.querySelector('.grid65').id = "E6";
        document.querySelector('.grid66').id = "F6";
        document.querySelector('.grid67').id = "G6";
        document.querySelector('.grid68').id = "H6";

        document.querySelector('.grid51').id = "A5";
        document.querySelector('.grid52').id = "B5";
        document.querySelector('.grid53').id = "C5";
        document.querySelector('.grid54').id = "D5";
        document.querySelector('.grid55').id = "E5";
        document.querySelector('.grid56').id = "F5";
        document.querySelector('.grid57').id = "G5";
        document.querySelector('.grid58').id = "H5";

        document.querySelector('.grid41').id = "A4";
        document.querySelector('.grid42').id = "B4";
        document.querySelector('.grid43').id = "C4";
        document.querySelector('.grid44').id = "D4";
        document.querySelector('.grid45').id = "E4";
        document.querySelector('.grid46').id = "F4";
        document.querySelector('.grid47').id = "G4";
        document.querySelector('.grid48').id = "H4";

        document.querySelector('.grid31').id = "A3";
        document.querySelector('.grid32').id = "B3";
        document.querySelector('.grid33').id = "C3";
        document.querySelector('.grid34').id = "D3";
        document.querySelector('.grid35').id = "E3";
        document.querySelector('.grid36').id = "F3";
        document.querySelector('.grid37').id = "G3";
        document.querySelector('.grid38').id = "H3";

        document.querySelector('.grid21').id = "A2";
        document.querySelector('.grid22').id = "B2";
        document.querySelector('.grid23').id = "C2";
        document.querySelector('.grid24').id = "D2";
        document.querySelector('.grid25').id = "E2";
        document.querySelector('.grid26').id = "F2";
        document.querySelector('.grid27').id = "G2";
        document.querySelector('.grid28').id = "H2";

        document.querySelector('.grid11').id = "A1";
        document.querySelector('.grid12').id = "B1";
        document.querySelector('.grid13').id = "C1";
        document.querySelector('.grid14').id = "D1";
        document.querySelector('.grid15').id = "E1";
        document.querySelector('.grid16').id = "F1";
        document.querySelector('.grid17').id = "G1";
        document.querySelector('.grid18').id = "H1";

        init_pieces_position()

    }
    if (color == "black"){

        document.querySelector('.grid01').innerHTML = "H";
        document.querySelector('.grid02').innerHTML = "G";
        document.querySelector('.grid03').innerHTML = "F";
        document.querySelector('.grid04').innerHTML = "E";
        document.querySelector('.grid05').innerHTML = "D";
        document.querySelector('.grid06').innerHTML = "C";
        document.querySelector('.grid07').innerHTML = "B";
        document.querySelector('.grid08').innerHTML = "A";

        document.querySelector('.grid80').innerHTML = "1";
        document.querySelector('.grid70').innerHTML = "2";
        document.querySelector('.grid60').innerHTML = "3";
        document.querySelector('.grid50').innerHTML = "4";
        document.querySelector('.grid40').innerHTML = "5";
        document.querySelector('.grid30').innerHTML = "6";
        document.querySelector('.grid20').innerHTML = "7";
        document.querySelector('.grid10').innerHTML = "8";

        document.querySelector('.grid81').id = "H1";
        document.querySelector('.grid82').id = "G1";
        document.querySelector('.grid83').id = "F1";
        document.querySelector('.grid84').id = "E1";
        document.querySelector('.grid85').id = "D1";
        document.querySelector('.grid86').id = "C1";
        document.querySelector('.grid87').id = "B1";
        document.querySelector('.grid88').id = "A1";

        document.querySelector('.grid71').id = "H2";
        document.querySelector('.grid72').id = "G2";
        document.querySelector('.grid73').id = "F2";
        document.querySelector('.grid74').id = "E2";
        document.querySelector('.grid75').id = "D2";
        document.querySelector('.grid76').id = "C2";
        document.querySelector('.grid77').id = "B2";
        document.querySelector('.grid78').id = "A2";

        document.querySelector('.grid61').id = "H3";
        document.querySelector('.grid62').id = "G3";
        document.querySelector('.grid63').id = "F3";
        document.querySelector('.grid64').id = "E3";
        document.querySelector('.grid65').id = "D3";
        document.querySelector('.grid66').id = "C3";
        document.querySelector('.grid67').id = "B3";
        document.querySelector('.grid68').id = "A3";

        document.querySelector('.grid51').id = "H4";
        document.querySelector('.grid52').id = "G4";
        document.querySelector('.grid53').id = "F4";
        document.querySelector('.grid54').id = "E4";
        document.querySelector('.grid55').id = "D4";
        document.querySelector('.grid56').id = "C4";
        document.querySelector('.grid57').id = "B4";
        document.querySelector('.grid58').id = "A4";

        document.querySelector('.grid41').id = "H5";
        document.querySelector('.grid42').id = "G5";
        document.querySelector('.grid43').id = "F5";
        document.querySelector('.grid44').id = "E5";
        document.querySelector('.grid45').id = "D5";
        document.querySelector('.grid46').id = "C5";
        document.querySelector('.grid47').id = "B5";
        document.querySelector('.grid48').id = "A5";

        document.querySelector('.grid31').id = "H6";
        document.querySelector('.grid32').id = "G6";
        document.querySelector('.grid33').id = "F6";
        document.querySelector('.grid34').id = "E6";
        document.querySelector('.grid35').id = "D6";
        document.querySelector('.grid36').id = "C6";
        document.querySelector('.grid37').id = "B6";
        document.querySelector('.grid38').id = "A6";

        document.querySelector('.grid21').id = "H7";
        document.querySelector('.grid22').id = "G7";
        document.querySelector('.grid23').id = "F7";
        document.querySelector('.grid24').id = "E7";
        document.querySelector('.grid25').id = "D7";
        document.querySelector('.grid26').id = "C7";
        document.querySelector('.grid27').id = "B7";
        document.querySelector('.grid28').id = "A7";

        document.querySelector('.grid11').id = "H8";
        document.querySelector('.grid12').id = "G8";
        document.querySelector('.grid13').id = "F8";
        document.querySelector('.grid14').id = "E8";
        document.querySelector('.grid15').id = "D8";
        document.querySelector('.grid16').id = "C8";
        document.querySelector('.grid17').id = "B8";
        document.querySelector('.grid18').id = "A8";

        init_pieces_position()

    }
    
}

function init_pieces_position(){
    document.querySelectorAll('.square').forEach(square => {
        square.innerHTML = "" // to delete all pieces before placiung new ones
        
        if (square.id in dict_init_pieces_position){

            square.innerHTML = dict_init_pieces_position[square.id]
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