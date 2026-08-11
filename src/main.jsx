import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Heart, Music2, Pause, Sparkles, MailOpen, Stars } from "lucide-react";
import "./styles.css";

const memories = [
  ["https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=85", "You make ordinary moments special."],
  ["https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=85", "Some feelings are bigger than words."],
  ["https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85", "And I still choose you. ❤️"]
];

function App() {
  const audio = useRef(null);
  const [music, setMusic] = useState(false);
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (!audio.current) return;
    audio.current.volume = 0.3;
    if (music) audio.current.play().catch(() => setMusic(false));
    else audio.current.pause();
  }, [music]);

  const openLetter = () => {
    setOpen(true);
    setTimeout(() => document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <main>
      <audio ref={audio} loop>
        <source src="./music.mp3" type="audio/mpeg" />
      </audio>

      <div className="hearts">{Array.from({length:16},(_,i)=><span key={i}>♥</span>)}</div>

      <button className="music" onClick={() => setMusic(!music)}>
        {music ? <Pause size={17}/> : <Music2 size={17}/>}
        {music ? "Music on" : "Play a little music"}
      </button>

      <section className="hero">
        <div className="orb" />
        <div className="hero-inner">
          <div className="tag"><Sparkles size={14}/> A little something from my heart</div>
          <h1>I'm sorry,<br/><em>my love.</em></h1>
          <p>Yesterday wasn't the way I wanted things to go. So I made this little corner of the internet just for you.</p>
          <button className="primary" onClick={openLetter}><Heart size={18} fill="currentColor"/> Open my heart</button>
          <small>scroll slowly ↓</small>
        </div>
      </section>

      <section className="intro">
        <div className="tag"><Stars size={14}/> From me to you</div>
        <h2>You're more important<br/>than one difficult conversation.</h2>
        <p>An “I'm sorry” is easy to say. What matters is meaning it, understanding what went wrong, and doing better. That's what I want to do.</p>
      </section>

      <section id="letter" className="letter-section">
        <div className={"paper " + (open ? "open" : "")}>
          <MailOpen size={27}/>
          <div className="script">Dear you,</div>
          <p>I'm genuinely sorry for that day. I hate knowing that our discussion left you upset, and I wish I had handled things with more patience, understanding, and love.</p>
          <p>I don't want to win an argument if it means hurting the person who means so much to me. Your feelings matter to me. <b>You matter to me.</b></p>
          <p>I may not always get everything right, but I want you to know that I'm willing to listen, learn, and make things better — not just today, but going forward.</p>
          <p>So, from the bottom of my heart... <b>I'm sorry. ❤️</b></p>
          <div className="signature">— yours, always <br/> ❤️Shae❤️</div>
        </div>
      </section>

      <section className="memories">
        <div className="tag"><Heart size={14} fill="currentColor"/> Little reminders</div>
        <h2>Some reasons I can't stay mad at you</h2>
        <div className="grid">
          {memories.map(([img,text],i)=><article className="card" key={img}>
            <img src={img} alt={text}/>
            <div><small>0{i+1}</small><h3>{text}</h3></div>
          </article>)}
        </div>
      </section>

      <section className="promise">
        <div className="promise-card">
          <div className="huge">♡</div>
          <div className="tag">My promise</div>
          <h2>I'll try to understand before I react.</h2>
          <p>More listening. More patience. Less ego. More “us.” Because I don't want yesterday's moment to become today's distance.</p>
        </div>
      </section>

      <section className="ending">
        <div className="tag"><Sparkles size={14}/> One last thing</div>
        <h2>Can we start again? 🥺</h2>
        <p>I promise I'll be waiting with a softer heart.</p>
        <div className="buttons">
          <button className="primary" onClick={()=>setAnswer("Running to you. 🏃‍♂️❤️")}>Yes, come here ❤️</button>
          <button className="secondary" onClick={()=>setAnswer("Deal. I'll make it up to you. Pinky promise. 🤞❤️")}>You better make it up to me 😌</button>
        </div>
        {answer && <div className="answer">{answer}</div>}
      </section>

      <footer>Made with a little courage, a lot of love, and one very sincere apology. <Heart size={13} fill="currentColor"/></footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
