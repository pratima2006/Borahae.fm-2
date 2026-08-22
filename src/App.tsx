import { useState } from 'react'

export default function App() {
  const [showModal, setShowModal] = useState<string | null>(null)
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <div className="min-h-screen bg-[#fdfcff] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />

      {/* Navbar - WORKING */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-borahae-600 rounded-xl flex items-center justify-center text-white font-display text-xl font-bold shadow-lg shadow-purple-300">b</div>
          <span className="font-semibold tracking-tight">borahae.fm</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setShowModal(isSignedIn? 'signout' : 'signin')} className="text-sm font-medium text-zinc-600 hover:text-black">
            {isSignedIn? 'Dashboard' : 'Sign in'}
          </button>
          <button onClick={() => setShowModal('join')} className="bg-borahae-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-purple-200 hover:bg-borahae-900 transition-all">
            Join the light
          </button>
        </div>
      </nav>

      {/* Hero Section - Exact replica of your pic */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-10 md:pt-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-zinc-200 rounded-full px-3 py-1 text-[10px] font-mono tracking-widest uppercase text-zinc-500 bg-white">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" /> FOR EVERY COMEBACK, TOGETHER
          </div>
          <h1 className="font-display text-[56px] md:text-[80px] leading-[0.9] mt-6 tracking-tight">
            <span className="text-zinc-900">Keep the light.</span><br />
            <span className="text-borahae-600 italic">Stream with<br />heart.</span>
          </h1>
          <p className="mt-6 text-zinc-500 max-w-[440px] leading-relaxed text-[15px]">
            borahae.fm is your lovingly kept ARMY scrapbook — a place to discover missions, make every stream count, and watch the purple light grow.
          </p>
          <div className="mt-8 flex gap-3">
            <button onClick={() => setShowModal('join')} className="bg-borahae-600 text-white px-6 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-black transition-colors">
              Start your scrapbook <span>→</span>
            </button>
            <button onClick={() => setShowModal('how')} className="bg-white border border-zinc-200 px-6 py-3.5 rounded-full text-sm font-semibold hover:border-zinc-900 transition-colors">
              See how it works
            </button>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-mono text-purple-700">A</div>
              <div className="w-8 h-8 rounded-full bg-pink-100 border-2 border-white flex items-center justify-center text-[10px] font-mono text-pink-700">J</div>
              <div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-mono text-indigo-700">M</div>
              <div className="w-8 h-8 rounded-full bg-violet-100 border-2 border-white flex items-center justify-center text-[10px] font-mono text-violet-700">S</div>
            </div>
            <p className="text-xs font-mono text-zinc-500"><span className="font-bold text-zinc-900">12,480 ARMY</span> keeping watch together</p>
          </div>
        </div>

        {/* Right Card - WORKING BUTTON */}
        <div className="relative md:ml-12">
          <div className="bg-white p-3 rounded-[32px] shadow-2xl shadow-purple-200/50 rotate-[2deg] border border-zinc-100">
            <div className="bg-[#2a1650] rounded-[24px] p-8 md:p-10 text-white relative overflow-hidden min-h-[480px] flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/40 blur-[50px] rounded-full" />
              <div className="relative">
                <p className="font-mono text-[9px] tracking-[0.2em] text-purple-300/70">MISSION 001 / BANGTANTV</p>
                <h2 className="font-display text-5xl leading-[0.9] mt-8">The purple<br />hour.</h2>
                <p className="font-mono text-[11px] text-purple-200/60 mt-4 max-w-[240px] leading-relaxed">A little place to leave your mark on the streams that mean something.</p>
              </div>
              <div className="relative flex justify-between items-end">
                <button onClick={() => setShowModal('watch')} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center text-borahae-900 group-hover:scale-110 transition-transform">▶</div>
                  <span className="font-mono text-xs">Watch together</span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md px-6 py-3 flex justify-between items-center">
                <p className="font-mono text-[9px] tracking-widest text-white/50">YOUR STREAM JOURNAL</p>
                <p className="font-mono text-[10px] text-pink-300">♥ borahae</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-6 bg-pink-300 text-borahae-900 px-4 py-2 rounded-full text-xs font-bold font-mono rotate-[-8deg] shadow-lg">★ love notes, not numbers</div>
        </div>
      </main>

      {/* Steps Section */}
      <section className="mt-24 grid md:grid-cols-3 border-t border-zinc-100 bg-white">
        {[
          { n: "01", t: "Find your mission", d: "Pick a MV or comeback goal." },
          { n: "02", t: "Watch with intention", d: "Log your streams mindfully." },
          { n: "03", t: "Leave your mark", d: "Grow the purple light together." }
        ].map(s => (
          <div key={s.n} className="p-12 border-r border-zinc-100 last:border-0">
            <p className="font-mono text-[10px] text-borahae-600">{s.n}</p>
            <h3 className="font-display text-2xl mt-4">{s.t}</h3>
            <p className="text-sm text-zinc-500 mt-2">{s.d}</p>
          </div>
        ))}
      </section>

      {/* MODALS - ALL BUTTONS WORK NOW */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setShowModal(null)}>
          <div className="bg-white rounded-[24px] p-8 max-w-sm w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            {showModal === 'join' && <>
              <h3 className="font-display text-3xl">Join the light 💜</h3>
              <p className="text-sm text-zinc-500 mt-2">Create your scrapbook. It's free forever.</p>
              <input placeholder="Email" className="mt-6 w-full border border-zinc-200 rounded-full px-4 py-3 text-sm outline-none focus:border-borahae-600" />
              <button onClick={() => { setIsSignedIn(true); setShowModal(null); }} className="mt-3 w-full bg-borahae-600 text-white rounded-full py-3 text-sm font-semibold">Continue</button>
            </>}
            {showModal === 'signin' && <>
              <h3 className="font-display text-3xl">Welcome back</h3>
              <button onClick={() => { setIsSignedIn(true); setShowModal(null); }} className="mt-6 w-full bg-black text-white rounded-full py-3 text-sm">Sign in as Demo ARMY</button>
            </>}
            {showModal === 'how' && <>
              <h3 className="font-display text-2xl">How it works?</h3>
              <p className="text-sm text-zinc-600 mt-3 leading-relaxed">1. Mission choose karo, 2. Stream log karo, 3. Purple light badao. No numbers race, only love notes.</p>
              <button onClick={() => setShowModal(null)} className="mt-6 w-full border rounded-full py-3 text-sm">Got it</button>
            </>}
            {showModal === 'watch' && <>
              <h3 className="font-display text-2xl">The purple hour live</h3>
              <div className="mt-4 aspect-video bg-borahae-900 rounded-xl flex items-center justify-center text-white">▶ Video Player Mock</div>
              <button onClick={() => setShowModal(null)} className="mt-4 w-full bg-borahae-600 text-white rounded-full py-3 text-sm">Close</button>
            </>}
            {showModal === 'signout' && <>
              <h3 className="font-display text-2xl">Dashboard</h3>
              <p className="text-sm text-zinc-500 mt-2">You are signed in as ARMY.</p>
              <button onClick={() => { setIsSignedIn(false); setShowModal(null); }} className="mt-6 w-full bg-zinc-100 rounded-full py-3 text-sm">Sign out</button>
            </>}
          </div>
        </div>
      )}
    </div>
  )
}
