from functions import get_pgn, open_pgn, moves_to_dict, save_games_json, split_game_moves, get_only_moves, dict_pgn_moves, moves_to_uci_format, dict_uci_moves
from functions import NAME_PGN
from functions import Colors, COLORS_NAME


def test_split_game_moves(game):    
    return (str(game.mainline_moves()).split(" "))

games = open_pgn(NAME_PGN[Colors.TEST_WHITE])


def getsidelinesNumber(game):
    nb_variation = 1
    end_move = False
       
    while not end_move:
        game = game.next()
        
        if len(game.variations) > 1:
            new_variation = len(game.variations) - 1
            nb_variation += new_variation

            for nb_var in range (new_variation) :                
                game_tempo = game.variations[nb_var + 1]                        
                variationcheckloop(game_tempo)

        end_move = game.is_end()   

    print (nb_variation)
        

def variationcheckloop(game_tempo_loop):
    end_move = False
    
    while not end_move:
        game_tempo_loop = game_tempo_loop.next()
        
        if len(game_tempo_loop.variations) > 1:
            new_variation = len(game_tempo_loop.variations) - 1
            nb_variation += new_variation
            
            for nb_var in range (new_variation) :
                
                new_game_tempo_loop = game_tempo_loop.variations[nb_var + 1]
                        
                variationcheckloop(new_game_tempo_loop)
                        
        end_move = game_tempo_loop.is_end()   
    
   
def getsidelines(game):# work for only 1 sideline and only one time, no sideline later on
    variations_moves = [[]]
    end_move = False
           
    while not end_move:
        game = game.next()
             
        variations_moves[0].append(str(game).split(" ")[1])
                
        if len(game.variations) > 1:
                     
            for index in range(1, len(game.variations)):
                end_move = False
                
                game_variation = game.variations[index]
                
                variations_moves.append([])            
                for move in variations_moves[0]:
                    variations_moves[index].append(move)
                            
                variations_moves[index].append(str(game_variation).split(" ")[1])
                            
                while not end_move:
                    game_variation = game_variation.next()  
                    variations_moves[index].append(str(game_variation).split(" ")[1])
                    end_move = game_variation.is_end()
        

    end_move = game.is_end()

    print (variations_moves)

# to get each node number with a variation
def sidelines_nodes(game):
    sidelines_nodes = []
    nb_move = 1
    
    end_move = False
    
    while not end_move:
        game = game.next()
        if len(game.variations) > 1:
            sidelines_nodes.append([nb_move, len(game.variations) - 1])  # get node number with a sideline (after) and the number of sidelines

        nb_move += 1
        end_move = game.is_end()
        
    print(sidelines_nodes)


getsidelines(games[2])
sidelines_nodes(games[2])
sidelines_nodes(games[3])

"""
for game in games:
    #split_game(game)
    #getsidelinesNumber(game)
    getsidelines(game)
"""