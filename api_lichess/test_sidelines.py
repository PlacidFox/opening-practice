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
    
   
def getsidelines(game):# work for only 1 sideline, no subsidelines
    variations_moves = [[]]
    end_move = False
           
    while not end_move:
        game = game.next()
             
        variations_moves[0].append(str(game).split(" ")[1])
                
        if len(game.variations) > 1:
                     
            for index in range(1, len(game.variations)):
                end_move_variation = False
                
                game_variation = game.variations[index]
                
                variations_moves.append([])            
                for move in variations_moves[0]:
                    variations_moves[-1].append(move)
                            
                variations_moves[-1].append(str(game_variation).split(" ")[1])
                            
                while not end_move_variation:
                    game_variation = game_variation.next()  
                    variations_moves[-1].append(str(game_variation).split(" ")[1])
                    end_move_variation = game_variation.is_end()
        
        
        end_move = game.is_end()

    print (variations_moves)
    
def getsubsidelines(game):# work for only 1 sideline, no subsidelines
    variations_moves = [[]]
    end_move = False
           
    while not end_move:
        game = game.next()
             
        variations_moves[0].append(str(game).split(" ")[1])
        end_move = game.is_end()
                    
        if len(game.variations) > 1:
            for index in range(1, len(game.variations)):
                addsublines(game.variations[index], variations_moves[0], variations_moves)    
        
        end_move = game.is_end()

    print (variations_moves)


def addsublines(game_variation, variation_mainline, variations_moves):
                        
    end_move_variation = False   
               
    variations_moves.append([])
    current_variation_index = len(variations_moves) - 1 
    for move in variation_mainline:
        variations_moves[current_variation_index].append(move)
                
    variations_moves[current_variation_index].append(str(game_variation).split(" ")[1])
    end_move_variation = game_variation.is_end()
                        
    while not end_move_variation:
        game_variation = game_variation.next()  
        variations_moves[current_variation_index].append(str(game_variation).split(" ")[1])
        
        if len(game_variation.variations) > 1:
            for index in range(1, len(game_variation.variations)):
                addsublines(game_variation.variations[index], variations_moves[current_variation_index], variations_moves)    
                                       
        
        end_move_variation = game_variation.is_end()
      


#getsidelines(games[2])
getsubsidelines(games[5]) # WORK for Complex variation

"""
for game in games:
    #split_game(game)
    #getsidelinesNumber(game)
    getsidelines(game)
"""