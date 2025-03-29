// Initialiser le canvas pour dessiner le plateau
const canvas = document.getElementById('chessboard');
const ctx = canvas.getContext('2d');

// Dimensions du plateau de jeu
const boardSize = 480;
const squareSize = boardSize / 8;

let selectedPiece = null;

// État du jeu (sera mis à jour par le serveur)
let chessBoard = Array(8).fill().map(() => Array(8).fill(''));
let piecesMap = {
    'r': 'rook-b',
    'n': 'knight-b',
    'b': 'bishop-b',
    'q': 'queen-b',
    'k': 'king-b',
    'p': 'pawn-b',
    'R': 'rook-w',
    'N': 'knight-w',
    'B': 'bishop-w',
    'Q': 'queen-w',
    'K': 'king-w',
    'P': 'pawn-w'
};
// Connexion WebSocket
socket = io("http://localhost:5000");

socket.on('connect', () => {
    console.log('Connecté au serveur WebSocket');
    socket.emit("get_board"); // Demander l'état initial du plateau
});

// Fonction pour dessiner le plateau de jeu
function drawBoard() {
    console.log("Drawing board with current state:", chessBoard);
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            ctx.fillStyle = (row + col) % 2 === 0 ? '#f0d9b5' : '#b58863';
            ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);

            // Dessiner les pièces
            const piece = chessBoard[row][col];
            if (piece !== '') {
                const img = new Image();
                img.src = `/static/assets/${piecesMap[piece]}.svg`; // Charger l'image de la pièce
                console.log(`Loading image for piece: ${piecesMap[piece]}`);
                img.onload = () => {
                    ctx.drawImage(img, col * squareSize, row * squareSize, squareSize, squareSize);
                };
            }
        }
    }
}

// Écouter les mises à jour du plateau depuis le serveur
socket.on('board_update', function (data) {
    console.log("Received board update:", data);
    // Vérifier si les données reçues contiennent un plateau valide
    if (data && Array.isArray(data.board) && data.board.length === 8) {
        chessBoard = data.board;
        drawBoard();
    } else {
        console.error("Invalid board data received:", data);
    }
});

canvas.addEventListener('click', function (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    const row = Math.floor(y / squareSize);
    const col = Math.floor(x / squareSize);

    console.log(`Clicked on square: (${row}, ${col})`);

    if (!selectedPiece) {
        // Sélectionner une pièce si la case contient une pièce
        if (chessBoard[row][col] !== '') {
            selectedPiece = { row, col };
        }
    } else {
        // Déplacer la pièce si elle est sélectionnée
        socket.emit('move_piece', {
            start: [selectedPiece.row, selectedPiece.col],
            end: [row, col]
        });
        selectedPiece = null;
    }
});

// Dessiner le plateau au chargement
drawBoard();