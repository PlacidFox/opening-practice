from functions import get_pgn, open_pgn, moves_to_dict, save_games_json, split_game_moves, get_only_moves, dict_pgn_moves, moves_to_uci_format, dict_uci_moves
from functions import NAME_PGN
from functions import Colors, COLORS_NAME


def test_split_game_moves(game):    
    return (str(game.mainline_moves()).split(" "))

games = open_pgn(NAME_PGN[Colors.TEST_WHITE])

"""
for game in games:

    print(test_split_game_moves(game))
    print(game.mainline())
    print(game.variations)        
    #game.next(game.variations[0])
    game.variations[0].next()
    print(game.variations)  
    
    print(game.variations[0].next().next().next().next().variations)
    
    print(game.variations[0].next().next().next().next().variations[1])
    
    print(game.variations[0].next().next().next().next())    
""" 


for game in games:
    #cible : ce format là : 
    print(get_only_moves(test_split_game_moves(game)))
    
    tab_cible = []

    for i in range (10):
        game = game.next()
        if game is None:
            break
        
        move = str(game).split(" ")[1]
        tab_cible.append(move)
        
        print(game)
   
        if len(game.variations) > 1:
            game = game.variations[1]
            move = str(game).split(" ")[1]
            tab_cible.append(move)
            print(game)
               
#ok récup move si une variante    
print(tab_cible)

