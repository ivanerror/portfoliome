<script lang="ts">
	import { onMount } from 'svelte';
	let light = $state(false);
	onMount(() => {
		light = document.documentElement.dataset.theme === 'light';
	});
	function theme() {
		light = !light;
		document.documentElement.dataset.theme = light ? 'light' : 'dark';
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute('content', light ? '#f6f6f2' : '#101112');
		try {
			localStorage.setItem('portfolio-theme', light ? 'light' : 'dark');
		} catch {
			/* Storage is optional. */
		}
	}
</script>

<div class="appearance">
	<button
		type="button"
		class="theme-toggle"
		onclick={theme}
		aria-label="Light mode"
		aria-pressed={light}
		title={light ? 'Switch to dark mode' : 'Switch to light mode'}
	>
		<svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"
			><circle cx="10" cy="10" r="6.5" stroke="currentColor" /><path
				d="M10 3.5a6.5 6.5 0 0 1 0 13Z"
				fill="currentColor"
			/></svg
		><span>{light ? 'LIGHT' : 'DARK'}</span>
	</button>
</div>

<style>
	.appearance {
		display: flex;
		align-items: center;
		margin-left: 30px;
		padding-left: 25px;
		border-left: 1px solid var(--line);
	}
	button {
		display: flex;
		align-items: center;
		gap: 7px;
		background: none;
		border: 0;
		color: var(--muted);
		font: 8px var(--mono);
		letter-spacing: 0.06em;
		cursor: pointer;
		padding: 10px 0;
		min-height: 40px;
	}
	button:hover {
		color: var(--fg);
	}
	button:focus-visible {
		outline: 2px solid var(--fg);
		outline-offset: 4px;
	}
	button:disabled {
		cursor: default;
	}
	@media (max-width: 1100px) {
		.appearance {
			margin-left: 22px;
			padding-left: 18px;
		}
	}
	@media (max-width: 720px) {
		.appearance {
			margin-left: 15px;
			padding-left: 12px;
		}
		.theme-toggle > span {
			display: none;
		}
		button {
			min-width: 24px;
			justify-content: center;
		}
	}
	@media (max-width: 390px) {
		.appearance {
			margin-left: 10px;
			padding-left: 9px;
		}
	}
</style>
