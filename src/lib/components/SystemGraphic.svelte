<script lang="ts">
	import { onMount } from 'svelte';
	let root: HTMLDivElement;
	let visible = $state(false);
	let x = $state(0);
	let y = $state(0);
	onMount(() => {
		const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
		observer.observe(root);
		return () => observer.disconnect();
	});
	function move(event: PointerEvent) {
		if (
			event.pointerType === 'touch' ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		)
			return;
		const rect = root.getBoundingClientRect();
		x = (event.clientX - rect.left - rect.width / 2) / 35;
		y = (event.clientY - rect.top - rect.height / 2) / 35;
	}
</script>

<div
	class="system"
	class:running={visible}
	bind:this={root}
	onpointermove={move}
	onpointerleave={() => {
		x = 0;
		y = 0;
	}}
	aria-hidden="true"
>
	<svg viewBox="0 0 620 540" fill="none" style:--shift-x={`${x}px`} style:--shift-y={`${y}px`}>
		<defs>
			<pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"
				><circle cx="1" cy="1" r="0.7" fill="var(--art-line)" /></pattern
			>
			<pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse"
				><path d="M0 6L6 0" stroke="var(--art-mid)" stroke-width="0.6" /></pattern
			>
		</defs>
		<rect x="20" y="20" width="580" height="490" fill="url(#dots)" />
		<g class="scaffold" stroke="var(--line)" stroke-width="0.8">
			<path d="M310 40V490M55 265H580" stroke-dasharray="3 7" />
			<path d="M68 280L310 140L552 280L310 420Z" />
		</g>
		<g class="construction" stroke="var(--art-ink)" stroke-linejoin="round">
			<g class="layer layer-bottom">
				<path d="M145 337L310 242L475 337V362L310 457L145 362Z" fill="var(--surface)" />
				<path d="M145 337L310 432L475 337M310 432V457" />
				<path d="M145 337L310 242L475 337L310 432Z" fill="url(#hatch)" />
			</g>
			<path d="M195 197V342M425 197V342M310 132V408" stroke="var(--quiet)" stroke-dasharray="3 6" />
			<g class="layer layer-mid">
				<path d="M145 257L310 162L475 257V280L310 375L145 280Z" fill="var(--art-soft)" />
				<path d="M145 257L310 352L475 257M310 352V375" />
				<path d="M145 257L310 162L475 257L310 352Z" fill="var(--art-paper)" />
				<path
					d="M200 225L365 320M255 193L420 288M200 288L365 193M255 320L420 225"
					stroke="var(--art-mid)"
				/>
			</g>
			<g class="layer layer-top">
				<path d="M199 165L310 101L421 165V201L310 265L199 201Z" fill="#202020" />
				<path d="M199 165L310 229L421 165M310 229V265" stroke="#8a8a85" />
				<path d="M199 165L310 101L421 165L310 229Z" fill="#303030" />
				<path d="M254 165L310 133L366 165L310 197Z" stroke="#fafaf5" />
				<path d="M287 165H333M310 152V178" stroke="#fafaf5" />
			</g>
		</g>
		<g stroke="var(--quiet)" stroke-width="0.7"
			><path d="M421 165H503L523 145" /><path d="M145 267H91L71 287" /><path d="M421 369H508" /></g
		>
		<g fill="var(--quiet)" font-family="monospace" font-size="9" letter-spacing="1"
			><text x="457" y="130">01 / INTERFACE</text><text x="22" y="305">02 / SYSTEM</text><text
				x="458"
				y="387">03 / FOUNDATION</text
			></g
		>
		<g fill="var(--fg)"
			><circle cx="421" cy="165" r="3" /><circle cx="145" cy="267" r="3" /><circle
				cx="421"
				cy="369"
				r="3"
			/></g
		>
		<path d="M25 37V25H37M583 25H595V37M25 483V495H37M583 495H595V483" stroke="var(--muted)" />
	</svg>
	<div class="graphic-caption">
		<span>FIG. 01 — THE ART OF BUILDING SYSTEMS</span><span class="live-dot"></span>
	</div>
</div>

<style>
	.system {
		width: 100%;
		position: relative;
	}
	svg {
		width: 100%;
		display: block;
		overflow: visible;
	}
	.construction {
		transform: translate(var(--shift-x), var(--shift-y));
		transition: transform 0.6s ease-out;
	}
	.layer {
		animation: float 7s ease-in-out infinite;
		animation-play-state: paused;
	}
	.layer-mid {
		animation-delay: -2s;
	}
	.layer-bottom {
		animation-delay: -4s;
	}
	.running .layer {
		animation-play-state: running;
	}
	.graphic-caption {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font: 9px var(--mono);
		letter-spacing: 0.08em;
		padding: 0 25px;
		color: var(--quiet);
	}
	.live-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #333;
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-9px);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.layer {
			animation: none;
		}
		.construction {
			transform: none;
			transition: none;
		}
	}
</style>
