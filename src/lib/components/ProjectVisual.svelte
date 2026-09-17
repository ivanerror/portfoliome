<script lang="ts">
	import type { Project } from '$lib/portfolio';
	let { variant }: { variant: Project['variant'] } = $props();
</script>

<div
	class="visual"
	class:mobile={variant === 'mobile'}
	class:pos={variant === 'pos'}
	aria-hidden="true"
>
	<div class="visual-meta">
		<span
			>{variant === 'grid'
				? 'MODULAR BY DESIGN'
				: variant === 'mobile'
					? 'BUILT AROUND PEOPLE'
					: 'CONNECTED. CONSISTENT.'}</span
		><span>↗</span>
	</div>
	{#if variant === 'grid'}
		<div class="dashboard">
			<div class="dash-bar">
				<span class="mini-logo">P.</span><span>WORKSPACE / OVERVIEW</span><span>•••</span>
			</div>
			<div class="dash-grid">
				<div class="chart">
					<span>PORTFOLIO PERFORMANCE</span><svg viewBox="0 0 240 90"
						><path d="M0 80H240M0 50H240M0 20H240" stroke="var(--art-line)" fill="none" /><path
							d="M0 75L22 64L41 70L62 44L83 51L105 35L128 43L150 20L170 27L191 12L211 20L240 3"
							stroke="var(--art-ink)"
							stroke-width="2"
							fill="none"
						/></svg
					>
				</div>
				<div class="allocation">
					<span>ALLOCATION</span>
					<div class="donut"></div>
				</div>
				<div class="table">
					<span>FUND POSITIONS</span>{#each [1, 2, 3] as row (row)}<div class="table-row">
							<i></i><i></i><i></i>
						</div>{/each}
				</div>
				<div class="mini-chart">
					<span>MARKET ACTIVITY</span>
					<div>
						{#each [35, 57, 42, 73, 55, 88, 69, 95] as h, i (i)}<i style:height={`${h}%`}
							></i>{/each}
					</div>
				</div>
			</div>
		</div>
	{:else if variant === 'mobile'}
		<div class="orbit orbit-one"></div>
		<div class="orbit orbit-two"></div>
		<div class="phone phone-back">
			<div class="notch"></div>
			<div class="phone-header">Your business,<br />at a glance.</div>
			<div class="phone-card">
				<span>WEEKLY INSIGHTS</span><strong>A little better.<br />Every day.</strong>
				<div class="bars">
					{#each [35, 55, 45, 70, 58, 85, 100] as h, i (i)}<i style:height={`${h}%`}></i>{/each}
				</div>
			</div>
			<div class="phone-lines"></div>
		</div>
		<div class="phone phone-front">
			<div class="notch"></div>
			<div class="feedback-icon">✳</div>
			<div class="phone-header">Your voice.<br />Better experiences.</div>
			<div class="feedback-faces">☺ &nbsp; ◉ &nbsp; ☺</div>
			<div class="phone-button">SHARE FEEDBACK ↗</div>
		</div>
	{:else}
		<div class="pos-network">
			<span class="node node-a">PAYMENTS <b>↗</b></span><span class="node node-b"
				>DIAGNOSTICS <b>✓</b></span
			>
		</div>
		<div class="terminal">
			<div class="terminal-screen">
				<div class="terminal-head">A good day for business.<span>● CONNECTED</span></div>
				<div class="terminal-body">
					<div class="product-grid">
						{#each [1, 2, 3, 4, 5, 6] as item (item)}<div>
								<span class="product-shape"></span><i></i>
							</div>{/each}
					</div>
					<div class="receipt">
						<span>NEW ORDER</span><i></i><i></i><i></i>
						<div>READY TO GO ↗</div>
					</div>
				</div>
			</div>
			<div class="stand"></div>
			<div class="stand-foot"></div>
		</div>
	{/if}
	<span class="concept-label">CONCEPTUAL INTERFACE STUDY</span>
</div>

<style>
	.visual {
		height: 330px;
		background: var(--art-bg);
		position: relative;
		overflow: hidden;
		border: 1px solid var(--art-line);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.visual-meta {
		position: absolute;
		top: 19px;
		left: 22px;
		right: 22px;
		display: flex;
		justify-content: space-between;
		font: 8px var(--mono);
		letter-spacing: 0.1em;
		color: var(--muted);
	}
	.visual-meta > span:last-child {
		font-size: 17px;
	}
	.concept-label {
		position: absolute;
		bottom: 15px;
		left: 22px;
		font: 7px var(--mono);
		letter-spacing: 0.12em;
		color: var(--art-mid);
	}
	.dashboard {
		width: 76%;
		background: var(--art-paper);
		border: 1px solid var(--art-line);
		transform: perspective(700px) rotateY(-9deg) rotateX(10deg) rotateZ(-3deg);
		box-shadow: 15px 20px 0 #00000006;
		padding: 12px;
		animation: dashboard-float 7s ease-in-out infinite;
		transform-origin: 50% 55%;
	}
	.dash-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font: 6px var(--mono);
		border-bottom: 1px solid var(--art-line);
		padding-bottom: 9px;
	}
	.mini-logo {
		font: bold 16px sans-serif;
	}
	.dash-grid {
		display: grid;
		grid-template-columns: 1.6fr 1fr;
		gap: 7px;
		margin-top: 8px;
	}
	.dash-grid > div {
		border: 1px solid var(--art-line);
		padding: 9px;
	}
	.dash-grid span {
		font: 5px var(--mono);
		letter-spacing: 0.07em;
		display: block;
	}
	.chart svg {
		width: 100%;
		margin-top: 14px;
	}
	.chart path:last-child {
		stroke-dasharray: 330;
		stroke-dashoffset: 330;
		animation: chart-trace 5s ease-in-out infinite;
	}
	.donut {
		width: 49px;
		height: 49px;
		border: 10px solid var(--art-ink);
		border-right-color: var(--art-mid);
		border-bottom-color: var(--art-line);
		border-radius: 50%;
		margin: 12px auto 0;
		animation: donut-turn 9s linear infinite;
	}
	.table-row {
		display: flex;
		gap: 12px;
		padding: 7px 0;
		border-bottom: 1px solid var(--art-paper);
	}
	.table-row i {
		height: 3px;
		background: var(--art-soft);
		width: 30%;
		animation: row-pulse 3s ease-in-out infinite;
	}
	.table-row:nth-of-type(3) i {
		animation-delay: 0.35s;
	}
	.table-row:nth-of-type(4) i {
		animation-delay: 0.7s;
	}
	.mini-chart > div {
		height: 42px;
		display: flex;
		gap: 4px;
		align-items: end;
		margin-top: 9px;
	}
	.mini-chart i {
		flex: 1;
		background: var(--art-mid);
		transform-origin: bottom;
		animation: bar-breathe 2.8s ease-in-out infinite alternate;
	}
	.mini-chart i:nth-child(2n) {
		animation-delay: -1.2s;
	}
	.mobile {
		background: var(--art-bg);
	}
	.orbit {
		position: absolute;
		border: 1px solid var(--art-line);
		border-radius: 50%;
		width: 380px;
		height: 380px;
		transform: rotateX(50deg) rotateZ(-25deg);
		animation: orbit-drift 14s linear infinite;
	}
	.orbit-two {
		width: 480px;
		height: 480px;
		animation-direction: reverse;
		animation-duration: 19s;
	}
	.phone {
		width: 130px;
		height: 244px;
		border: 4px solid var(--art-ink);
		border-radius: 22px;
		background: var(--art-paper);
		padding: 20px 11px 10px;
		position: absolute;
		box-shadow: 10px 15px 22px #00000010;
	}
	.phone-back {
		transform: rotate(-12deg) translate(-57px, 8px);
		animation: phone-back-float 6s ease-in-out infinite;
	}
	.phone-front {
		transform: rotate(10deg) translate(65px, 13px);
		background: var(--inverse);
		color: var(--inverse-text);
		border-color: var(--art-mid);
		animation: phone-front-float 6s ease-in-out infinite -2.2s;
	}
	.notch {
		position: absolute;
		width: 35px;
		height: 7px;
		left: calc(50% - 17px);
		top: 6px;
		border-radius: 8px;
		background: var(--art-ink);
	}
	.phone-front .notch {
		background: var(--inverse);
	}
	.phone-header {
		font-size: 13px;
		letter-spacing: -0.5px;
		line-height: 1.25;
		font-weight: 600;
	}
	.phone-card {
		background: var(--surface-raised);
		margin-top: 12px;
		padding: 9px;
	}
	.phone-card > span {
		font: 5px var(--mono);
	}
	.phone-card strong {
		font-size: 10px;
		display: block;
		margin-top: 8px;
	}
	.bars {
		height: 50px;
		display: flex;
		align-items: end;
		gap: 4px;
		margin-top: 10px;
	}
	.bars i {
		flex: 1;
		background: var(--art-mid);
		transform-origin: bottom;
		animation: bar-breathe 2.2s ease-in-out infinite alternate;
	}
	.bars i:nth-child(2n) {
		animation-delay: -1s;
	}
	.phone-lines {
		margin-top: 12px;
		height: 17px;
		border-top: 3px solid var(--art-line);
		border-bottom: 3px solid var(--art-line);
	}
	.feedback-icon {
		font-size: 43px;
		margin: 5px 0 15px;
	}
	.feedback-faces {
		font-size: 20px;
		margin-top: 18px;
		color: var(--art-soft);
	}
	.phone-button {
		font: 5px var(--mono);
		background: var(--art-paper);
		color: var(--fg);
		padding: 9px 5px;
		margin-top: 18px;
		text-align: center;
	}
	.pos {
		background: var(--art-bg);
	}
	.terminal {
		width: 70%;
		transform: translateY(10px) rotate(-3deg);
		position: relative;
		animation: terminal-float 6s ease-in-out infinite;
	}
	.terminal-screen {
		background: var(--art-ink);
		border: 6px solid var(--art-ink);
		border-radius: 8px;
	}
	.terminal-head {
		font-size: 9px;
		background: var(--art-paper);
		padding: 10px;
		display: flex;
		justify-content: space-between;
	}
	.terminal-head span {
		font: 5px var(--mono);
		margin-top: 3px;
	}
	.terminal-body {
		display: flex;
		background: var(--art-paper);
		padding: 0 10px 10px;
		gap: 10px;
	}
	.product-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5px;
		width: 65%;
	}
	.product-grid > div {
		background: var(--surface-raised);
		height: 43px;
		display: grid;
		place-items: center;
		padding: 6px;
	}
	.product-shape {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--art-soft);
		animation: product-ping 3.6s ease-in-out infinite;
	}
	.product-grid > div:nth-child(2n) .product-shape {
		animation-delay: -1.4s;
	}
	.product-grid > div:nth-child(2n) .product-shape {
		border-radius: 2px;
		background: var(--art-mid);
	}
	.product-grid i {
		height: 2px;
		width: 20px;
		background: var(--art-soft);
	}
	.receipt {
		flex: 1;
		border: 1px solid var(--art-line);
		padding: 8px;
		font: 5px var(--mono);
		animation: receipt-in 5s ease-in-out infinite;
	}
	.receipt > i {
		height: 3px;
		background: var(--art-line);
		display: block;
		margin-top: 9px;
	}
	.receipt > div {
		background: var(--inverse);
		color: var(--inverse-text);
		padding: 6px 2px;
		margin-top: 15px;
		text-align: center;
		font-size: 4px;
	}
	.stand {
		width: 35px;
		height: 33px;
		background: linear-gradient(var(--art-mid), var(--art-mid));
		margin: auto;
		transform: skewX(-8deg);
	}
	.stand-foot {
		height: 5px;
		width: 105px;
		background: var(--art-mid);
		margin: auto;
		border-radius: 50%;
	}
	.node {
		position: absolute;
		font: 6px var(--mono);
		border: 1px solid var(--art-mid);
		padding: 9px;
		background: var(--art-paper);
		z-index: 1;
	}
	.node b {
		padding-left: 15px;
	}
	.node-a {
		top: 65px;
		right: 25px;
		animation: node-pulse 4s ease-in-out infinite;
	}
	.node-b {
		bottom: 48px;
		left: 25px;
		animation: node-pulse 4s ease-in-out infinite -2s;
	}
	.pos-network::before {
		content: '';
		position: absolute;
		width: 165px;
		height: 105px;
		left: 75px;
		top: 90px;
		border-left: 1px dashed var(--art-mid);
		border-bottom: 1px dashed var(--art-mid);
		opacity: 0.5;
		animation: connection-fade 3s ease-in-out infinite;
	}
	@keyframes dashboard-float {
		50% {
			transform: perspective(700px) rotateY(-7deg) rotateX(8deg) rotateZ(-1deg) translateY(-7px);
		}
	}
	@keyframes chart-trace {
		45%,
		100% {
			stroke-dashoffset: 0;
		}
	}
	@keyframes donut-turn {
		to {
			transform: rotate(360deg);
		}
	}
	@keyframes row-pulse {
		50% {
			opacity: 0.42;
			transform: scaleX(0.76);
			transform-origin: left;
		}
	}
	@keyframes bar-breathe {
		to {
			transform: scaleY(0.72);
		}
	}
	@keyframes orbit-drift {
		to {
			transform: rotateX(50deg) rotateZ(335deg);
		}
	}
	@keyframes phone-back-float {
		50% {
			transform: rotate(-8deg) translate(-62px, -2px);
		}
	}
	@keyframes phone-front-float {
		50% {
			transform: rotate(6deg) translate(68px, 3px);
		}
	}
	@keyframes terminal-float {
		50% {
			transform: translateY(2px) rotate(-1deg);
		}
	}
	@keyframes product-ping {
		50% {
			transform: scale(0.72);
			opacity: 0.55;
		}
	}
	@keyframes receipt-in {
		50% {
			transform: translateY(-5px);
			box-shadow: 0 6px 0 #0000000d;
		}
	}
	@keyframes node-pulse {
		50% {
			transform: translateY(-5px);
			box-shadow: 0 0 0 5px #ffffff08;
		}
	}
	@keyframes connection-fade {
		50% {
			opacity: 0.15;
		}
	}
	@media (min-width: 1400px) {
		.visual {
			height: 380px;
		}
	}
	@media (max-width: 500px) {
		.visual {
			height: 300px;
		}
	}
</style>
