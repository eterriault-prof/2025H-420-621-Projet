from flask_socketio import emit
from . import socketio

@socketio.on('move_piece')
def handle_move_piece(data):
    # Diffuse le mouvement à tous les clients connectés
    emit('update_board', data, broadcast=True)
