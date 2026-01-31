<script lang="ts">
	import '../../styles/jogar.css';
	import { onMount } from 'svelte';

	type Card = {
		id: number;
		image: string;
		imageName: string;
		revealed: boolean;
		matched: boolean;
	};

	// IMAGENS DOS CARDS
	let images = [
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

	let cards: Card[] = [];
	let firstCard: Card | null = null;
	let secondCard: Card | null = null;
	let matches = 0;
	let timer = 0;
	let interval: number;
	let lockBoard = true; // Bloqueia o tabuleiro durante os primeiros 5 segundos
	let timerText: string;
	let isViewTime: boolean;
	let isStartingGame: boolean;

	// Embaralhar as cartas e inicializar o jogo
	const startGame = () => {
		isViewTime = true;
		timerText = 'View Time';
		// Embaralha as cartas e revela todas no início
		const shuffledImages = [...images, ...images]
			.sort(() => Math.random() - 0.5)
			.map((image, index) => ({
				id: index,
				image: image.url,
				imageName: image.name,
				revealed: true, // Todas as cartas começam reveladas
				matched: false
			}));

		cards = shuffledImages;
		firstCard = null;
		secondCard = null;
		matches = 0;
		timer = 0;
		lockBoard = true; // Bloqueia o tabuleiro no início

		// Exibe o timer após o início do jogo
		clearInterval(interval);
		interval = setInterval(() => {
			timer++;
		}, 1000);

		// Após 5 segundos, oculta todas as cartas e libera o tabuleiro
		setTimeout(() => {
			cards = cards.map((card) => ({ ...card, revealed: false }));
			lockBoard = false; // Desbloqueia o tabuleiro
			timer = 0;
			timerText = 'Game Time';
			isViewTime = false;
		}, 5000);
	};

	// Verifica se as duas cartas são iguais
	const checkMatch = () => {
		if (firstCard && secondCard) {
			lockBoard = true; // Impede cliques enquanto verifica as cartas
			if (firstCard.imageName === secondCard.imageName) {
				firstCard.matched = true;
				secondCard.matched = true;
				matches++;
				resetCards();
				console.log(matches);
				if (matches === images.length) {
					clearInterval(interval);
					alert(`Congratulations! You completed the game in ${timer} seconds.`);
				}
			} else {
				setTimeout(() => {
					if (firstCard && secondCard) {
						firstCard.revealed = false;
						secondCard.revealed = false;
						cards = [...cards];
					}
					resetCards();
				}, 1000); // Espera 1 segundo antes de ocultar as cartas
			}
		}
	};

	// Função para resetar a seleção de cartas
	const resetCards = () => {
		firstCard = null;
		secondCard = null;
		lockBoard = false; // Libera o tabuleiro para novos cliques
	};

	// Revela uma carta ao ser clicada
	const revealCard = (card: Card) => {
		if (lockBoard || card.revealed || card.matched) return;

		if (firstCard === card) {
			card.revealed = false;
			resetCards();
			cards = [...cards];
			return;
		}

		card.revealed = true;
		// ISSO AQUI É BASICAMENTE UM F5
		cards = [...cards];

		if (!firstCard) {
			firstCard = card;
		} else if (!secondCard) {
			secondCard = card;
			checkMatch();
		}
	};

	// Inicia o jogo quando o componente é montado
	onMount(() => {
		isStartingGame = true;
		setTimeout(() => {
			isStartingGame = false;
			startGame();
		}, 5000);
	});
</script>

<main>
	<h1>Memory Game</h1>
	{#if isStartingGame}
		<h2>The memory game will start soon</h2>
	{:else}
		<h2>{timerText}: {timer} secs</h2>
	{/if}
	<div class="grid">
		{#each cards as card}
			<div class="card" on:click={() => revealCard(card)}>
				{#if card.revealed || card.matched}
					<img src={card.image} alt="Card Image" class="card-image" draggable="false" />
				{:else}
					<span>
						<img src={'/images/capy.jpeg'} alt="Card Image" class="card-image" draggable="false" />
					</span>
				{/if}
			</div>
		{/each}
	</div>

	{#if !isStartingGame && !isViewTime}
		<button disabled={isViewTime} on:click={startGame} class="pixel-button">Restart Game</button>
	{/if}
	<a class="menu" href="/">Back to Menu</a>
</main>
