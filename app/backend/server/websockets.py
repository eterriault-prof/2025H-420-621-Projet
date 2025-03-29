from flask_socketio import SocketIO, emit
from .app import socketio, game

socketio = SocketIO()

@socketio.on('connect')
def handle_connect():
    print('Client connecté')

@socketio.on('move')
def handle_move(data):
    print(f'Mouvement reçu : {data}')