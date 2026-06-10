document.addEventListener('DOMContentLoaded', function(){
	// Mobile nav toggle
	const navToggle = document.getElementById('nav-toggle');
	const nav = document.getElementById('nav');
	if(navToggle && nav){
		navToggle.addEventListener('click', ()=>{
			const isVisible = getComputedStyle(nav).display !== 'none';
			nav.style.display = isVisible ? 'none' : 'flex';
		});
	}

	// Set year in footer
	const yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = new Date().getFullYear();

	// Simple contact form handling (no backend)
	const form = document.getElementById('contact-form');
	const status = document.getElementById('form-status');
	if(form){
		form.addEventListener('submit', (e)=>{
			e.preventDefault();
			if(status) status.textContent = 'Sending…';
			// Simulate async send
			setTimeout(()=>{
				if(status) status.textContent = 'Message sent — thank you!';
				form.reset();
			}, 800);
		});
	}
});

// Contact widget behavior
document.addEventListener('DOMContentLoaded', function(){
	const toggle = document.getElementById('contact-widget-toggle');
	const widget = document.getElementById('contact-widget');
	const close = document.getElementById('cw-close');
	const openLink = document.getElementById('open-contact');
	const form = document.getElementById('cw-form');
	const status = document.getElementById('cw-status');

 

	function openWidget(){
		if(widget) widget.setAttribute('aria-hidden','false');
	}
	function closeWidget(){
		if(widget) widget.setAttribute('aria-hidden','true');
	}

	if(toggle) toggle.addEventListener('click', openWidget);
	if(openLink) openLink.addEventListener('click', (e)=>{ e.preventDefault(); openWidget(); });
	if(close) close.addEventListener('click', closeWidget);


});

// Video modal / carousel logic
document.addEventListener('DOMContentLoaded', function(){
	const thumbs = Array.from(document.querySelectorAll('.thumb'));
	const modal = document.getElementById('video-modal');
	const player = document.getElementById('project-player');
	const btnPrev = document.getElementById('vm-prev');
	const btnNext = document.getElementById('vm-next');
	const closeTargets = document.querySelectorAll('[data-action="close"]');

	if(!modal || !player || thumbs.length === 0) return;

	const videos = thumbs.map(t => t.dataset.video).filter(Boolean);
	let idx = 0;
	let intervalId = null;
	const AUTO_MS = 3500;

	function openAt(i){
		idx = i % videos.length;
		player.src = videos[idx];
		player.play().catch(()=>{});
		modal.setAttribute('aria-hidden','false');
		startAuto();
	}

	function closeModal(){
		modal.setAttribute('aria-hidden','true');
		stopAuto();
		player.pause();
		player.removeAttribute('src');
		player.load();
	}

	function next(){ openAt((idx+1) % videos.length); }
	function prev(){ openAt((idx-1+videos.length) % videos.length); }

	function startAuto(){ stopAuto(); intervalId = setInterval(()=>{ next(); }, AUTO_MS); }
	function stopAuto(){ if(intervalId) { clearInterval(intervalId); intervalId = null; } }

	thumbs.forEach((t,i)=> t.addEventListener('click', ()=> openAt(i)));
	if(btnNext) btnNext.addEventListener('click', (e)=>{ e.stopPropagation(); next(); });
	if(btnPrev) btnPrev.addEventListener('click', (e)=>{ e.stopPropagation(); prev(); });
	closeTargets.forEach(el=>el.addEventListener('click', ()=> closeModal()));

	// Pause auto-advance while hovering controls or video
	player.addEventListener('mouseenter', stopAuto);
	player.addEventListener('mouseleave', startAuto);
	modal.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });
});




