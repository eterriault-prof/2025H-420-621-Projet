from app import create_app, socketio
from flask import Flask, render_template
from flask_socketio import SocketIO

app = create_app()

if __name__ == '__main__':
    socketio.run(app, port=5000, debug=True)
