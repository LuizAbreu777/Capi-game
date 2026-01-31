<script lang="ts">
	import { MemoryGame } from '../../memory/game';
	let game: MemoryGame;
	let timer = 0;

	const startGame = (playerName: string) => {
		const characters = [
			'access-point',
			'calculadora',
			'carta-core',
			'cisco',
			'cpu',
			'favicon',
			'headset',
			'html',
			'javascript',
			'monitor',
			'pasta-pesquisa',
			'pasta',
			'router',
			'svelte',
			'switch',
			'typescript'
		];

		game = new MemoryGame(characters, playerName);

		const intervalId = setInterval(() => {
			timer = game.timer;
		}, 1000);
	};

	startGame('Jogador 1');
</script>

<div class="image-jogar">
	<div>
		<h1>Find the Matching Elements</h1>
	</div>

	<main>
		<header>
			<span class="player">Jogador: Jogador 1</span>
			<span>Tempo: <span class="timer">{timer}segundos</span></span>
		</header>

		<div class="grid"></div>
	</main>

	<a class="menu" href="/">Back to Menu</a>
</div>
