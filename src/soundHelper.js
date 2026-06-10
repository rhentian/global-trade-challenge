// ── SOUND UTILITIES ──
export const playSound = (type) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const time = audioContext.currentTime;

  switch(type) {
    case 'click':
      // Click sound - short beep
      const click = audioContext.createOscillator();
      click.frequency.value = 800;
      const clickGain = audioContext.createGain();
      clickGain.gain.setValueAtTime(0.3, time);
      clickGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
      click.connect(clickGain);
      clickGain.connect(audioContext.destination);
      click.start(time);
      click.stop(time + 0.1);
      break;

    case 'success':
      // Success sound - ascending notes
      [800, 1000, 1200].forEach((freq, i) => {
        const osc = audioContext.createOscillator();
        osc.frequency.value = freq;
        const gain = audioContext.createGain();
        gain.gain.setValueAtTime(0.3, time + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, time + i * 0.05 + 0.15);
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.start(time + i * 0.05);
        osc.stop(time + i * 0.05 + 0.15);
      });
      break;

    case 'error':
      // Error sound - descending notes
      [600, 400, 200].forEach((freq, i) => {
        const osc = audioContext.createOscillator();
        osc.frequency.value = freq;
        const gain = audioContext.createGain();
        gain.gain.setValueAtTime(0.3, time + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.01, time + i * 0.06 + 0.15);
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.start(time + i * 0.06);
        osc.stop(time + i * 0.06 + 0.15);
      });
      break;
  }
};

// ── CONFETTI ──
export const createConfetti = () => {
  const colors = ['#D4AF37', '#E8D4A8', '#06ffa5', '#4caf50', '#ff9100'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.width = Math.random() * 8 + 4 + 'px';
    confetti.style.height = confetti.style.width;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.opacity = Math.random() * 0.7 + 0.3;
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.animationDuration = Math.random() * 2 + 2.5 + 's';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
  }
};

// ── MOTIVATIONAL PHRASES ──
export const getMotivationalPhrase = (context) => {
  const phrases = {
    correct: ['Smart move 🚀', 'Brilliant! 🎯', 'Perfect answer! ✨', 'Economics expert! 📊', 'Next level thinking! 💡'],
    wrong: ['Think again 👀', 'Not this time 🤔', 'Almost there 💪', 'Keep learning 📚'],
    timeout: ['Time\'s up! ⏰', 'Out of time 🕐', 'Speed matters! ⚡']
  };
  
  const list = phrases[context] || phrases.correct;
  return list[Math.floor(Math.random() * list.length)];
};
