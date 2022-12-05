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


def getsidelinesNumber(game):
    nb_variation = 1
    end_move = False
       
    while not end_move:
        game = game.next()
        
        print(str(game).split(" ")[1])
                
        if len(game.variations) > 1:
            nb_variation += 1
            
            game_2 = game.variations[1]
                        
            while not end_move:
                game_2 = game_2.next()        
                print(str(game_2).split(" ")[1])
                end_move = game_2.is_end()
                       
        end_move = game.is_end()

    print (nb_variation)
    
   
def getsidelinesNumber(game):
    nb_variation = 1
    end_move = False
       
    while not end_move:
        game = game.next()
        
        print(str(game).split(" ")[1])
                
        if len(game.variations) > 1:
            nb_variation += 1
            
            game_2 = game.variations[1]
                        
            while not end_move:
                game_2 = game_2.next()        
                print(str(game_2).split(" ")[1])
                end_move = game_2.is_end()
                       
        end_move = game.is_end()

    print (nb_variation)

    

    
    
def split_game(game):
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

for game in games:
    #split_game(game)
    getsidelinesNumber(game)
