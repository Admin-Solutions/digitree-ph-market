import React from 'react';
import { Music, Users, Wallet, ArrowRight, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <header
        className="relative min-h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `url('https://image.admin.solutions/homepage-background-image/141f6617-6095-43ee-bd53-44124cd7909e/f06aa3ec-6401-454f-a502-6752ddda4ba3/c19b2321-0bcb-481e-84f7-d177857f060b')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              DigiTree
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition">How It Works</a>
            <a href="#for-artists" className="text-slate-300 hover:text-white transition">For Artists</a>
            <a href="#for-fans" className="text-slate-300 hover:text-white transition">For Fans</a>
          </div>
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 rounded-lg font-medium transition">
            Join Waitlist
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Own Your Music.
            </span>
            <br />
            <span className="text-white">Support Your Artists.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
            Artists keep 90%+ of sales, earn royalties on every resale.
            No middlemen. No algorithms. Just music.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition">
              Get Early Access <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-slate-600 hover:border-slate-500 rounded-xl font-semibold text-lg transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </div>
      </header>

      {/* Features Section */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <Music className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Artists Upload</h3>
              <p className="text-slate-400">
                Musicians mint their tracks as digital collectibles, setting their own prices and royalty rates.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Wallet className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fans Collect</h3>
              <p className="text-slate-400">
                Buy music you love and truly own it. Trade, gift, or hold - your collection, your choice.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition">
              <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Everyone Wins</h3>
              <p className="text-slate-400">
                Artists earn on every sale and resale. Fans build real collections. Community thrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Be among the first to experience the future of music ownership in the Philippines.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-400 hover:to-purple-400 rounded-xl font-semibold text-lg transition">
            Join the Waitlist
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Music className="w-6 h-6 text-emerald-400" />
            <span className="text-xl font-bold">DigiTree</span>
          </div>
          <p className="text-slate-500 text-sm">
            Powered by SeeMyNFT Technology
          </p>
          <p className="text-slate-500 text-sm">
            &copy; 2024 DigiTree.ph. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
