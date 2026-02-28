// Lógica Principal do Jogo da Bíblia

class BibleQuizGame {
    constructor() {
        this.currentScreen = 'start';
        this.difficulty = 'easy';
        this.gameMode = 'random';
        this.selectedBook = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.timer = 30;
        this.timerInterval = null;
        this.gameDuration = 30;
        this.playerName = 'Visitante';

        // Elementos DOM
        this.elements = {
            startScreen: document.getElementById('start-screen'),
            bookSelection: document.getElementById('book-selection'),
            gameScreen: document.getElementById('game-screen'),
            resultScreen: document.getElementById('result-screen'),
            loadingOverlay: document.getElementById('loading-overlay'),

            // Tela de Início
            playerNameInput: document.getElementById('player-name-input'),
            difficultyButtons: document.querySelectorAll('.difficulty-btn'),
            modeButtons: document.querySelectorAll('.mode-btn'),
            startBtn: document.getElementById('start-btn'),
            bookGrid: document.getElementById('book-grid'),
            backToStart: document.getElementById('back-to-start'),
            startBookBtn: document.getElementById('start-book-btn'),

            // Tela do Jogo
            currentPlayerName: document.getElementById('current-player-name'),
            score: document.getElementById('score'),
            questionCount: document.getElementById('question-count'),
            timer: document.getElementById('timer'),
            progressFill: document.getElementById('progress-fill'),
            questionText: document.getElementById('question-text'),
            questionReference: document.getElementById('question-reference'),
            optionsContainer: document.getElementById('options-container'),
            feedbackContainer: document.getElementById('feedback-container'),
            feedbackMessage: document.getElementById('feedback-message'),
            correctAnswer: document.getElementById('correct-answer'),

            // Tela de Resultado
            finalScore: document.getElementById('final-score'),
            correctAnswers: document.getElementById('correct-answers'),
            wrongAnswers: document.getElementById('wrong-answers'),
            accuracy: document.getElementById('accuracy'),
            leaderboardList: document.getElementById('leaderboard-list'),
            playAgainBtn: document.getElementById('play-again-btn'),
            shareBtn: document.getElementById('share-btn'),

            // Estatísticas
            bestScore: document.getElementById('best-score'),
            totalGames: document.getElementById('total-games')
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadStats();
        this.loadPlayerName();
        this.renderBookSelection();
    }

    loadPlayerName() {
        const savedName = localStorage.getItem('bibleQuizPlayerName');
        if (savedName) {
            this.playerName = savedName;
            this.elements.playerNameInput.value = savedName;
        }
    }

    setupEventListeners() {
        // Nome do Jogador
        this.elements.playerNameInput.addEventListener('input', (e) => {
            this.playerName = e.target.value.trim() || 'Visitante';
            localStorage.setItem('bibleQuizPlayerName', this.playerName);
        });

        // Seleção de Dificuldade
        this.elements.difficultyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setDifficulty(e.target.dataset.difficulty);
            });
        });

        // Seleção de Modo
        this.elements.modeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setGameMode(e.target.dataset.mode);
            });
        });

        // Botão Iniciar
        this.elements.startBtn.addEventListener('click', () => {
            this.startGame();
        });

        // Botão Voltar
        this.elements.backToStart.addEventListener('click', () => {
            this.showScreen('start');
        });

        // Botão Iniciar por Livro
        this.elements.startBookBtn.addEventListener('click', () => {
            this.startGame();
        });

        // Botão Jogar Novamente
        this.elements.playAgainBtn.addEventListener('click', () => {
            this.showScreen('start');
        });

        // Botão Compartilhar
        this.elements.shareBtn.addEventListener('click', () => {
            this.shareScore();
        });
    }

    setDifficulty(difficulty) {
        this.difficulty = difficulty;
        this.elements.difficultyButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.difficulty === difficulty) {
                btn.classList.add('active');
            }
        });
    }

    setGameMode(mode) {
        this.gameMode = mode;
        this.elements.modeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.mode === mode) {
                btn.classList.add('active');
            }
        });

        // Mostrar ou esconder seleção de livro
        if (mode === 'by-book') {
            this.showScreen('book-selection');
        }
    }

    renderBookSelection() {
        const booksAT = getBooksByTestament('AT');
        const booksNT = getBooksByTestament('NT');

        let html = '<div class="testament-section"><h3>Antigo Testamento</h3><div class="book-grid-inner">';

        booksAT.forEach(book => {
            html += `
                <div class="book-card" data-book="${book.key}">
                    <div class="book-name">${book.name}</div>
                </div>
            `;
        });

        html += '</div></div>';
        html += '<div class="testament-section"><h3>Novo Testamento</h3><div class="book-grid-inner">';

        booksNT.forEach(book => {
            html += `
                <div class="book-card" data-book="${book.key}">
                    <div class="book-name">${book.name}</div>
                </div>
            `;
        });

        html += '</div></div>';

        this.elements.bookGrid.innerHTML = html;

        // Adicionar eventos de clique aos livros
        document.querySelectorAll('.book-card').forEach(card => {
            card.addEventListener('click', (e) => {
                document.querySelectorAll('.book-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.selectedBook = card.dataset.book;
            });
        });
    }

    startGame() {
        if (this.gameMode === 'by-book' && !this.selectedBook) {
            alert('Por favor, selecione um livro!');
            return;
        }

        this.showLoading(true);

        // Atualizar nome para o jogo
        this.elements.currentPlayerName.textContent = this.playerName;

        // Simular carregamento de perguntas
        setTimeout(() => {
            this.initializeGame();
            this.showLoading(false);
            this.showScreen('game');
            this.startQuestion();
        }, 1500);
    }

    initializeGame() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.timer = this.gameDuration;

        // Definir quantidade de tempo baseado na dificuldade
        switch (this.difficulty) {
            case 'easy':
                this.gameDuration = 45;
                break;
            case 'medium':
                this.gameDuration = 30;
                break;
            case 'hard':
                this.gameDuration = 20;
                break;
            default:
                this.gameDuration = 30;
        }

        // Obter perguntas baseado no modo
        switch (this.gameMode) {
            case 'random':
                this.questions = getQuestionsByDifficulty(this.difficulty);
                break;
            case 'old-testament':
                this.questions = getQuestionsByTestament('AT');
                break;
            case 'new-testament':
                this.questions = getQuestionsByTestament('NT');
                break;
            case 'by-book':
                this.questions = getQuestionsByBook(this.selectedBook);
                break;
        }

        // Atualizar UI
        this.updateScoreBoard();
        this.updateProgress();
    }

    startQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.endGame();
            return;
        }

        const question = this.questions[this.currentQuestionIndex];
        this.timer = this.gameDuration;

        // Atualizar contagem de perguntas
        this.elements.questionCount.textContent = `${this.currentQuestionIndex + 1}/${this.questions.length}`;

        // Renderizar pergunta
        this.renderQuestion(question);

        // Iniciar timer
        this.startTimer();
    }

    renderQuestion(question) {
        this.elements.questionText.textContent = question.question;
        this.elements.questionReference.textContent = `Referência: ${question.reference}`;

        // Embaralhar opções
        const shuffledOptions = this.shuffleOptions(question.options, question.correct);

        let html = '';
        shuffledOptions.forEach((option, index) => {
            html += `
                <button class="option-btn" data-index="${option.index}">
                    <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                    <div class="option-text">${option.text}</div>
                </button>
            `;
        });

        this.elements.optionsContainer.innerHTML = html;
        this.elements.feedbackContainer.style.display = 'none';

        // Adicionar eventos de clique
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.checkAnswer(e.currentTarget.dataset.index, question.correct);
            });
        });
    }

    shuffleOptions(options, correctIndex) {
        const optionsWithIndex = options.map((text, index) => ({
            text,
            index,
            isCorrect: index === correctIndex
        }));

        // Embaralhar
        for (let i = optionsWithIndex.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
        }

        return optionsWithIndex;
    }

    checkAnswer(selectedIndex, correctIndex) {
        // Desativar opções
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
        });

        // Parar timer
        this.stopTimer();

        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedIndex == correctIndex;

        if (isCorrect) {
            this.score += this.timer * 10;
            this.correctAnswers++;
            this.showFeedback('Correto!', 'success', true);
        } else {
            this.wrongAnswers++;
            this.showFeedback('Errado!', 'error', false);
            this.showCorrectAnswer(question.options[correctIndex]);
        }

        // Destacar resposta correta
        this.highlightCorrectAnswer(correctIndex);

        // Próxima pergunta após 2 segundos
        setTimeout(() => {
            this.currentQuestionIndex++;
            this.startQuestion();
        }, 2000);
    }

    showFeedback(message, type, showTimer) {
        this.elements.feedbackMessage.textContent = message;
        this.elements.feedbackMessage.className = `feedback-message ${type}`;
        this.elements.feedbackContainer.style.display = 'block';

        if (showTimer) {
            this.elements.correctAnswer.textContent = `Tempo restante: ${this.timer}s`;
        }

        this.updateScoreBoard();
    }

    showCorrectAnswer(correctAnswer) {
        this.elements.correctAnswer.innerHTML = `Resposta correta: <strong>${correctAnswer}</strong>`;
    }

    highlightCorrectAnswer(correctIndex) {
        const options = document.querySelectorAll('.option-btn');
        options.forEach((btn, index) => {
            const optionText = btn.querySelector('.option-text').textContent;
            const isCorrect = optionText === this.questions[this.currentQuestionIndex].options[correctIndex];

            if (isCorrect) {
                btn.classList.add('correct-flash');
            }
        });
    }

    startTimer() {
        this.stopTimer(); // Limpar timer anterior

        this.timerInterval = setInterval(() => {
            this.timer--;
            this.updateTimer();

            if (this.timer <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    timeUp() {
        this.stopTimer();
        this.wrongAnswers++;
        this.showFeedback('Tempo esgotado!', 'error', false);
        this.showCorrectAnswer(this.questions[this.currentQuestionIndex].options[this.questions[this.currentQuestionIndex].correct]);

        // Destacar resposta correta
        this.highlightCorrectAnswer(this.questions[this.currentQuestionIndex].correct);

        setTimeout(() => {
            this.currentQuestionIndex++;
            this.startQuestion();
        }, 2000);
    }

    updateTimer() {
        this.elements.timer.textContent = `${this.timer}s`;
        const percentage = (this.timer / this.gameDuration) * 100;
        this.elements.progressFill.style.width = `${percentage}%`;

        // Mudar cor do timer quando estiver acabando
        if (this.timer <= 5) {
            this.elements.timer.style.color = '#e74c3c';
            this.elements.progressFill.style.backgroundColor = '#e74c3c';
        } else {
            this.elements.timer.style.color = '#fff';
            this.elements.progressFill.style.backgroundColor = '#f1c40f';
        }
    }

    updateScoreBoard() {
        this.elements.score.textContent = this.score;
    }

    updateProgress() {
        const percentage = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        // A progress bar será atualizada no startQuestion
    }

    endGame() {
        this.stopTimer();
        this.calculateFinalScore();
        this.saveStats();
        this.showScreen('result');
        this.renderLeaderboard();
    }

    calculateFinalScore() {
        const accuracy = this.questions.length > 0 ? Math.round((this.correctAnswers / this.questions.length) * 100) : 0;

        this.elements.finalScore.textContent = this.score;
        this.elements.correctAnswers.textContent = this.correctAnswers;
        this.elements.wrongAnswers.textContent = this.wrongAnswers;
        this.elements.accuracy.textContent = `${accuracy}%`;
    }

    saveStats() {
        const stats = this.getStats();
        stats.totalGames++;

        if (this.score > stats.bestScore) {
            stats.bestScore = this.score;
        }

        localStorage.setItem('bibleQuizStats', JSON.stringify(stats));
        this.loadStats();
    }

    getStats() {
        const saved = localStorage.getItem('bibleQuizStats');
        return saved ? JSON.parse(saved) : { bestScore: 0, totalGames: 0 };
    }

    loadStats() {
        const stats = this.getStats();
        this.elements.bestScore.textContent = `Melhor: ${stats.bestScore}`;
        this.elements.totalGames.textContent = `Jogos: ${stats.totalGames}`;
    }

    renderLeaderboard() {
        const scores = this.getLeaderboardScores();
        let html = '';

        scores.forEach((score, index) => {
            const displayName = score.name || 'Visitante';
            html += `
                <div class="leaderboard-item">
                    <span>${index + 1}º - ${displayName}</span>
                    <span>${score.points} pts</span>
                </div>
            `;
        });

        this.elements.leaderboardList.innerHTML = html;
    }

    getLeaderboardScores() {
        const saved = localStorage.getItem('bibleQuizLeaderboard');
        let scores = saved ? JSON.parse(saved) : [];

        // Adicionar pontuação atual se não estiver na lista
        const currentScore = this.score;
        const currentName = this.playerName;
        const existingScore = scores.find(s => s.points === currentScore && s.name === currentName);

        if (!existingScore && currentScore > 0) {
            scores.push({ name: currentName, points: currentScore, date: new Date().toISOString() });
            scores.sort((a, b) => b.points - a.points);
            scores = scores.slice(0, 5);
            localStorage.setItem('bibleQuizLeaderboard', JSON.stringify(scores));
        }

        return scores.slice(0, 5);
    }

    shareScore() {
        const text = `Eu fiz ${this.score} pontos no Jogo da Bíblia! Teste seus conhecimentos bíblicos de Gênesis a Apocalipse. #JogoDaBiblia`;

        if (navigator.share) {
            navigator.share({
                title: 'Jogo da Bíblia',
                text: text,
                url: window.location.href
            });
        } else {
            // Copiar para clipboard
            navigator.clipboard.writeText(text).then(() => {
                alert('Texto copiado para a área de transferência!');
            });
        }
    }

    showLoading(show) {
        if (show) {
            this.elements.loadingOverlay.classList.add('active');
        } else {
            this.elements.loadingOverlay.classList.remove('active');
        }
    }

    showScreen(screenName) {
        // Esconder todas as telas
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Mostrar tela selecionada
        switch (screenName) {
            case 'start':
                this.elements.startScreen.classList.add('active');
                break;
            case 'book-selection':
                this.elements.bookSelection.classList.add('active');
                break;
            case 'game':
                this.elements.gameScreen.classList.add('active');
                break;
            case 'result':
                this.elements.resultScreen.classList.add('active');
                break;
        }

        this.currentScreen = screenName;
    }
}

// Inicializar o jogo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new BibleQuizGame();
});

// Funções auxiliares globais (para serem usadas no questions.js)
window.shuffleArray = function (array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};