from flask import Flask, render_template
from flask_socketio import SocketIO

socketio = SocketIO()
app = None
def create_app():
    app = Flask(__name__)  # Créez l'application Flask
    
    socketio.init_app(app)

    @app.route('/')
    def index():
        print("Rendering index.html")
        return render_template('index.html')

    return app


