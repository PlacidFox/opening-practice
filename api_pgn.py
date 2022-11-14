import requests

import chess.pgn

url = "https://lichess.org/api/study/pVxuFeun.pgn"

r = requests.get(
    url,
    #params={"max":2, "analysed":"true", "clocks":"true", "evals":"true", "opening":"true"},
    #headers={"Accept": "application/x-chess-pgn"}
)

pgn_text = r.text

f = open("test.pgn", "w")
f.write(pgn_text)
f.close()

pgn = open("test.pgn")


first_game = chess.pgn.read_game(pgn)
second_game = chess.pgn.read_game(pgn)


print(first_game.headers)
print(first_game.headers["Event"])
print(second_game.headers)
print(second_game.headers["FEN"])

print()
print(first_game)
print(f"Variante : {first_game.mainline_moves()}")
