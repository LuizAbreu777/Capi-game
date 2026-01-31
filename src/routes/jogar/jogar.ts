export type Card = {
	id: number;
	image: string;
	imageName: string;
	revealed: boolean;
	matched: boolean;
};

export type GameState = {
	cards: Card[];
	firstCard: Card | null;
	secondCard: Card | null;
	matches: number;
	timer: number;
	interval: number;
	lockBoard: boolean;
	timerText: string;
	isViewTime: boolean;
};

const images = [
	{ url: '/images/calculadora.jpeg', name: 'calculador' },
	{ url: '/images/carta-core.jpeg', name: 'carta' },
	{ url: '/images/cisco.jpeg', name: 'cisco' },
	{ url: '/images/cpu.jpeg', name: 'cpu' },
	{ url: '/images/headset.jpeg', name: 'headset' },
	{ url: '/images/monitor.jpeg', name: 'monitor' },
	{ url: '/images/typescript.jpeg', name: 'typescript' },
	{ url: '/images/pasta.jpeg', name: 'pasta' },
	{ url: '/images/router.jpg', name: 'router' },
	{ url: '/images/switch.jpg', name: 'switch' }
];

// Inicializa o estado do jogo
export const initializeGameState = (): GameState => {
	const shuffledImages = [...images, ...images]
		.sort(() => Math.random() - 0.5)
		.map((image, index) => ({
			id: index,
			image: image.url,
			imageName: image.name,
			revealed: true,
			matched: false
		}));

	return {
		cards: shuffledImages,
		firstCard: null,
		secondCard: null,
		matches: 0,
		timer: 0,
		interval: 0,
		lockBoard: true,
		timerText: 'View Time',
		isViewTime: true
	};
};

// Função para iniciar o jogo
export const startGame = (state: GameState, onTimerUpdate: () => void) => {
	state.isViewTime = true;
	state.timerText = 'View Time';
	state.lockBoard = true;

	// Exibe o timer após o início do jogo
	clearInterval(state.interval);
	state.timer = 0; // Reinicia o timer corretamente no início do jogo
	state.interval = window.setInterval(() => {
		state.timer++;
		onTimerUpdate(); // Atualiza o estado do timer no Svelte
	}, 1000);

	// Após 5 segundos, oculta todas as cartas e libera o tabuleiro, mas não zera o timer
	setTimeout(() => {
		state.cards = state.cards.map((card) => ({ ...card, revealed: false }));
		state.lockBoard = false;
		state.timerText = 'Game Time';
		state.isViewTime = false;
		onTimerUpdate(); // Atualiza o texto do timer
	}, 5000);
};
// Função para verificar se duas cartas são iguais
export const checkMatch = (state: GameState, resetCards: () => void, onGameWin: () => void) => {
	if (state.firstCard && state.secondCard) {
		state.lockBoard = true;

		if (state.firstCard.image === state.secondCard.image) {
			state.firstCard.matched = true;
			state.secondCard.matched = true;
			state.matches++;

			resetCards();

			if (state.matches === images.length) {
				clearInterval(state.interval);
				onGameWin();
			}
		} else {
			setTimeout(() => {
				if (state.firstCard && state.secondCard) {
					state.firstCard.revealed = false;
					state.secondCard.revealed = false;
				}
				resetCards();
			}, 1000);
		}
	}
};

// Função para revelar uma carta
export const revealCard = (card: Card, state: GameState, checkMatchCallback: () => void) => {
	if (state.lockBoard || card.revealed || card.matched) return;

	if (state.firstCard === card) {
		card.revealed = false;
		resetCards(state);
		return;
	}

	card.revealed = true;

	if (!state.firstCard) {
		state.firstCard = card;
	} else if (!state.secondCard) {
		state.secondCard = card;
		checkMatchCallback();
	}
};

// Função para resetar a seleção de cartas
export const resetCards = (state: GameState) => {
	state.firstCard = null;
	state.secondCard = null;
	state.lockBoard = false;
};