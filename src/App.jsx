import { useState, useEffect, useRef } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { QUESTIONS, GROQ_MODEL, GROQ_URL, buildGroqPrompt } from './tradeData.js';
import './App.css';

const TMAX = 45;
const TOTAL_ROUNDS = 3;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Sparkline({ data, color }) {
  const formatted = data.map((v, i) => ({ year: (2019 + i).toString(), v }));
  return (
    <ResponsiveContainer width="100%" height={60}>
      <AreaChart data={formatted} margin={{ top: 4, right: 4, left: -30, bottom: 0 }}>
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.25} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" tick={{ fill: '#4a4030', fontSize: 9 }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip contentStyle={{ background: '#111', border: '1px solid #c9a84c22', borderRadius: 6, color: '#f5f0e8', fontSize: 11 }} />
        <Area type="monotone" dataKey="v" stroke={color} strokeWidth={2} fill="url(#sg)" dot={{ r: 3, fill: color }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function TradeBarChart({ bars, max, title }) {
  const data = bars.map(b => ({ name: b[0], value: b[1], fill: b[2] }));
  return (
    <div>
      <p className="chart-label">{title}</p>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.08)" horizontal={false} />
          <XAxis type="number" domain={[0, max]} tick={{ fill: '#4a4030', fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis type="category" dataKey="name" tick={{ fill: '#8a7a5a', fontSize: 11 }} width={120} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ background: '#111', border: '1px solid #c9a84c22', borderRadius: 6, color: '#f5f0e8', fontSize: 11 }}
            formatter={(v) => [typeof v === 'number' && v > 100 ? v.toLocaleString() : v]}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, i) => <rect key={i} fill={entry.fill} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function TimerRing({ timeLeft }) {
  const CIRC = 2 * Math.PI * 21;
  const offset = CIRC * (1 - timeLeft / TMAX);
  const color = timeLeft <= 5 ? '#e53935' : timeLeft <= 10 ? '#ff9100' : '#c9a84c';
  return (
    <div className="timer-ring">
      <svg viewBox="0 0 48 48" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="24" cy="24" r="21" fill="none" stroke="#1a1a1a" strokeWidth="4" />
        <circle cx="24" cy="24" r="21" fill="none" stroke={color} strokeWidth="4"
          strokeLinecap="round" strokeDasharray={CIRC} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s' }} />
      </svg>
      <span className="timer-num" style={{ color }}>{timeLeft}</span>
    </div>
  );
}

// ── AI Panel (shown after RUN AI button) ──
function AIPanel({ question, p1Name, p2Name, p1Answer, p2Answer, groqKey }) {
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(true);
  const [elapsed, setElapsed] = useState(null);

  useEffect(() => {
    if (!groqKey) {
      setAnalysis('Add your Groq API key in the .env file (VITE_GROQ_KEY) to enable AI analysis.');
      setLoading(false);
      return;
    }
    const t0 = Date.now();
    const prompt = buildGroqPrompt(question, p1Answer, p2Answer, p1Name, p2Name);
    fetch(GROQ_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${groqKey}` },
      body: JSON.stringify({ model: GROQ_MODEL, messages: [{ role: 'user', content: prompt }], max_tokens: 200, temperature: 0.7 })
    })
      .then(r => r.json())
      .then(d => {
        setAnalysis(d.choices?.[0]?.message?.content || 'Analysis unavailable.');
        setElapsed(((Date.now() - t0) / 1000).toFixed(2));
        setLoading(false);
      })
      .catch(() => {
        setAnalysis('AI analysis unavailable. Check your Groq API key.');
        setLoading(false);
      });
  }, []);

  const c = question.chart;

  return (
    <div className="ai-panel">
      <div className="ai-header">
        <div className="ai-avatar">🤖</div>
        <div className="ai-hdr-info">
          <h4>Global Trade Challenge AI</h4>
          <p>Real market data · 2025–2026 · Verified sources</p>
        </div>
        <div className={`ai-speed ${loading ? 'loading' : ''}`}>
          {loading ? '⏳ Analyzing…' : `⚡ ${elapsed}s`}
        </div>
      </div>
      <div className="ai-body">
        <div className="kpi-row">
          <div className="kpi" style={{ '--kc': c.kpi1.c }}>
            <div className="kv">{c.kpi1.v}</div>
            <div className="kl">{c.kpi1.l}</div>
            <div className="kd">{c.kpi1.d}</div>
          </div>
          <div className="kpi" style={{ '--kc': c.kpi2.c }}>
            <div className="kv">{c.kpi2.v}</div>
            <div className="kl">{c.kpi2.l}</div>
            <div className="kd up">{c.kpi2.d}</div>
          </div>
        </div>
        <div className="chart-box">
          <TradeBarChart bars={c.bars} max={c.max} title={c.title} />
          <Sparkline data={c.spark} color={c.sparkc} />
          <p className="spark-label">{c.sparktitle}</p>
        </div>
        <div className="ai-insight">
          {loading ? (
            <div className="skel-lines">
              {[80, 95, 70, 85].map((w, i) => (
                <div key={i} className="skel" style={{ width: `${w}%`, height: 12, marginBottom: 8 }} />
              ))}
            </div>
          ) : (
            <p>{analysis}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── SCREENS ──

function Splash({ onStart }) {
  return (
    <div className="screen splash">
      <div className="orb o1" /><div className="orb o2" />
      <div className="splash-content">
        <div className="eyebrow"><span className="dot" />Economics of Globalization · Intercultural Day 2025</div>
        <h1 className="splash-title">GLOBAL TRADE</h1>
        <h2 className="splash-subtitle">Global Trade Challenge</h2>
        <p className="splash-tagline">
          <strong>Think you can out-decide an AI?</strong><br />
          Real export crises. Real market data. 3 rounds.<br />
          Fastest correct answer wins each round. Most rounds wins the match.
        </p>
        <div className="splash-stats">
          {[['10', 'Trade Scenarios'], ['3', 'Rounds'], ['45s', 'Per Question'], ['1', 'Winner']].map(([n, l]) => (
            <div key={l} className="stat"><div className="stat-n">{n}</div><div className="stat-l">{l}</div></div>
          ))}
        </div>
        <button className="btn-gold" onClick={onStart}>⚔ ENTER THE ARENA</button>
        <p className="splash-note">Speed · Accuracy · Intelligence · Globalization</p>
      </div>
    </div>
  );
}

function Setup({ onLaunch }) {
  const [p1, setP1] = useState('Player 1');
  const [p2, setP2] = useState('Player 2');
  return (
    <div className="screen setup">
      <div className="setup-wrap">
        <h2 className="setup-title">Register Competitors</h2>
        <p className="setup-sub">Enter the names of both players. The same question will be asked to each — answers hidden until both respond.</p>
        <div className="players-grid">
          <div className="player-card">
            <span className="pc-av">🌍</span>
            <div className="pc-lbl">Player 1</div>
            <input className="pc-inp" value={p1} onChange={e => setP1(e.target.value)} maxLength={18} placeholder="Enter name…" />
          </div>
          <div className="player-card">
            <span className="pc-av">⚡</span>
            <div className="pc-lbl">Player 2</div>
            <input className="pc-inp" value={p2} onChange={e => setP2(e.target.value)} maxLength={18} placeholder="Enter name…" />
          </div>
        </div>
        <div className="rules-box">
          <div className="rules-title">⚔ Rules of Engagement</div>
          <ul>
            {[
              '3 rounds — same question asked to each player one at a time',
              'Player 2\'s screen is hidden while Player 1 answers',
              'Answers revealed simultaneously after both respond',
              'Correct answer + fastest time = round winner (+1 point)',
              'If both answer correctly at the same time → Tiebreaker round',
              'Player with most points after 3 rounds wins the match',
              'After each reveal: press RUN AI to see the intelligence analysis'
            ].map(r => <li key={r}>{r}</li>)}
          </ul>
        </div>
        <button className="btn-gold" onClick={() => onLaunch(p1 || 'Player 1', p2 || 'Player 2')}>⚡ LAUNCH MATCH</button>
      </div>
    </div>
  );
}

function TurnScreen({ playerName, roundNum, onReady }) {
  return (
    <div className="screen turn-screen">
      <div className="turn-eyebrow">Round {roundNum} of {TOTAL_ROUNDS}</div>
      <div className="turn-name">{playerName.toUpperCase()}</div>
      <div className="turn-sub">It's your turn. The clock starts when you press ready.</div>
      <button className="btn-gold" onClick={onReady}>I'M READY →</button>
    </div>
  );
}

function GameScreen({ question, playerName, roundNum, p1Score, p2Score, p1Name, p2Name, onSubmit }) {
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TMAX);
  const startTime = useRef(Date.now());
  const timerRef = useRef(null);

  useEffect(() => {
    startTime.current = Date.now();
    setTimeLeft(TMAX);
    setSelected(null);
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          onSubmit(-1, TMAX);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [question]);

  function handleSubmit() {
    if (selected === null) return;
    clearInterval(timerRef.current);
    const elapsed = (Date.now() - startTime.current) / 1000;
    onSubmit(selected, elapsed);
  }

  return (
    <div className="screen game-screen">
      <div className="game-wrap">
        {/* Scoreboard */}
        <div className="scoreboard">
          <div className="sb-player">
            <div className="sb-name">{p1Name}</div>
            <div className="sb-score">{p1Score}</div>
          </div>
          <div className="sb-mid">
            <div className="sb-round-lbl">ROUND</div>
            <div className="sb-round-num">{roundNum}/{TOTAL_ROUNDS}</div>
          </div>
          <div className="sb-player">
            <div className="sb-name">{p2Name}</div>
            <div className="sb-score">{p2Score}</div>
          </div>
        </div>

        <div className="now-playing">
          <span className="np-dot" />
          <span className="np-label">NOW ANSWERING:</span>
          <span className="np-name">{playerName.toUpperCase()}</span>
        </div>

        <div className="timer-row">
          <div className="timer-track">
            <div className="timer-fill" style={{
              width: `${(timeLeft / TMAX) * 100}%`,
              background: timeLeft <= 5 ? '#e53935' : timeLeft <= 10 ? '#ff9100' : '#c9a84c'
            }} />
          </div>
          <TimerRing timeLeft={timeLeft} />
        </div>

        <div className="q-card">
          <div className="q-topic"><span className="q-flag">{question.flag}</span>{question.prod}</div>
          <div className="q-text">{question.q}</div>
        </div>

        <div className="opts-grid">
          {question.opts.map((o, i) => (
            <button key={i} className={`opt ${selected === i ? 'sel' : ''}`} onClick={() => setSelected(i)}>
              <span className="opt-l">{o.l}</span>
              <span className="opt-txt">{o.t}</span>
            </button>
          ))}
        </div>

        <button className="btn-gold btn-submit" onClick={handleSubmit} disabled={selected === null}>
          {selected === null ? 'SELECT AN ANSWER FIRST' : 'LOCK IN ANSWER →'}
        </button>
      </div>
    </div>
  );
}

function WaitingScreen({ p1Name, p2Name, onNext }) {
  return (
    <div className="screen waiting-screen">
      <div className="wait-icon">🔒</div>
      <div className="wait-title">ANSWER LOCKED</div>
      <div className="wait-sub">
        <strong>{p1Name}</strong> has answered.<br />
        Now it's <strong>{p2Name}</strong>'s turn.<br />
        Hand the device over without showing the screen.
      </div>
      <button className="btn-gold" onClick={onNext}>HAND IT OVER →</button>
    </div>
  );
}

function RevealScreen({
  question, roundNum,
  p1Name, p2Name,
  p1Answer, p1Time, p1Correct,
  p2Answer, p2Time, p2Correct,
  p1Score, p2Score,
  onContinue, groqKey, isTiebreaker
}) {
  const [showAI, setShowAI] = useState(false);

  const p1opt = p1Answer >= 0 ? question.opts[p1Answer] : null;
  const p2opt = p2Answer >= 0 ? question.opts[p2Answer] : null;
  const correctOpt = question.opts[question.correct];

  let roundWinner = null;
  if (p1Correct && p2Correct) {
    const diff = Math.abs(p1Time - p2Time);
    roundWinner = diff < 0.3 ? 'tie' : p1Time < p2Time ? 'p1' : 'p2';
  } else if (p1Correct) { roundWinner = 'p1'; }
  else if (p2Correct) { roundWinner = 'p2'; }
  else { roundWinner = 'none'; }

  const isLastRound = roundNum >= TOTAL_ROUNDS && !isTiebreaker;
  const continueLabel = isTiebreaker
    ? 'START TIEBREAKER →'
    : isLastRound
    ? 'SEE FINAL RESULTS →'
    : `ROUND ${roundNum + 1} →`;

  return (
    <div className="screen reveal-screen">
      <div className="reveal-wrap">
        <div className="reveal-title">REVEAL</div>
        <div className="reveal-sub">Round {roundNum} of {TOTAL_ROUNDS} · Both answers shown simultaneously</div>

        {isTiebreaker && (
          <div className="tiebreaker-banner">
            <div className="tb-title">🔥 TIEBREAKER</div>
            <div className="tb-sub">Both answered correctly at the same time!</div>
          </div>
        )}

        {/* Score banner */}
        <div className="score-banner">
          <div className="sb2-player">
            <span className="sb2-name">{p1Name}</span>
            <span className="sb2-score">{p1Score}</span>
          </div>
          <span className="sb2-sep">pts</span>
          <div className="sb2-player right">
            <span className="sb2-score">{p2Score}</span>
            <span className="sb2-name">{p2Name}</span>
          </div>
        </div>

        {/* Reveal cards */}
        <div className="reveal-grid">
          {[
            { name: p1Name, opt: p1opt, time: p1Time, correct: p1Correct, isWinner: roundWinner === 'p1' },
            { name: p2Name, opt: p2opt, time: p2Time, correct: p2Correct, isWinner: roundWinner === 'p2' }
          ].map(({ name, opt, time, correct, isWinner }) => (
            <div key={name} className={`reveal-card ${isWinner ? 'winner' : roundWinner === 'none' ? '' : 'loser'} ${roundWinner === 'tie' ? 'tied' : ''}`}>
              <div className="rc-name">{name}</div>
              <div className="rc-answer">{opt ? opt.t : '⏰ No answer'}</div>
              <div className="rc-time">{time ? time.toFixed(2) : '—'}<span className="rc-time-unit">s</span></div>
              <div className="rc-time-lbl">Response Time</div>
              <div className="rc-result">{correct ? '✅' : '❌'}</div>
              <div className={`rc-pts ${isWinner ? 'win' : ''}`}>
                {isWinner ? '🏆 +1 POINT' : roundWinner === 'tie' ? '🤝 TIE' : correct ? '✓ Correct' : '✗ Wrong'}
              </div>
            </div>
          ))}
        </div>

        {/* Correct answer */}
        <div className="correct-box">
          <span className="correct-ico">🎯</span>
          <div>
            <div className="correct-lbl">Correct Answer</div>
            <div className="correct-txt">{correctOpt.t}</div>
            <div className="correct-why">{correctOpt.w}</div>
          </div>
        </div>

        {/* Justify box */}
        <div className="justify-box">
          <div className="justify-title">💬 Justify your answer — then compare with the AI</div>
          <div className="justify-grid">
            {[{ name: p1Name, opt: p1opt }, { name: p2Name, opt: p2opt }].map(({ name, opt }) => (
              <div key={name} className="justify-card">
                <div className="jc-player">{name}</div>
                <div className="jc-answer">{opt ? opt.t : 'No answer'}</div>
                <div className="jc-prompt">Explain your trade reasoning before reading the AI analysis below.</div>
              </div>
            ))}
          </div>
        </div>

        {/* RUN AI button or AI Panel */}
        {!showAI ? (
          <button className="btn-run-ai" onClick={() => setShowAI(true)}>
            🤖 RUN AI ANALYSIS
          </button>
        ) : (
          <AIPanel
            question={question}
            p1Name={p1Name} p2Name={p2Name}
            p1Answer={p1Answer} p2Answer={p2Answer}
            groqKey={groqKey}
          />
        )}

        <button className="btn-gold btn-continue" onClick={() => onContinue(roundWinner)}>
          {continueLabel}
        </button>
      </div>
    </div>
  );
}

function FinalResults({ p1Name, p2Name, p1Score, p2Score, rounds, lb, onReplay, onHome }) {
  const p1w = p1Score > p2Score;
  const p2w = p2Score > p1Score;
  const tie = p1Score === p2Score;
  const winnerName = p1w ? p1Name : p2w ? p2Name : null;

  return (
    <div className="screen results-screen">
      <div className="results-wrap">
        <div className="results-crown">{tie ? '🤝' : '👑'}</div>
        <div className="results-title">{tie ? 'IT\'S A TIE' : 'WINNER'}</div>
        {winnerName && <div className="results-winner-name">{winnerName.toUpperCase()}</div>}
        <div className="results-sub">{p1Name} vs {p2Name} · {TOTAL_ROUNDS} Rounds · Global Trade Challenge 2025</div>

        <div className="res-vs">
          {[
            { name: p1Name, score: p1Score, isWinner: p1w },
            { name: p2Name, score: p2Score, isWinner: p2w }
          ].map(({ name, score, isWinner }) => (
            <div key={name} className={`rv-card ${isWinner ? 'winner' : tie ? '' : 'loser'}`}>
              <span className="rv-trophy">{isWinner ? '🏆' : tie ? '🤝' : '📊'}</span>
              <div className="rv-name">{name}</div>
              <div className="rv-final-score">{score}</div>
              <div className="rv-lbl">points</div>
              {isWinner && <div className="rv-winner-lbl">WINNER</div>}
            </div>
          ))}
        </div>

        {/* Round breakdown */}
        <div className="breakdown-box">
          <div className="breakdown-title">Round Breakdown</div>
          {rounds.map((r, i) => (
            <div key={i} className="breakdown-row">
              <span className="br-round">Round {i + 1}</span>
              <span className="br-q">{r.q}</span>
              <span className={`br-p1 ${r.p1Correct ? 'correct' : 'wrong'}`}>{r.p1Correct ? `✓ ${r.p1Time.toFixed(2)}s` : '✗'}</span>
              <span className="br-vs">vs</span>
              <span className={`br-p2 ${r.p2Correct ? 'correct' : 'wrong'}`}>{r.p2Correct ? `✓ ${r.p2Time.toFixed(2)}s` : '✗'}</span>
            </div>
          ))}
        </div>

        {lb.length > 0 && (
          <div className="lb-box">
            <div className="lb-head">🏆 Hall of Champions</div>
            {lb.map((e, i) => (
              <div key={i} className={`lb-row ${i === 0 ? 'g1' : ''}`}>
                <span className="lb-rank">{['🥇', '🥈', '🥉'][i] || (i + 1)}</span>
                <span className="lb-name">{e.name}</span>
                <span className="lb-score">{e.score} pts</span>
              </div>
            ))}
          </div>
        )}

        <div className="res-btns">
          <button className="btn-outline" onClick={onHome}>← Home</button>
          <button className="btn-gold" onClick={onReplay}>🔄 New Match</button>
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ──
export default function App() {
  const [screen, setScreen] = useState('splash');
  const [p1Name, setP1Name] = useState('Player 1');
  const [p2Name, setP2Name] = useState('Player 2');
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [roundNum, setRoundNum] = useState(1);
  const [question, setQuestion] = useState(null);
  const [usedIds, setUsedIds] = useState([]);
  const [p1Answer, setP1Answer] = useState(null);
  const [p1Time, setP1Time] = useState(null);
  const [p1Correct, setP1Correct] = useState(false);
  const [p2Answer, setP2Answer] = useState(null);
  const [p2Time, setP2Time] = useState(null);
  const [p2Correct, setP2Correct] = useState(false);
  const [isTiebreaker, setIsTiebreaker] = useState(false);
  const [rounds, setRounds] = useState([]);
  const [lb, setLb] = useState(() => {
    try { return JSON.parse(localStorage.getItem('tiq_lb2') || '[]'); } catch { return []; }
  });

  const groqKey = import.meta.env.VITE_GROQ_KEY;

  function pickQuestion(exclude = []) {
    const pool = shuffle(QUESTIONS.filter(q => !exclude.includes(q.id)));
    return pool[0];
  }

  function launch(p1, p2) {
    setP1Name(p1); setP2Name(p2);
    setP1Score(0); setP2Score(0);
    setRoundNum(1); setUsedIds([]);
    setIsTiebreaker(false); setRounds([]);
    setP1Answer(null); setP1Time(null); setP1Correct(false);
    setP2Answer(null); setP2Time(null); setP2Correct(false);
    const q = pickQuestion();
    setQuestion(q); setUsedIds([q.id]);
    setScreen('turn1');
  }

  function p1Submit(answer, time) {
    setP1Answer(answer);
    setP1Time(time);
    setP1Correct(answer === question.correct);
    setScreen('waiting');
  }

  function p2Submit(answer, time) {
    setP2Answer(answer);
    setP2Time(time);
    setP2Correct(answer === question.correct);
    setScreen('reveal');
  }

  function handleContinue(roundWinner) {
    // Calculate new scores
    const newP1 = p1Score + (roundWinner === 'p1' ? 1 : 0);
    const newP2 = p2Score + (roundWinner === 'p2' ? 1 : 0);
    setP1Score(newP1);
    setP2Score(newP2);

    // Save round log
    const newRounds = [...rounds, {
      q: question.q.substring(0, 48) + '…',
      p1Correct, p1Time: p1Time || TMAX,
      p2Correct, p2Time: p2Time || TMAX,
      winner: roundWinner
    }];
    setRounds(newRounds);

    if (roundWinner === 'tie') {
      // Tiebreaker
      setIsTiebreaker(true);
      const newQ = pickQuestion(usedIds);
      setQuestion(newQ);
      setUsedIds(prev => [...prev, newQ.id]);
      setP1Answer(null); setP1Time(null); setP1Correct(false);
      setP2Answer(null); setP2Time(null); setP2Correct(false);
      setScreen('turn1');
    } else if (roundNum >= TOTAL_ROUNDS && !isTiebreaker) {
      // Final results
      const finalP1 = newP1;
      const finalP2 = newP2;
      const winnerName = finalP1 > finalP2 ? p1Name : finalP2 > finalP1 ? p2Name : null;
      if (winnerName) {
        const winnerScore = Math.max(finalP1, finalP2);
        const newLb = [...lb, { name: winnerName, score: winnerScore }]
          .sort((a, b) => b.score - a.score)
          .slice(0, 10);
        setLb(newLb);
        try { localStorage.setItem('tiq_lb2', JSON.stringify(newLb)); } catch {}
      }
      setScreen('final');
    } else {
      // Next round
      setRoundNum(r => r + 1);
      setIsTiebreaker(false);
      const newQ = pickQuestion(usedIds);
      setQuestion(newQ);
      setUsedIds(prev => [...prev, newQ.id]);
      setP1Answer(null); setP1Time(null); setP1Correct(false);
      setP2Answer(null); setP2Time(null); setP2Correct(false);
      setScreen('turn1');
    }
  }

  return (
    <div className="app">
      <div className="ticker-bar">
        <div className="ticker-inner">
          {[...Array(2)].flatMap(() =>
            ['CACAO/MT +2.1%', 'SHRIMP FOB/KG +0.6%', 'BANANA/MT +2.8%', 'ARABICA/MT +50.7%',
              'LITHIUM/KG +17%', 'SOYBEAN/MT -17%', 'USD/EUR 1.085', 'BALTIC DRY +2.1%',
              'CONTAINER RATE -1.9%', 'PALM OIL/MT -3.2%', 'GLOBAL TRADE +3.2%', 'AI MARKET +34%']
          ).map((t, i) => <span key={i} className="tick">{t}</span>)}
        </div>
      </div>

      {screen === 'splash' && <Splash onStart={() => setScreen('setup')} />}
      {screen === 'setup' && <Setup onLaunch={launch} />}
      {screen === 'turn1' && <TurnScreen playerName={p1Name} roundNum={roundNum} onReady={() => setScreen('game1')} />}
      {screen === 'game1' && question && (
        <GameScreen question={question} playerName={p1Name} roundNum={roundNum}
          p1Score={p1Score} p2Score={p2Score} p1Name={p1Name} p2Name={p2Name}
          onSubmit={p1Submit} />
      )}
      {screen === 'waiting' && <WaitingScreen p1Name={p1Name} p2Name={p2Name} onNext={() => setScreen('turn2')} />}
      {screen === 'turn2' && <TurnScreen playerName={p2Name} roundNum={roundNum} onReady={() => setScreen('game2')} />}
      {screen === 'game2' && question && (
        <GameScreen question={question} playerName={p2Name} roundNum={roundNum}
          p1Score={p1Score} p2Score={p2Score} p1Name={p1Name} p2Name={p2Name}
          onSubmit={p2Submit} />
      )}
      {screen === 'reveal' && question && (
        <RevealScreen
          question={question} roundNum={roundNum}
          p1Name={p1Name} p2Name={p2Name}
          p1Answer={p1Answer} p1Time={p1Time} p1Correct={p1Correct}
          p2Answer={p2Answer} p2Time={p2Time} p2Correct={p2Correct}
          p1Score={p1Score} p2Score={p2Score}
          onContinue={handleContinue} groqKey={groqKey} isTiebreaker={isTiebreaker}
        />
      )}
      {screen === 'final' && (
        <FinalResults
          p1Name={p1Name} p2Name={p2Name}
          p1Score={p1Score} p2Score={p2Score}
          rounds={rounds} lb={lb}
          onReplay={() => setScreen('setup')}
          onHome={() => setScreen('splash')}
        />
      )}
    </div>
  );
}