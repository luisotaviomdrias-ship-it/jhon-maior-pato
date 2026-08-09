/* ════════════════════════════════════════════
   PROJETO PATO — main.js
   Tudo em Vanilla JS. Zero dependências. 100% zoeira.
   ════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ────────────── DUCK GENERATOR (SVG) ────────────── */

  const DUCK_COLORS = {
    body: "#ffd500",
    bodyDark: "#e6b800",
    bodyLight: "#ffe95e",
    beak: "#ff8800",
    beakDark: "#e67a00",
    eye: "#1a1606",
    wing: "#f0c400",
    wingDark: "#d9b000",
    blush: "#ffb86b"
  };

  /**
   * Build a cute cartoon duck SVG.
   * opts: { crown, crying, celebrating, confidential, baby, flip, mood }
   */
  function duckSVG(opts = {}) {
    const {
      crown = false,
      crying = false,
      celebrating = false,
      confidential = false,
      baby = false,
      flip = false,
      mood = null
    } = opts;

    const C = DUCK_COLORS;
    const s = baby ? 0.55 : 1;

    // scale helper
    const tr = `translate(100 90) scale(${s})` + (flip ? " scale(-1 1)" : "");

    // expressions
    let eye, mouth = "";
    if (crying) {
      eye = `<g>
        <circle cx="26" cy="-22" r="5" fill="${C.eye}"/>
        <circle cx="27.5" cy="-23.5" r="1.6" fill="#fff"/>
        <path d="M30 -16 q5 6 3 14 q-2 -2 -3 -4" stroke="#7cc4ff" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <path d="M20 -16 q-4 5 -2 12 q2 -2 3 -4" stroke="#7cc4ff" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
      </g>`;
      mouth = `<path d="M14 2 q8 5 16 0" stroke="${C.eye}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
    } else if (celebrating) {
      eye = `<g>
        <circle cx="26" cy="-22" r="5" fill="${C.eye}"/>
        <circle cx="27.5" cy="-23.5" r="1.6" fill="#fff"/>
        <path d="M18 -26 q2 -5 6 -3" stroke="${C.eye}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <path d="M30 -28 q-1 -5 -5 -4" stroke="${C.eye}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      </g>`;
      mouth = `<path d="M14 2 q8 6 16 0" stroke="${C.eye}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
    } else {
      eye = `<g>
        <circle cx="26" cy="-22" r="5.5" fill="${C.eye}"/>
        <circle cx="28" cy="-24" r="1.8" fill="#fff"/>
      </g>`;
      mouth = `<path d="M16 2 q8 4 14 0" stroke="${C.eye}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
    }

    const crownSvg = crown ? `
      <g transform="translate(-12 -58) rotate(-4)">
        <path d="M0 0 L8 -34 L20 -16 L34 -38 L44 0 Z" fill="url(#cg)"/>
        <rect x="0" y="0" width="44" height="9" rx="3" fill="url(#cr)"/>
        <circle cx="8" cy="-34" r="4" fill="#fff"/>
        <circle cx="34" cy="-38" r="4" fill="#fff"/>
        <circle cx="22" cy="-10" r="4" fill="none" stroke="#fff" stroke-width="1.6"/>
      </g>` : "";

    const confettiBand = confidential ? `
      <rect x="-38" y="34" width="80" height="12" rx="4" transform="rotate(-14 2 40)" fill="#1a1606" opacity="0.85"/>
      <text x="2" y="43.5" text-anchor="middle" font-size="8" font-family="Poppins, sans-serif" font-weight="700" fill="#ffd500" transform="rotate(-14 2 40)">CONFIDENCIAL</text>` : "";

    const defs = `
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${C.bodyLight}"/>
          <stop offset="100%" stop-color="${C.body}"/>
        </linearGradient>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffe95e"/>
          <stop offset="100%" stop-color="#ffb300"/>
        </linearGradient>
        <linearGradient id="cr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ff9d00"/>
          <stop offset="100%" stop-color="#ff5f00"/>
        </linearGradient>
      </defs>`;

    return `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${mood || "pato desenhado em SVG"}">
      ${defs}
      <g transform="${tr}">
        <title>pato</title>
        <!-- body -->
        <ellipse cx="8" cy="40" rx="52" ry="40" fill="url(#bg)"/>
        <!-- tail feathers -->
        <path d="M-42 18 q-20 -2 -16 16 q-14 4 -6 20 l24 -6 Z" fill="${C.body}"/>
        <path d="M-40 26 q-16 4 -12 18" stroke="${C.bodyDark}" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.5"/>
        <!-- wing -->
        <ellipse cx="0" cy="42" rx="30" ry="20" fill="${C.wing}" transform="rotate(-6 0 42)"/>
        <path d="M-18 40 q8 6 18 2" stroke="${C.wingDark}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
        <!-- belly -->
        <ellipse cx="20" cy="52" rx="26" ry="20" fill="#fff7dd" opacity="0.55"/>
        <!-- feet -->
        <g fill="${C.beak}">
          <ellipse cx="-6" cy="74" rx="14" ry="5" transform="rotate(-12 -6 74)"/>
          <ellipse cx="16" cy="76" rx="14" ry="5" transform="rotate(8 16 76)"/>
        </g>
        <!-- neck + head -->
        <path d="M34 44 q22 -8 28 -34 q4 -24 22 -20 q10 -8 8 10 q-2 22 -22 30 l-16 12 Z" fill="url(#bg)"/>
        <circle cx="58" cy="-30" r="30" fill="url(#bg)"/>
        <!-- beak -->
        <g>
          <path d="M86 -28 q20 -2 14 10 q10 8 -12 10 l-6 -4 q-4 -8 -8 -12 Z" fill="${C.beak}"/>
          <path d="M86 -18 q18 0 22 -2" stroke="${C.beakDark}" stroke-width="2" fill="none" stroke-linecap="round"/>
        </g>
        <!-- expression -->
        ${eye}
        ${mouth}
        <!-- blush -->
        <ellipse cx="40" cy="-12" rx="5.5" ry="3.5" fill="${C.blush}" opacity="0.6"/>
        <!-- crown -->
        ${crownSvg}
        <!-- confidential band -->
        ${confettiBand}
      </g>
    </svg>`;
  }

  const DUCK_DEFAULT = { width: 160 };
  function renderDuck(container, opts) {
    if (!container) return;
    container.innerHTML = duckSVG(opts);
  }

  /* ────────────── CONFETTI ENGINE ────────────── */

  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  const COLORS = ["#ffd500", "#ff8800", "#ff5f00", "#ffffff", "#ffe95e"];
  let particles = [];
  let confettiRunning = false;

  function sizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  sizeCanvas();
  window.addEventListener("resize", sizeCanvas);

  class Particle {
    constructor(x, y, vx, vy) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.w = Math.random() * 9 + 5;
      this.h = Math.random() * 6 + 4;
      this.rot = Math.random() * Math.PI * 2;
      this.vr = (Math.random() - 0.5) * 0.3;
      this.color = COLORS[(Math.random() * COLORS.length) | 0];
      this.shape = Math.random() < 0.75 ? "rect" : "circle";
      this.duck = Math.random() < 0.12;
      this.life = 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.14;
      this.vx *= 0.992;
      this.rot += this.vr;
      this.life -= 0.007;
    }
    draw() {
      if (this.duck) {
        ctx.font = `${this.w * 1.4}px serif`;
        ctx.fillText("🦆", this.x, this.y);
        return;
      }
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = Math.max(this.life, 0);
      ctx.fillStyle = this.color;
      if (this.shape === "rect") {
        ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.w / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function confettiLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter((p) => p.life > 0 && p.y < canvas.height + 40);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    if (particles.length > 0 || confettiRunning) {
      requestAnimationFrame(confettiLoop);
    }
  }

  function burst(x, y, count = 90) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      particles.push(new Particle(
        x, y,
        Math.cos(angle) * speed,
        Math.sin(angle) * speed - 4
      ));
    }
    if (!confettiRunning) {
      confettiRunning = true;
      requestAnimationFrame(confettiLoop);
    }
  }

  function burstAtPoint(ev) {
    burst(ev.clientX, ev.clientY, 40);
  }

  /* ────────────── REVEAL ON SCROLL ────────────── */

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.setProperty("--d", `${(i % 4) * 0.08}s`);
    revealObserver.observe(el);
  });

  /* ────────────── ANIMATED COUNTERS ────────────── */

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        counterObserver.unobserve(el);
        const target = parseInt(el.dataset.target, 10);
        const text = el.dataset.text;
        if (text !== undefined) {
          el.textContent = text;
          el.classList.add("pulse-once");
          return;
        }
        const duration = 1200;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased);
          if (p < 1) requestAnimationFrame(tick);
          else el.classList.add("pulse-once");
        }
        requestAnimationFrame(tick);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll(".count").forEach((el) => counterObserver.observe(el));

  // small pulse on counted number
  const style = document.createElement("style");
  style.textContent = `
    .pulse-once { animation: numPulse 0.5s cubic-bezier(0.34,1.56,0.64,1); }
    @keyframes numPulse { 0% { transform: scale(1); } 40% { transform: scale(1.35); color: var(--orange); } 100% { transform: scale(1); } }
  `;
  document.head.appendChild(style);

  /* ────────────── INITIAL DUCK RENDERS ────────────── */

  renderDuck(document.getElementById("hero-duck"), { crown: true, celebrating: true, mood: "Jhon usando coroa" });

  document.querySelectorAll("[data-duck]").forEach((node) => {
    const type = node.dataset.duck;
    if (type === "crying") renderDuck(node, { crying: true, mood: "pato chorando" });
    if (type === "crying-2") renderDuck(node, { crying: true, flip: true, mood: "pato chorando de novo" });
    if (type === "confidential") renderDuck(node, { confidential: true, mood: "pato confidencial" });
  });

  renderDuck(document.getElementById("qi-duck"), { mood: "pato científico" });
  renderDuck(document.getElementById("stage-duck"), { mood: "pato em quarentena" });
  renderDuck(document.getElementById("finale-duck"), { crown: true, celebrating: true, mood: "pato final" });

  // finale duckies
  const finaleDuckies = document.getElementById("finale-duckies");
  const finaleCount = window.innerWidth < 560 ? 5 : 8;
  for (let i = 0; i < finaleCount; i++) {
    const wrap = document.createElement("div");
    wrap.className = "baby";
    wrap.innerHTML = duckSVG({ celebrating: true, flip: i % 2 === 1, mood: "pato comemorando" });
    finaleDuckies.appendChild(wrap);
  }

  /* ────────────── SMOOTH SCROLL (hero button) ────────────── */

  document.getElementById("btn-historia").addEventListener("click", () => {
    const target = document.getElementById("historia");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ────────────── QI BUTTON ────────────── */

  const btnQi = document.getElementById("btn-qi");
  const loadingEl = document.getElementById("qi-loading");
  const loadingText = document.getElementById("qi-loading-text");
  const errorEl = document.getElementById("qi-error");
  const qiFill = document.getElementById("qi-fill");
  const qiMarker = document.getElementById("qi-marker");
  const qiValue = document.getElementById("qi-value");
  const qiDuck = document.getElementById("qi-duck");

  const loadingMessages = [
    "Processando neurônios...",
    "Contando os patinhos...",
    "Consultando a Universidade dos Patos...",
    "Procurando sinais de QI...",
    "Encontramos algo! Era um pato.",
    "Expandindo a busca... para nada.",
    "Chamando reforços (não adianta)..."
  ];

  let qiBusy = false;

  btnQi.addEventListener("click", () => {
    if (qiBusy) return;
    qiBusy = true;
    errorEl.hidden = true;
    loadingEl.hidden = false;
    qiFill.style.width = "2%";
    qiMarker.style.left = "2%";
    qiValue.textContent = "0";
    qiDuck.classList.remove("qi-duck-shake");

    let msgIdx = 0;
    loadingText.textContent = loadingMessages[0];
    const msgTimer = setInterval(() => {
      msgIdx = (msgIdx + 1) % loadingMessages.length;
      loadingText.textContent = loadingMessages[msgIdx];
      qiValue.textContent = (Math.random() * 9).toFixed(0);
    }, 620);

    setTimeout(() => {
      clearInterval(msgTimer);
      qiFill.style.width = "2%";
      qiMarker.style.left = "2%";
      qiValue.textContent = "2";
      qiDuck.classList.add("qi-duck-shake");
      setTimeout(() => qiDuck.classList.remove("qi-duck-shake"), 450);
      burst(window.innerWidth / 2, window.innerHeight / 3, 30);

      loadingEl.hidden = true;
      errorEl.hidden = false;
      burstAtPoint({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 + 100 });
      qiBusy = false;
    }, 3800);
  });

  /* ────────────── MODO PATO ────────────── */

  const btnDuck = document.getElementById("btn-duck");
  const flyingDuck = document.getElementById("flying-duck");
  const duckAlert = document.getElementById("duck-alert");
  const babyArea = document.getElementById("baby-area");
  const stageDuck = document.getElementById("stage-duck");
  const stage = document.getElementById("duck-stage");

  let duckBusy = false;

  function quack() {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      const ac = new AC();
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(240, ac.currentTime);
      osc.frequency.setValueAtTime(520, ac.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.24);
      osc.connect(gain).connect(ac.destination);
      osc.start();
      osc.stop(ac.currentTime + 0.26);
      setTimeout(() => ac.close(), 500);
    } catch (e) { /* sem áudio, sem problema */ }
  }

  function spawnBabies() {
    babyArea.innerHTML = "";
    const count = 4 + Math.floor(Math.random() * 4);
    for (let i = 0; i < count; i++) {
      const wrap = document.createElement("div");
      wrap.className = "baby";
      wrap.innerHTML = duckSVG({ baby: true, flip: i % 2 === 1, mood: "patinho filhote" });
      babyArea.appendChild(wrap);
    }
  }

  btnDuck.addEventListener("click", () => {
    if (duckBusy) return;
    duckBusy = true;
    duckAlert.hidden = true;

    stageDuck.classList.add("cool");
    setTimeout(() => stageDuck.classList.remove("cool"), 900);

    // fly the duck across the screen
    flyingDuck.hidden = false;
    flyingDuck.innerHTML = duckSVG({ crown: true, celebrating: true, mood: "pato solto voando" });
    flyingDuck.classList.add("flying", "trail");
    quack();

    const duckPos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    setTimeout(() => {
      flyingDuck.classList.remove("flying", "trail");
      flyingDuck.hidden = true;
      spawnBabies();
      duckAlert.hidden = false;
      burst(duckPos.x, duckPos.y, 120);
      burst(duckPos.x + 120, duckPos.y - 60, 60);
      setTimeout(() => { duckBusy = false; }, 200);
    }, 1700);

    const rect = stage.getBoundingClientRect();
    burst(rect.left + rect.width / 2, rect.top + 60, 30);
  });

  /* ────────────── CELEBRATE AGAIN ────────────── */

  document.getElementById("btn-celebrate").addEventListener("click", () => {
    burst(window.innerWidth / 2, window.innerHeight / 2.4, 160);
    setTimeout(() => burst(window.innerWidth * 0.25, window.innerHeight * 0.6, 80), 200);
    setTimeout(() => burst(window.innerWidth * 0.75, window.innerHeight * 0.6, 80), 400);
  });

  /* ────────────── click confetti on finale + hero ────────────── */

  document.getElementById("conclusao").addEventListener("click", (ev) => {
    if (ev.target.tagName === "BUTTON") return;
    burstAtPoint(ev);
  });

  /* ────────────── celebrate on arrival at finale (once) ────────────── */

  const finaleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        burst(entry.boundingClientRect.left + entry.boundingClientRect.width / 2,
              entry.boundingClientRect.top + 80, 70);
        finaleObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  finaleObserver.observe(document.getElementById("conclusao"));

  /* ────────────── expose duck generator (debug/parody) ────────────── */

  window.ProjetoPato = { duckSVG, burst };
})();
