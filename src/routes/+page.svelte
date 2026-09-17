<script lang="ts">
	import { onMount } from 'svelte';
	import AppearanceControls from '$lib/components/AppearanceControls.svelte';
	import SystemGraphic from '$lib/components/SystemGraphic.svelte';
	import ProjectVisual from '$lib/components/ProjectVisual.svelte';
	import { profile, projects, experience } from '$lib/portfolio';
	let monogram: HTMLDivElement;
	const introText = 'I’m Gabriel Ivan, a software engineer turning complex problems into products that feel simple.';
	let typedIntro = $state('');
	onMount(() => {
		const media = window.matchMedia('(prefers-reduced-motion: reduce)');
		let typewriterTimer: ReturnType<typeof setTimeout> | undefined;
		const typeIntro = (index = 0) => {
			if (media.matches) {
				typedIntro = introText;
				return;
			}
			typedIntro = introText.slice(0, index);
			if (index < introText.length) typewriterTimer = setTimeout(() => typeIntro(index + 1), 22);
		};
		typeIntro();
		let scrollFrame = 0;
		const updateParallax = () => {
			scrollFrame = 0;
			const rect = monogram.getBoundingClientRect();
			const progress = media.matches
				? 0
				: Math.max(
						-1,
						Math.min(
							1,
							(window.innerHeight / 2 - rect.top - rect.height / 2) /
								(window.innerHeight / 2 + rect.height / 2)
						)
					);
			monogram.style.setProperty('--letter-shift', `${progress * -32}px`);
			monogram.style.setProperty('--grid-shift', `${progress * 16}px`);
		};
		const scheduleParallax = () => {
			if (!scrollFrame) scrollFrame = requestAnimationFrame(updateParallax);
		};
		window.addEventListener('scroll', scheduleParallax, { passive: true });
		window.addEventListener('resize', scheduleParallax);
		media.addEventListener('change', scheduleParallax);
		updateParallax();
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					if (!media.matches) {
						entry.target.animate(
							[
								{ opacity: 0.45, transform: 'translateY(14px)' },
								{ opacity: 1, transform: 'translateY(0)' }
							],
							{ duration: 550, easing: 'cubic-bezier(.2,.7,.3,1)' }
						);
					}
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.08 }
		);
		document
			.querySelectorAll('.project, .about, .job, .contact')
			.forEach((element) => observer.observe(element));
		return () => {
			observer.disconnect();
			cancelAnimationFrame(scrollFrame);
			clearTimeout(typewriterTimer);
			window.removeEventListener('scroll', scheduleParallax);
			window.removeEventListener('resize', scheduleParallax);
			media.removeEventListener('change', scheduleParallax);
		};
	});
</script>

<svelte:head>
	<title>Gabriel Ivan Setyaputra — Software Engineer</title>
	<meta
		name="description"
		content="Software engineer and technical leader building thoughtful web and mobile products. Explore Gabriel Ivan Setyaputra’s work at RADSoft and Grab."
	/>
	<meta property="og:title" content="Gabriel Ivan — Systems in Motion" />
	<meta
		property="og:description"
		content="Thoughtful interfaces. Resilient systems. Software engineering, from the foundation up."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>
<div class="site-shell" id="top">
	<header>
		<a class="wordmark" href="#top" aria-label="Gabriel Ivan home">gi<span>↗</span></a>
		<span class="header-title">GABRIEL IVAN<br /><span>SOFTWARE ENGINEER</span></span>
		<nav aria-label="Main navigation">
			<a href="#work">Work <span>01</span></a><a href="#about">About <span>02</span></a><a
				href="#contact">Contact <span>↗</span></a
			>
		</nav>
		<AppearanceControls />
	</header>
	<main id="main">
		<section class="hero" aria-labelledby="hero-title">
			<div class="hero-copy">
				<div class="eyebrow">OPEN TO WORK & NEW POSSIBILITIES</div>
				<h1 id="hero-title">Thoughtful<br />interfaces.<br /><span>Resilient systems.</span></h1>
				<p class="intro" aria-label={introText}>{typedIntro}<span class="type-cursor" aria-hidden="true"></span></p>
				<div class="hero-links">
					<a class="primary-link" href="#work">Explore selected work <span>↘</span></a><span
						class="small-note">5+ YEARS OF BUILDING WITH INTENT</span
					>
				</div>
			</div>
			<div class="hero-art"><SystemGraphic /></div>
		</section>
		<div class="hero-bottom">
			<span>BASED IN INDONESIA · WORKING BEYOND BORDERS</span><a href="#work"
				>SCROLL TO EXPLORE <span>↓</span></a
			>
		</div>
		<section class="work section" id="work" aria-labelledby="work-title">
			<div class="section-heading">
				<div>
					<span class="section-index">01 / SELECTED WORK</span>
					<h2 id="work-title">Built to make<br />a difference<span class="period">.</span></h2>
				</div>
				<p>
					A few things I’ve helped bring to life.<br />From first principles to everyday impact.
				</p>
			</div>
			<div class="project-list">
				{#each projects as project (project.number)}
					<article class="project">
						<div class="project-art"><ProjectVisual variant={project.variant} /></div>
						<div class="project-copy">
							<div class="project-meta">
								<span>{project.number} / {project.category}</span><span>{project.year}</span>
							</div>
							<div class="company">{project.company}</div>
							<h3>{project.name}</h3>
							<p class="project-description">{project.description}</p>
							<div class="tags">
								{#each project.tags as tag (tag)}<span>{tag}</span>{/each}
							</div>
							<div class="outcome">
								<strong>{project.outcome}</strong><span>{project.outcomeLabel}</span>
							</div>
							<details>
								<summary>Behind the build <span class="expand-icon">+</span></summary>
								<div class="project-details">
									<p>{project.context}</p>
									<ul>
										{#each project.contributions as contribution (contribution)}<li>
												{contribution}
											</li>{/each}
									</ul>
								</div>
							</details>
						</div>
					</article>
				{/each}
			</div>
		</section>
		<section class="about section" id="about" aria-labelledby="about-title">
			<div class="about-left">
				<span class="section-index">02 / THE PERSON BEHIND THE CODE</span>
				<h2 id="about-title">Curious by nature.<br />Engineer by craft.</h2>
				<div class="monogram" bind:this={monogram} aria-hidden="true">
					<div class="monogram-grid"></div>
					<div class="monogram-letters">g<span>i</span></div>
					<span class="monogram-cross">+</span><span class="monogram-label"
						>ALWAYS A WORK IN PROGRESS.</span
					>
				</div>
			</div>
			<div class="about-copy">
				<p class="about-lead">
					Good software is more than what you see.<br />It’s everything that makes it work.
				</p>
				<p>
					I’m Gabriel Ivan Setyaputra, a software engineer based in Tulungagung, Indonesia. Over the
					past 5+ years, I’ve built web and mobile products across consumer technology, fintech, and
					investment management.
				</p>
				<p>
					At Grab, I learned to build for scale. At RADSoft, I’m shaping a platform from its
					foundations—connecting frontend architecture, system design, and technical leadership.
				</p>
				<p>
					I care about clear interfaces, maintainable systems, and helping teams do their best work.
					Lately, I’m exploring how agentic AI workflows can make software delivery more thoughtful
					and productive.
				</p>
				<div class="expertise">
					<div>
						<span>01</span>
						<h3>Frontend & architecture</h3>
						<p>React · Next.js · TypeScript · Zustand</p>
					</div>
					<div>
						<span>02</span>
						<h3>Mobile & product</h3>
						<p>Flutter · Dart · Design systems</p>
					</div>
					<div>
						<span>03</span>
						<h3>Engineering & delivery</h3>
						<p>System design · Docker · CI/CD · Technical leadership</p>
					</div>
				</div>
			</div>
		</section>
		<section class="experience section" aria-labelledby="experience-title">
			<div class="section-heading">
				<div>
					<span class="section-index">THE JOURNEY SO FAR</span>
					<h2 id="experience-title">Always building forward.</h2>
				</div>
				<span class="small-note">2021 — NOW</span>
			</div>
			<div class="timeline">
				{#each experience as job (job.company)}<article class="job">
						<span class="job-period">{job.period}</span>
						<div>
							<h3>{job.company}</h3>
							<p>{job.description}</p>
						</div>
						<ul>
							{#each job.roles as role (role)}<li>{role}</li>{/each}
						</ul>
					</article>{/each}
			</div>
			<div class="credentials">
				<div>
					<span class="section-index">FOUNDATIONS</span>
					<h3>Universitas Tarumanagara</h3>
					<p>
						BTech, Computer Science · 2018 — 2022<br />GPA 3.60 · Tarumanagara Photography
						Association
					</p>
				</div>
				<div>
					<span class="section-index">CONTINUED LEARNING</span><a
						href="https://www.hackerrank.com/certificates/1d379963b3c1"
						target="_blank"
						rel="noreferrer">Frontend Developer (React) <span>HackerRank ↗</span></a
					><a
						href="https://freecodecamp.org/certification/fcc73de82c7-28f1-4b73-8ce0-f99826be980a/responsive-web-design"
						target="_blank"
						rel="noreferrer">Responsive Web Design <span>freeCodeCamp ↗</span></a
					>
					<p class="additional-cert">Advanced Data Structures in Java · Coursera</p>
				</div>
			</div>
		</section>
		<section class="contact" id="contact" aria-labelledby="contact-title">
			<svg class="contact-map" viewBox="0 0 560 320" fill="none" aria-hidden="true">
				<defs>
					<pattern id="map-grid" width="28" height="28" patternUnits="userSpaceOnUse">
						<path d="M28 0H0V28" stroke="currentColor" stroke-opacity=".15" />
					</pattern>
					<radialGradient id="map-glow">
						<stop stop-color="#83bcb0" stop-opacity=".18" />
						<stop offset="1" stop-color="#83bcb0" stop-opacity="0" />
					</radialGradient>
				</defs>
				<ellipse cx="320" cy="202" rx="235" ry="117" fill="url(#map-glow)" />
				<g transform="translate(10 60) skewX(-18) scale(1 .7)">
					<path d="M65 35H545V320H65Z" fill="url(#map-grid)" />
					<!-- Stylized Java coastline; the marker sits on the southern side of East Java. -->
					<path
						d="M68 105L92 92L121 111L151 110L175 123L204 119L229 135L263 134L287 143L310 137L334 150L359 142L383 156L412 149L438 170L468 168L489 193L480 208L452 197L430 205L405 194L382 195L357 182L331 185L309 174L284 179L259 168L234 169L211 153L189 157L164 140L143 142L123 125L97 128L76 117Z"
						fill="currentColor"
						fill-opacity=".05"
						stroke="currentColor"
						stroke-opacity=".55"
					/>
					<path
						d="M349 126L378 118L402 124L425 120L443 131L421 137L397 131L375 135Z"
						stroke="currentColor"
						stroke-opacity=".35"
					/>
					<path
						d="M120 113L144 141M204 124L210 151M284 143L280 173M335 151L330 182M383 158L382 191M434 171L427 198"
						stroke="currentColor"
						stroke-opacity=".2"
						stroke-dasharray="3 4"
					/>
				</g>
				<ellipse class="map-pulse" cx="321" cy="185" rx="27" ry="10" stroke="currentColor" />
				<ellipse cx="321" cy="185" rx="13" ry="5" stroke="currentColor" opacity=".5" />
				<path d="M321 182V131" stroke="currentColor" stroke-dasharray="2 4" />
				<path
					d="M321 139C318 134 310 127 310 121a11 11 0 0 1 22 0c0 6-8 13-11 18Z"
					fill="#1b2727"
					stroke="currentColor"
				/>
				<circle cx="321" cy="121" r="3" fill="currentColor" />
				<path d="M336 121H367L379 109H479" stroke="currentColor" opacity=".55" />
				<text
					x="381"
					y="101"
					fill="currentColor"
					font-family="monospace"
					font-size="10"
					letter-spacing="2">TULUNGAGUNG</text
				>
				<text
					x="381"
					y="126"
					fill="currentColor"
					opacity=".6"
					font-family="monospace"
					font-size="7"
					letter-spacing="1">EAST JAVA / INDONESIA</text
				>
			</svg>
			<div class="contact-top">
				<span class="section-index">03 / WHAT’S NEXT?</span><span class="availability"
					>AVAILABLE FOR THE RIGHT OPPORTUNITY</span
				>
			</div>
			<h2 id="contact-title">Great things start<br />with a conversation<span>.</span></h2>
			<div class="contact-bottom">
				<p>
					Have a team, a challenge, or an idea in mind?<br />Let’s build something that matters.
				</p>
				<a href="https://www.linkedin.com/in/ivansetya/" target="_blank" rel="noreferrer"
					>Let’s connect <span>↗</span></a
				>
			</div>
			<div class="contact-location">
				<span>{profile.location}</span><span>ON-SITE · HYBRID · REMOTE</span>
			</div>
		</section>
	</main>
	<footer>
		<span>© {new Date().getFullYear()} GABRIEL IVAN SETYAPUTRA</span><span
			>BUILT WITH INTENT. ALWAYS EVOLVING.</span
		><a href="#top">BACK TO TOP ↑</a>
	</footer>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}
	:global(:root) {
		font-family: Arial, Helvetica, sans-serif;
		color: var(--fg);
		background: var(--bg);
		font-synthesis: none;
		--mono: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
	}
	:global(body) {
		margin: 0;
	}
	:global(html) {
		scroll-behavior: smooth;
		scroll-padding-top: 35px;
	}
	:global(a) {
		color: inherit;
		text-decoration: none;
	}
	:global(button),
	:global(a),
	:global(summary) {
		-webkit-tap-highlight-color: transparent;
	}
	:global(a:focus-visible),
	:global(summary:focus-visible) {
		outline: 2px solid var(--fg);
		outline-offset: 6px;
	}
	:global(::selection) {
		background: var(--fg);
		color: var(--bg);
	}
	:global(p) {
		line-height: 1.7;
	}
	.site-shell {
		max-width: 1600px;
		margin: auto;
		padding: 0 64px;
	}
	.skip-link {
		position: fixed;
		top: -60px;
		left: 20px;
		z-index: 10;
		padding: 12px;
		background: var(--fg);
		color: var(--bg);
	}
	.skip-link:focus {
		top: 15px;
	}
	header {
		height: 108px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid var(--line);
	}
	.wordmark {
		font-weight: 800;
		font-size: 43px;
		letter-spacing: -5px;
		line-height: 1;
	}
	.wordmark > span {
		font-size: 24px;
		vertical-align: top;
		display: inline-block;
		margin: 4px 0 0 7px;
		letter-spacing: 0;
	}
	.header-title {
		font: 9px/1.65 var(--mono);
		letter-spacing: 0.07em;
		margin-left: 26px;
	}
	.header-title > span {
		color: var(--quiet);
	}
	nav {
		margin-left: auto;
		display: flex;
		gap: 38px;
	}
	nav > a {
		font-size: 12px;
	}
	nav > a > span {
		font: 8px var(--mono);
		color: var(--quiet);
		vertical-align: super;
		margin-left: 6px;
	}
	nav a:hover {
		opacity: 0.55;
	}
	.hero {
		min-height: 590px;
		display: grid;
		grid-template-columns: 1.08fr 1fr;
		align-items: center;
		padding: 55px 0 48px;
		gap: 12px;
		position: relative;
		isolation: isolate;
		overflow: hidden;
	}
	.hero::after {
		content: '';
		position: absolute;
		z-index: -1;
		inset: 0;
		background: linear-gradient(115deg, transparent 24%, var(--surface) 50%, transparent 74%);
		background-size: 220% 100%;
		opacity: 0.22;
		animation: ambient-sweep 16s ease-in-out infinite;
	}
	.hero-copy,
	.hero-art {
		position: relative;
		z-index: 1;
	}
	@keyframes ambient-sweep {
		50% {
			background-position: 100% 0;
		}
	}
	.eyebrow,
	.section-index {
		font: 9px var(--mono);
		letter-spacing: 0.09em;
	}
	.eyebrow {
		display: flex;
		align-items: center;
		gap: 9px;
	}
	.hero h1 {
		font-size: clamp(48px, 5.3vw, 82px);
		font-weight: 500;
		line-height: 1.045;
		letter-spacing: -0.067em;
		margin: 30px 0 24px;
	}
	.hero h1 > span {
		color: var(--muted);
	}
	.intro {
		font-size: 14px;
		color: var(--muted);
	}
	.type-cursor {
		display: inline-block;
		width: 1px;
		height: 1.1em;
		margin-left: 2px;
		vertical-align: -0.15em;
		background: currentColor;
		animation: blink 0.75s steps(1) infinite;
	}
	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
	.hero-links {
		display: flex;
		align-items: center;
		gap: 25px;
		margin-top: 31px;
	}
	.primary-link {
		font-size: 11px;
		border-bottom: 1px solid var(--fg);
		padding: 0 0 9px;
		display: flex;
		gap: 27px;
		white-space: nowrap;
	}
	.primary-link > span {
		font-size: 17px;
	}
	.small-note {
		font: 8px/1.7 var(--mono);
		letter-spacing: 0.04em;
		color: var(--quiet);
	}
	.hero-links > .small-note {
		max-width: 112px;
	}
	.hero-art {
		min-width: 0;
		margin-right: -18px;
	}
	.hero-bottom {
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		display: flex;
		justify-content: space-between;
		padding: 18px 0;
		font: 8px var(--mono);
		letter-spacing: 0.06em;
		color: var(--muted);
	}
	.hero-bottom a > span {
		margin-left: 30px;
		font-size: 12px;
	}
	.section {
		padding: 90px 0;
	}
	.section-heading {
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 30px;
		margin-bottom: 45px;
	}
	h2 {
		font-size: clamp(32px, 3.2vw, 49px);
		line-height: 1.1;
		letter-spacing: -0.05em;
		font-weight: 500;
		margin: 22px 0 0;
	}
	.section-heading > p {
		font-size: 12px;
		color: var(--muted);
		margin-bottom: 3px;
	}
	.period {
		color: var(--quiet);
	}
	.project {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 55px;
		padding: 35px 0;
		border-top: 1px solid var(--line);
		align-items: start;
	}
	.project:first-child {
		padding-top: 0;
		border: 0;
	}
	.project:last-child {
		padding-bottom: 0;
	}
	.project-meta {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		font: 7px/1.5 var(--mono);
		letter-spacing: 0.03em;
		color: var(--muted);
	}
	.company {
		font-size: 11px;
		margin: 20px 0 10px;
	}
	.project h3 {
		font-size: 28px;
		line-height: 1.13;
		font-weight: 500;
		letter-spacing: -0.04em;
		white-space: pre-line;
		margin: 0;
	}
	.project-description {
		font-size: 12px;
		color: var(--muted);
		margin: 15px 0;
		max-width: 390px;
	}
	.tags {
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
	}
	.tags > span {
		font: 8px var(--mono);
		padding: 5px 8px;
		border: 1px solid var(--line);
		border-radius: 2px;
		color: var(--muted);
	}
	.outcome {
		display: flex;
		align-items: center;
		gap: 20px;
		margin: 22px 0;
	}
	.outcome strong {
		font-size: 25px;
		font-weight: 500;
		letter-spacing: -1px;
	}
	.outcome > span {
		font: 7px/1.6 var(--mono);
		max-width: 115px;
		color: var(--quiet);
		letter-spacing: 0.04em;
	}
	details {
		border-top: 1px solid var(--line);
	}
	summary {
		font-size: 11px;
		list-style: none;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		padding: 12px 0;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	.expand-icon {
		font-size: 18px;
		font-weight: 300;
		line-height: 0.8;
	}
	details[open] .expand-icon {
		transform: rotate(45deg);
	}
	.project-details {
		font-size: 12px;
		color: var(--muted);
	}
	.project-details ul {
		padding-left: 17px;
	}
	.project-details li {
		line-height: 1.7;
		margin: 10px 0;
	}
	.about {
		border-top: 1px solid var(--line);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 55px;
	}
	.about h2 {
		font-size: 39px;
	}
	.about-copy > p {
		font-size: 13px;
		color: var(--muted);
		margin: 0 0 18px;
	}
	.about-copy > .about-lead {
		font-size: 21px;
		color: var(--fg);
		line-height: 1.4;
		letter-spacing: -0.5px;
		margin-bottom: 25px;
	}
	.monogram {
		overflow: hidden;
		isolation: isolate;
		height: 260px;
		width: 85%;
		position: relative;
		margin-top: 45px;
		border: 1px solid var(--line);
		font-size: 175px;
		font-weight: 700;
		letter-spacing: -25px;
		line-height: 220px;
		text-align: center;
	}
	.monogram-grid {
		position: absolute;
		inset: -40px;
		z-index: -1;
		transform: translateY(var(--grid-shift, 0px));
		background:
			repeating-linear-gradient(
				0deg,
				transparent,
				transparent 25px,
				var(--line) 25px,
				var(--line) 26px
			),
			repeating-linear-gradient(
				90deg,
				transparent,
				transparent 25px,
				var(--line) 25px,
				var(--line) 26px
			);
	}
	.monogram-letters {
		transform: translateY(var(--letter-shift, 0px));
	}
	.monogram-letters > span {
		font-family: Georgia, serif;
		font-style: italic;
		font-weight: 400;
		color: var(--muted);
	}
	.monogram-cross {
		position: absolute;
		top: 8px;
		right: 15px;
		font: 20px var(--mono);
		letter-spacing: 0;
		color: var(--quiet);
	}
	.monogram-label {
		position: absolute;
		bottom: 15px;
		left: 18px;
		font: 7px var(--mono);
		letter-spacing: 0.1em;
		color: var(--quiet);
	}
	.expertise {
		margin-top: 28px;
	}
	.expertise > div {
		border-top: 1px solid var(--line);
		padding: 15px 0 13px;
		position: relative;
		padding-left: 32px;
	}
	.expertise > div > span {
		position: absolute;
		left: 0;
		top: 17px;
		font: 8px var(--mono);
		color: var(--quiet);
	}
	.expertise h3 {
		font-size: 12px;
		font-weight: 500;
		margin: 0;
	}
	.expertise p {
		font: 9px/1.7 var(--mono);
		color: var(--quiet);
		margin: 7px 0 0;
	}
	.experience {
		border-top: 1px solid var(--line);
	}
	.experience .section-heading {
		margin-bottom: 37px;
	}
	.experience h2 {
		font-size: 38px;
	}
	.job {
		display: grid;
		grid-template-columns: 1fr 1.65fr 1.8fr;
		gap: 30px;
		border-top: 1px solid var(--line);
		padding: 25px 0;
	}
	.job-period {
		font: 8px/1.7 var(--mono);
		color: var(--quiet);
	}
	.job h3 {
		font-size: 16px;
		font-weight: 500;
		letter-spacing: -0.3px;
		margin: 0 0 8px;
	}
	.job p {
		font-size: 11px;
		color: var(--quiet);
		margin: 0;
		max-width: 290px;
	}
	.job ul {
		list-style: none;
		padding: 0;
		margin: 0;
		font-size: 10px;
		line-height: 1.8;
		color: var(--muted);
	}
	.job li + li {
		margin-top: 5px;
	}
	.credentials {
		border-top: 1px solid var(--line);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 55px;
		padding-top: 35px;
		margin-top: 15px;
	}
	.credentials h3 {
		font-size: 14px;
		font-weight: 500;
		margin: 22px 0 8px;
	}
	.credentials p {
		font-size: 11px;
		color: var(--quiet);
		margin: 0;
	}
	.credentials a {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid var(--line);
		font-size: 11px;
		padding: 14px 0;
	}
	.credentials a:first-of-type {
		margin-top: 9px;
	}
	.credentials a > span {
		color: var(--quiet);
		font: 8px var(--mono);
	}
	.credentials .additional-cert {
		margin-top: 13px;
		font-size: 10px;
	}
	.contact {
		position: relative;
		isolation: isolate;
		overflow: hidden;
		background: var(--contact-bg);
		color: var(--contact-fg);
		padding: 40px 43px 24px;
		margin: 5px 0 0;
	}
	.contact-map {
		position: absolute;
		z-index: -1;
		pointer-events: none;
		right: -15px;
		bottom: 35px;
		width: min(55%, 600px);
		color: #83bcb0;
		opacity: 0.55;
	}
	.map-pulse {
		transform-box: fill-box;
		transform-origin: center;
		animation: map-beacon 4s ease-out infinite;
	}
	@keyframes map-beacon {
		from {
			transform: scale(0.6);
			opacity: 0.8;
		}
		to {
			transform: scale(1.8);
			opacity: 0;
		}
	}
	@media (max-width: 720px) {
		.contact-map {
			width: 95%;
			right: -65px;
			opacity: 0.3;
		}
	}
	.contact-top {
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}
	.contact-top .section-index {
		color: var(--contact-muted);
	}
	.availability {
		font: 7px var(--mono);
		letter-spacing: 0.05em;
		color: var(--contact-muted);
	}
	.contact h2 {
		font-size: clamp(40px, 5.3vw, 74px);
		letter-spacing: -0.055em;
		line-height: 1.07;
		margin-top: 49px;
	}
	.contact h2 > span {
		color: var(--quiet);
	}
	.contact-bottom {
		display: flex;
		justify-content: space-between;
		align-items: end;
		margin: 25px 0 40px;
		gap: 25px;
	}
	.contact-bottom > p {
		font-size: 12px;
		color: var(--contact-muted);
		margin: 0;
	}
	.contact-bottom > a {
		font-size: 20px;
		border-bottom: 1px solid var(--quiet);
		padding-bottom: 12px;
		min-width: 230px;
		display: flex;
		justify-content: space-between;
	}
	.contact-bottom > a > span {
		font-size: 27px;
		line-height: 0.8;
	}
	.contact-location {
		border-top: 1px solid var(--contact-line);
		padding-top: 18px;
		display: flex;
		justify-content: space-between;
		font: 8px var(--mono);
		color: var(--contact-muted);
	}
	.contact :global(a:focus-visible) {
		outline-color: var(--bg);
	}
	footer {
		display: flex;
		justify-content: space-between;
		gap: 20px;
		padding: 28px 0 30px;
		font: 7px var(--mono);
		letter-spacing: 0.04em;
		color: var(--quiet);
	}
	@media (min-width: 1400px) {
		.hero {
			min-height: 690px;
		}
		.project h3 {
			font-size: 34px;
		}
		.project-description {
			font-size: 14px;
		}
		.project-copy {
			padding-top: 8px;
		}
		.outcome {
			margin: 28px 0;
		}
		.project {
			gap: 70px;
		}
		.hero-links {
			margin-top: 40px;
		}
	}
	@media (max-width: 1000px) {
		.site-shell {
			padding: 0 35px;
		}
		.hero {
			min-height: 520px;
		}
		.hero h1 {
			font-size: 54px;
		}
		.hero-art {
			margin-left: -30px;
		}
		.hero-links {
			gap: 15px;
		}
		.hero-links > .small-note {
			font-size: 7px;
		}
		.project {
			gap: 30px;
		}
		.project-meta {
			font-size: 6px;
		}
		.project h3 {
			font-size: 25px;
		}
		.about {
			gap: 30px;
		}
		.about h2 {
			font-size: 32px;
		}
		.job {
			grid-template-columns: 0.8fr 1.4fr 1.5fr;
			gap: 20px;
		}
		.section {
			padding: 65px 0;
		}
	}
	@media (max-width: 720px) {
		.site-shell {
			padding: 0 22px;
		}
		header {
			height: 85px;
		}
		.header-title {
			font-size: 7px;
			margin-left: 15px;
		}
		.wordmark {
			font-size: 36px;
		}
		.wordmark > span {
			font-size: 18px;
		}
		nav {
			gap: 18px;
		}
		nav > a {
			font-size: 10px;
		}
		nav > a > span {
			display: none;
		}
		.hero {
			grid-template-columns: 1fr;
			gap: 0;
			padding: 48px 0 25px;
		}
		.hero h1 {
			font-size: clamp(45px, 9.5vw, 66px);
			margin: 25px 0 22px;
		}
		.hero-art {
			max-width: 480px;
			width: 100%;
			margin: 10px auto 0;
		}
		.hero-links {
			gap: 25px;
		}
		.hero-links > .small-note {
			font-size: 8px;
		}
		.intro {
			font-size: 13px;
		}
		.eyebrow {
			font-size: 8px;
		}
		.hero-bottom {
			font-size: 6px;
			gap: 18px;
			line-height: 1.7;
		}
		.hero-bottom a {
			white-space: nowrap;
		}
		.hero-bottom a > span {
			margin-left: 10px;
		}
		.section-heading {
			align-items: start;
			flex-direction: column;
			gap: 18px;
			margin-bottom: 30px;
		}
		h2 {
			font-size: 37px;
		}
		.section-heading > p {
			margin: 0;
		}
		.project {
			grid-template-columns: 1fr;
			gap: 25px;
			padding: 30px 0;
		}
		.project-meta {
			font-size: 7px;
		}
		.project h3 {
			font-size: 30px;
		}
		.project-description {
			font-size: 13px;
			max-width: none;
		}
		.company {
			margin-top: 17px;
		}
		.outcome {
			margin: 23px 0;
		}
		.project-details {
			font-size: 13px;
		}
		.project summary {
			font-size: 12px;
			padding: 15px 0;
		}
		.about {
			grid-template-columns: 1fr;
			gap: 30px;
		}
		.about h2 {
			font-size: 37px;
		}
		.monogram {
			display: none;
		}
		.about-copy > .about-lead {
			font-size: 22px;
		}
		.about-copy > p {
			font-size: 14px;
		}
		.expertise h3 {
			font-size: 14px;
		}
		.expertise p {
			font-size: 10px;
		}
		.experience h2 {
			font-size: 34px;
		}
		.experience .section-heading {
			gap: 12px;
		}
		.job {
			grid-template-columns: 1fr;
			gap: 12px;
			padding: 25px 0;
		}
		.job h3 {
			font-size: 19px;
		}
		.job p {
			max-width: none;
			font-size: 12px;
		}
		.job ul {
			font-size: 11px;
		}
		.job-period {
			font-size: 9px;
		}
		.credentials {
			grid-template-columns: 1fr;
			gap: 30px;
		}
		.credentials p {
			font-size: 12px;
		}
		.contact {
			padding: 27px 24px 20px;
		}
		.contact-top {
			flex-direction: column;
			gap: 17px;
		}
		.availability {
			font-size: 6px;
		}
		.contact h2 {
			font-size: 43px;
			margin-top: 35px;
		}
		.contact-bottom {
			flex-direction: column;
			align-items: start;
			gap: 27px;
		}
		.contact-bottom > a {
			font-size: 19px;
			width: 100%;
		}
		.contact-location {
			font-size: 6px;
			gap: 10px;
		}
		footer {
			flex-wrap: wrap;
			font-size: 6px;
			gap: 15px;
		}
		footer > span:nth-child(2) {
			display: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		:global(html) {
			scroll-behavior: auto;
		}
		.type-cursor {
			animation: none;
		}
	}

	.hero-copy > * {
		animation: hero-enter 0.7s both cubic-bezier(0.2, 0.7, 0.3, 1);
	}
	.hero-copy > :nth-child(2) {
		animation-delay: 0.08s;
	}
	.hero-copy > :nth-child(3) {
		animation-delay: 0.16s;
	}
	.hero-copy > :nth-child(4) {
		animation-delay: 0.24s;
	}
	.hero-art {
		animation: hero-enter 1s both 0.12s;
	}
	.primary-link > span,
	.contact-bottom > a > span {
		transition: transform 0.25s ease;
	}
	.primary-link:hover > span {
		transform: translate(3px, 3px);
	}
	.contact-bottom > a:hover > span {
		transform: translate(3px, -3px);
	}
	.expand-icon {
		transition: transform 0.2s ease;
	}
	.contact .contact-top .section-index,
	.contact .contact-bottom p,
	.contact .contact-location {
		color: var(--contact-muted);
	}
	.contact-bottom > a {
		border-color: var(--contact-line);
	}
	@keyframes hero-enter {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	:global(html[data-motion='paused']) .hero-copy > *,
	:global(html[data-motion='paused']) .hero-art {
		animation: none;
	}
	@media (max-width: 720px) {
		.header-title {
			display: none;
		}
		nav {
			gap: 16px;
		}
		.hero-art {
			margin-top: 25px;
		}
	}
</style>
