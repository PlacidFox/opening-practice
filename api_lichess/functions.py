import requests
import json
import chess.pgn

from enum import Enum, auto

class Colors(Enum):
    WHITE = auto()
    BLACK = auto()
    TEST_WHITE = auto()


URLS_LICHESS = {Colors.WHITE: "https://lichess.org/api/study/pVxuFeun.pgn",
              Colors.BLACK: "https://lichess.org/api/study/Bdv5DTTo.pgn",
              Colors.TEST_WHITE: "https://lichess.org/api/study/4wbQcMAw.pgn"}

JSON_FILES = {Colors.WHITE: "./data/json_opening_white.json",
              Colors.BLACK: "./data/json_opening_black.json",
              Colors.TEST_WHITE: "./data/TEST_JSON.json"}

NAME_PGN = {Colors.WHITE: "./data/pgn_opening_white.pgn",
            Colors.BLACK: "./data/pgn_opening_black.pgn",
            Colors.TEST_WHITE: "./data/TEST_PGN.pgn"}

COLORS_NAME = {Colors.WHITE: "White",
               Colors.BLACK: "Black",
               Colors.TEST_WHITE: "White"}


#download 2 pgn files for both color opening book
def get_pgn():
    
    for color in Colors:
        r = requests.get(URLS_LICHESS[color])
        pgn_text = r.text
        f = open(NAME_PGN[color], "w")
        f.write(pgn_text)
        f.close()
        

#return a list of all games in the pgn file
def open_pgn(pgn_file): 
    
    pgn = open(pgn_file)
    
    games = []
    
    while True:
        game = chess.pgn.read_game(pgn)
        if game is None:
            break  # end of file

        games.append(game)
    
    return games


#get a list for each game moves
def split_game_moves(game):    
    return (str(game.mainline_moves()).split(" "))


#remove the moves number from 1 list of a game moves
def get_only_moves(game_moves):
    
    tab_only_moves = []
  
    if len(game_moves[0]) > 2 :
        tab_only_moves.append(game_moves[1])

        list_index = range(2, len(game_moves), 3)

        for i in range(2, len(game_moves)):

            if i not in list_index:
                tab_only_moves.append(game_moves[i])
    
        return (tab_only_moves)   

    elif len(game_moves[0]) == 2 :

        list_index = range(0, len(game_moves), 3)

        for i in range(len(game_moves)):

            if i not in list_index:
                tab_only_moves.append(game_moves[i])
              
        return (tab_only_moves)
    
#make a dict from pgn moves  - #COLOR STILL MANUEL IN CODE - TO DO BETTER - AND GET MOVE NUMBER IF BLACK START ?
def dict_pgn_moves(tab_only_moves):
    n = 2

    list_dict_pgn_moves = []
    
    nb_move = 0
    white_move = True

    for i in range(0, len(tab_only_moves)):
        
        if white_move is True:
            color = COLORS_NAME[Colors.WHITE]
            nb_move += 1

        elif white_move is False:
            color = COLORS_NAME[Colors.BLACK]

        dict_pgn_moves = {"move_number": nb_move,
                          "color": color,
                          "move": tab_only_moves[i],                    
                          }
    
        list_dict_pgn_moves.append(dict_pgn_moves)

        white_move = not white_move #change color turn
    
    return list_dict_pgn_moves


    
    
#create a liste of move in UCI Format : easier to check and do moves with coordinates (E2 -> E4), than just only e4
def moves_to_uci_format(tab_only_moves):

    list_uci_moves = []

    board = chess.Board()

    for move in tab_only_moves:
        san_text = move
        uci_text = board.push_san(san_text).uci()
        list_uci_moves.append(uci_text)
    
    return list_uci_moves

#split uci moves into from_coordinates et to_coordinates - #COLOR STILL MANUEL IN CODE - TO DO BETTER - AND GET MOVE NUMBER IF BLACK START ?
def dict_uci_moves(list_uci_moves):
    n = 2

    list_dict_uci_moves = []
    
    nb_move = 0
    white_move = True

    for i in range(0, len(list_uci_moves)):
        
        if white_move is True:
            color = COLORS_NAME[Colors.WHITE]
            nb_move += 1

        elif white_move is False:
            color = COLORS_NAME[Colors.BLACK]

        dict_uci_moves = {"move_number": nb_move,
                          "color": color,
                          "from_square": list_uci_moves[i][0:2],
                          "to_square": list_uci_moves[i][2:4]                        
                          }
    
        list_dict_uci_moves.append(dict_uci_moves)

        white_move = not white_move #change color turn
    
    return list_dict_uci_moves


# create a dict of all games with each name and list of moves (without number)
def moves_to_dict(games, color):
    
    if color == Colors.WHITE:
    
        dict_moves={"color": COLORS_NAME[Colors.WHITE], # a faire définition couleur selon le choix de fichier ? 
                    "games": []
        }        
    elif color == Colors.BLACK:
                dict_moves={"color": COLORS_NAME[Colors.BLACK], # a faire définition couleur selon le choix de fichier ? 
                    "games": []
        }   
    elif color == Colors.TEST_WHITE:
                dict_moves={"color": COLORS_NAME[Colors.TEST_WHITE], # a faire définition couleur selon le choix de fichier ? 
                    "games": []
        }  
    
    for game in games:
        
        game_moves = split_game_moves(game)
        tab_only_moves = get_only_moves(game_moves)
        dict_pgn = dict_pgn_moves(tab_only_moves)
                
        tab_uci_moves = moves_to_uci_format(tab_only_moves)
        dict_uci = dict_uci_moves(tab_uci_moves)
        
        dict_game = {"name": game.headers["Event"],      
                      "moves_pgn": dict_pgn,
                      "moves_uci": dict_uci
        }
        dict_moves["games"].append(dict_game)
          
    return dict_moves


#save dict into JSON format
def save_games_json(dict_games, color):
    
    if color == Colors.WHITE:       
        with open(JSON_FILES[Colors.WHITE], "w") as outfile:
            json.dump(dict_games, outfile, indent=2)
            
    if color == Colors.BLACK:       
        with open(JSON_FILES[Colors.BLACK], "w") as outfile:
            json.dump(dict_games, outfile, indent=2)
            
    if color == Colors.TEST_WHITE:       
        with open(JSON_FILES[Colors.TEST_WHITE], "w") as outfile:
            json.dump(dict_games, outfile, indent=2)


