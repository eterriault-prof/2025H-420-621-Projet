
def register_websocket_events(socketio):
    print("Registering websocket events")
    @socketio.on('connect')
    def handle_connect():
        print('Client connecté')

    @socketio.on("get_board")
    def send_board():
        print("getting board state")
        from .app import game
        socketio.emit("board_update", {"board": game.board.board})  # Envoie l'état du plateau au client


