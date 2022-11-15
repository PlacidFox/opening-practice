//<div class="divv" id="row2">
//<li class="case case_white" id="case_A2"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wP.svg') }}"></li>
//<li class="case case_black" id="case_B2"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wP.svg') }}"></li>
//<li class="case case_white" id="case_C2"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wP.svg') }}"></li>
//<li class="case case_black" id="case_D2"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wP.svg') }}"></li>
//<li class="case case_white" id="case_E2"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wP.svg') }}"></li>
//<li class="case case_black" id="case_F2"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wP.svg') }}"></li>
//<li class="case case_white" id="case_G2"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wP.svg') }}"></li>
//<li class="case case_black" id="case_H2"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wP.svg') }}"></li>
//</div>
//<div class="divv" id="row1">
//<li class="case case_black" id="case_A1"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wR.svg') }}"></li>
//<li class="case case_white" id="case_B1"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wN.svg') }}"></li>
//<li class="case case_black" id="case_C1"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wB.svg') }}"></li>
//<li class="case case_white" id="case_D1"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wQ.svg') }}"></li>
//<li class="case case_black" id="case_E1"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wK.svg') }}"></li>
//<li class="case case_white" id="case_F1"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wB.svg') }}"></li>
//<li class="case case_black" id="case_G1"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wN.svg') }}"></li>
//<li class="case case_white" id="case_H1"><img class="piece" src="{{ url_for('static', filename='img_piece/maestro/wR.svg') }}"></li>
//</div>

let link_img_rookW = "<img class=\"piece\" src=\"/static/img_piece/maestro/wR.svg\">"
let link_img_knightW = "<img class=\"piece\" src=\"/static/img_piece/maestro/wN.svg\">"
let link_img_bishopW = "<img class=\"piece\" src=\"/static/img_piece/maestro/wB.svg\">"
let link_img_queenW = "<img class=\"piece\" src=\"/static/img_piece/maestro/wQ.svg\">"
let link_img_kingW = "<img class=\"piece\" src=\"/static/img_piece/maestro/wK.svg\">"
let link_img_pawnW = "<img class=\"piece\" src=\"/static/img_piece/maestro/wP.svg\">"

let link_img_rookB = "<img class=\"piece\" src=\"/static/img_piece/maestro/bR.svg\">"
let link_img_knightB = "<img class=\"piece\" src=\"/static/img_piece/maestro/bN.svg\">"
let link_img_bishopB = "<img class=\"piece\" src=\"/static/img_piece/maestro/bB.svg\">"
let link_img_queenB = "<img class=\"piece\" src=\"/static/img_piece/maestro/bQ.svg\">"
let link_img_kingB = "<img class=\"piece\" src=\"/static/img_piece/maestro/bK.svg\">"
let link_img_pawnB = "<img class=\"piece\" src=\"/static/img_piece/maestro/bP.svg\">"

function drawPieces() {

    console.log("draw pieces functions")

    document.querySelectorAll('.case').forEach(image => {

        if (image.innerText.length !== 0) {
            switch (image.innerText){
                case "rookW":
                    image.innerHTML = link_img_rookW;
                    break;
                case "knightW":
                    image.innerHTML = link_img_knightW;
                    break;
                case "bishopW":
                    image.innerHTML = link_img_bishopW;
                    break;
                case "queenW":
                    image.innerHTML = link_img_queenW;
                    break;
                case "kingW":
                    image.innerHTML = link_img_kingW;
                    break;
                case "pawnW":
                    image.innerHTML = link_img_pawnW;
                    break;

                case "rookB":
                    image.innerHTML = link_img_rookB;
                    break;
                case "knightB":
                    image.innerHTML = link_img_knightB;
                    break;
                case "bishopB":
                    image.innerHTML = link_img_bishopB;
                    break;
                case "queenB":
                    image.innerHTML = link_img_queenB;
                    break;
                case "kingB":
                    image.innerHTML = link_img_kingB;
                    break;
                case "pawnB":
                    image.innerHTML = link_img_pawnB;
                    break;
    

                
            }
        }})

}