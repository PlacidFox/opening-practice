from functions import get_pgn, open_pgn, moves_to_dict, save_games_json
from functions import NAME_PGN
from functions import Colors

get_pgn()

for color in Colors:
    games = open_pgn(NAME_PGN[color])
    dict_games = moves_to_dict(games, color)
    save_games_json(dict_games, color)

    
    




