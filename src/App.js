import React, { useState } from 'react';
import {
  Music, Users, Wallet, ArrowRight, ChevronDown, Ticket,
  PieChart, Palette, Film, Smartphone, Heart, CreditCard,
  ShoppingBag, Globe, Crown, Play, Shield, Zap, Star,
  Menu, X, ExternalLink
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      id: 'music',
      title: 'Music, Sports & Entertainment',
      icon: Music,
      color: 'emerald',
      size: 'large',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
      shortDesc: 'Digital Multimedia Experiences (DME) for artists and fans',
    },
    {
      id: 'ticketing',
      title: 'Ticketing',
      icon: Ticket,
      color: 'purple',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80',
      shortDesc: 'Smart Ticket APP (S.T.APP) technology',
    },
    {
      id: 'fanclubs',
      title: 'Fan Clubs',
      icon: Heart,
      color: 'pink',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80',
      shortDesc: 'Build communities around what matters',
    },
    {
      id: 'fractional',
      title: 'Fractional Ownership',
      icon: PieChart,
      color: 'blue',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
      shortDesc: 'Own a piece of something amazing',
    },
    {
      id: 'art',
      title: 'Art',
      icon: Palette,
      color: 'amber',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=80',
      shortDesc: 'Revolutionary way to buy, sell and own art',
    },
    {
      id: 'movies',
      title: 'Movies',
      icon: Film,
      color: 'red',
      size: 'large',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
      shortDesc: 'Film distribution reimagined',
    },
    {
      id: 'apps',
      title: 'Apps',
      icon: Smartphone,
      color: 'cyan',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      shortDesc: 'Every NFT is its own APP',
    },
    {
      id: 'sponsorship',
      title: 'Fractional Sponsorship',
      icon: Star,
      color: 'orange',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
      shortDesc: 'Unique sponsorship opportunities',
    },
    {
      id: 'payments',
      title: 'Payments',
      icon: CreditCard,
      color: 'green',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
      shortDesc: 'Multi-currency payment solutions',
    },
    {
      id: 'merchandise',
      title: 'Merchandise & Food Sales',
      icon: ShoppingBag,
      color: 'yellow',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
      shortDesc: 'Seamless event commerce',
    },
    {
      id: 'currency',
      title: 'Currency Exchange',
      icon: Globe,
      color: 'teal',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&q=80',
      shortDesc: 'Fiat and crypto integration',
    },
    {
      id: 'membership',
      title: 'Membership & Subscription Programs',
      icon: Crown,
      color: 'indigo',
      size: 'large',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
      shortDesc: 'NFT-based loyalty and membership',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/50', gradient: 'from-emerald-500 to-emerald-600' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/50', gradient: 'from-purple-500 to-purple-600' },
      pink: { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500/50', gradient: 'from-pink-500 to-pink-600' },
      blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/50', gradient: 'from-blue-500 to-blue-600' },
      amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/50', gradient: 'from-amber-500 to-amber-600' },
      red: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/50', gradient: 'from-red-500 to-red-600' },
      cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/50', gradient: 'from-cyan-500 to-cyan-600' },
      orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/50', gradient: 'from-orange-500 to-orange-600' },
      green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/50', gradient: 'from-green-500 to-green-600' },
      yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/50', gradient: 'from-yellow-500 to-yellow-600' },
      teal: { bg: 'bg-teal-500/20', text: 'text-teal-400', border: 'border-teal-500/50', gradient: 'from-teal-500 to-teal-600' },
      indigo: { bg: 'bg-indigo-500/20', text: 'text-indigo-400', border: 'border-indigo-500/50', gradient: 'from-indigo-500 to-indigo-600' },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Music className="w-8 h-8 text-emerald-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  DigiTree.ph
                </span>
                <span className="text-[10px] text-slate-500 -mt-1">Powered by SeeMyNFT</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-slate-300 hover:text-white transition text-sm">Services</a>
              <a href="#music" className="text-slate-300 hover:text-white transition text-sm">For Artists</a>
              <a href="#fanclubs" className="text-slate-300 hover:text-white transition text-sm">For Fans</a>
              <a href="https://seemynft.page" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition text-sm flex items-center gap-1">
                Platform <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden sm:block px-4 py-2 bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-400 hover:to-purple-400 rounded-lg font-medium transition text-sm">
                Get Started
              </button>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-slate-300 hover:text-white transition">Services</a>
              <a href="#music" className="block text-slate-300 hover:text-white transition">For Artists</a>
              <a href="#fanclubs" className="block text-slate-300 hover:text-white transition">For Fans</a>
              <a href="https://seemynft.page" target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition">
                Platform
              </a>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        className="relative min-h-screen w-full overflow-hidden pt-16"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400">Built on SeeMyNFT.page Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="text-white">Music & Entertainment</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            Digital Multimedia Experiences (DME) that connect artists directly with fans.
            Own your music. Trade your collectibles. Build your legacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/25">
              Explore Services <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">90%+</div>
              <div className="text-sm text-slate-400">Artist Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">12+</div>
              <div className="text-sm text-slate-400">Integrated Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400">100%</div>
              <div className="text-sm text-slate-400">True Ownership</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </div>
      </header>

      {/* Services Grid Section */}
      <section id="services" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete NFT Ecosystem
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to create, distribute, and monetize digital experiences
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => {
              const colors = getColorClasses(service.color);
              const Icon = service.icon;
              const isLarge = service.size === 'large';

              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className={`group relative overflow-hidden rounded-2xl ${
                    isLarge ? 'lg:col-span-2 lg:row-span-2' : ''
                  } ${isLarge ? 'min-h-[300px] lg:min-h-[400px]' : 'min-h-[200px]'}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-300" />

                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className={`${isLarge ? 'text-2xl' : 'text-lg'} font-bold mb-2`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {service.shortDesc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Music, Sports & Entertainment Section */}
      <section id="music" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
                <Music className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400">DME Technology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Music, Sports & Entertainment
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                DME means Digital Multimedia Experience. With DMEs, artists, promoters, athletes, and performers can distribute music, art, sporting events and entertainment, and build strong relationships with fans. Our NFTs are experiences within themselves.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">True Digital Ownership</h4>
                    <p className="text-slate-400 text-sm">Just like physical media - vinyl, tape, CD - now tokenized and distributed digitally. Own, access, and resell your favorite content.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Control Back in Your Hands</h4>
                    <p className="text-slate-400 text-sm">Artists earn more, fans can collect and resell. Each DME is a unique experience with integrated legal policies.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Beyond Just Music</h4>
                    <p className="text-slate-400 text-sm">Limited-edition tracks, signed album art, integrated tour tickets - your music IS your ticket. Embedded utility, freebies, and merchandise.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Crowdfund Your Dreams</h4>
                    <p className="text-slate-400 text-sm">Sell special DME NFTs for crowdfunding to your exclusive fanbase. Get in early and own the next greatest hit.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                  alt="Music DME"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-emerald-400">90%+</div>
                <div className="text-sm text-slate-400">Goes to Artists</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticketing Section */}
      <section id="ticketing" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-video rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80"
                  alt="NFT Ticketing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
                <div className="text-lg font-bold text-purple-400">S.T.APP</div>
                <div className="text-xs text-slate-400">Smart Ticket APP</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
                <Ticket className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400">NFT Ticketing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Smart Ticket APP
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Tokenize your event tickets - they become iconic valuable souvenir ticket stubs of an unforgettable experience. Each NFT ticket is an APP within itself that morphs through the event lifecycle.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Facial Recognition or QR Entry',
                  'Every Ticket is an APP',
                  'Control Resales',
                  'Positive ID of Owner',
                  'In-Seat Contactless Ordering',
                  'Resellable Souvenir',
                  'Post-Event Content Streaming',
                  'Turnkey POS Integration'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                    </div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Clubs Section */}
      <section id="fanclubs" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full mb-6">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-400">Community Building</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fan Clubs</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              NFT Fan Clubs bring creators and fans together like never before
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition">
              <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                <Crown className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintain Membership</h3>
              <p className="text-slate-400">
                Access perks and offerings integrated directly into your NFT - no Discord or external platforms required.
              </p>
            </div>

            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition">
              <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Build Community</h3>
              <p className="text-slate-400">
                Encourage brand loyalty, build valuable communities, and let fans share in the upside as the community grows.
              </p>
            </div>

            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition">
              <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scarcity & Value</h3>
              <p className="text-slate-400">
                NFTs prove ownership and guarantee limited releases. Creators control secondary markets and earn passive income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fractional Ownership & Art Section */}
      <section id="fractional" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Fractional Ownership */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                <PieChart className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">Shared Ownership</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Fractional Ownership</h2>
              <p className="text-slate-300 mb-6">
                Everyone should be able to own even the most expensive cool things - Art, Collectibles, Memorabilia. Our NFTs give you the chance to own a piece of something amazing alongside others.
              </p>
              <div className="space-y-3">
                {['Rare Cars', 'Jewelry', 'Real Estate', 'Collectibles', 'Artwork'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Art */}
            <div id="art">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                <Palette className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-400">Digital Art</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Art</h2>
              <p className="text-slate-300 mb-6">
                DME NFTs combined with Fractional Ownership create a revolutionary way to buy, sell, and own art. Document provenance, tell the story, and show the world what you own.
              </p>
              <div className="space-y-3">
                {['Convert artworks to DME NFTs', 'Fractionalize and sell on Marketplace', 'Document complete provenance', 'Pioneer art market royalties', 'Build collector audiences'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <section id="movies" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <Film className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-400">Film Distribution</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Movies</h2>
              <p className="text-lg text-slate-300 mb-8">
                Transform film distribution with DME NFTs. Filmmakers can release movies, documentaries, and exclusive content directly to audiences. Viewers own their copies and can resell them - just like physical DVDs and Blu-rays, but digital.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Direct Distribution</h4>
                    <p className="text-slate-400 text-sm">Bypass traditional distributors and connect directly with your audience.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Perpetual Royalties</h4>
                    <p className="text-slate-400 text-sm">Earn on every resale in the secondary market automatically.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80"
                alt="Movies DME"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                  alt="NFT Apps"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">Patent Pending</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Apps</h2>
              <p className="text-lg text-slate-300 mb-8">
                Every NFT can be its own APP with whatever functionality the creator wants. No need to download anything - just purchase the token and you have integrated access to all functionality.
              </p>
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
                <h4 className="font-semibold mb-4 text-cyan-400">Tokenization of a Webpage</h4>
                <p className="text-slate-400 mb-4">
                  Our patent-pending technology tokenizes a unique webpage for each token owner with all its inherent functionality.
                </p>
                <div className="flex items-center gap-3 p-4 bg-cyan-500/10 rounded-xl">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <span className="font-medium">Avoid App Store Tax</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section id="sponsorship" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <Star className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400">Innovative Funding</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fractional Sponsorship</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Museums, zoos, and institutions can provide unique sponsorship opportunities through NFT technology. Imagine sponsoring a penguin exhibit at a zoo - your name displayed on a live screen, resellable with the institution earning royalties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="font-semibold mb-3">Dynamic Recognition</h4>
              <p className="text-slate-400 text-sm">Internet-connected displays show sponsor names in real-time, automatically updating on ownership transfer.</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="font-semibold mb-3">Resale Participation</h4>
              <p className="text-slate-400 text-sm">Sponsors can resell their sponsorship, with institutions receiving royalties on each transfer.</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="font-semibold mb-3">Flexible Options</h4>
              <p className="text-slate-400 text-sm">Daily sponsorships, hourly naming rights, fractional sponsorships - accessible to everyone, not just the wealthy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payments & Currency Section */}
      <section id="payments" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Payments */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <CreditCard className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">Payment Platform</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Payments</h2>
              <p className="text-slate-300 mb-6">
                A complete, highly scalable, fast, and secure payment solution that handles and processes payments in multiple currencies with NFTs.
              </p>
              <div className="space-y-4">
                {[
                  'Multi-Currency Support (Crypto, Native, FIAT)',
                  'Templated Transaction Mapping',
                  'Multi-Party Transaction Grouping',
                  'Full Auditability',
                  'Smart Contract Auto-Triggers'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Currency */}
            <div id="currency">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
                <Globe className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-teal-400">Currency Integration</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Currency Exchange</h2>
              <p className="text-slate-300 mb-6">
                NFTs are no longer limited to cryptocurrency transactions. Our platform integrates fiat currency for seamless buying and selling - making it easier for newcomers to join the NFT ecosystem.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-slate-900/50 rounded-xl text-center">
                  <div className="text-2xl mb-2">$</div>
                  <div className="text-sm text-slate-400">USD</div>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl text-center">
                  <div className="text-2xl mb-2">ETH</div>
                  <div className="text-sm text-slate-400">Crypto</div>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl text-center">
                  <div className="text-2xl mb-2">PHP</div>
                  <div className="text-sm text-slate-400">Peso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section id="merchandise" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
                <ShoppingBag className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-yellow-400">Event Commerce</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Merchandise & Food Sales</h2>
              <p className="text-lg text-slate-300 mb-8">
                Seamless integration of NFTs with payment systems and inventory. The same NFT ticket used to enter the event becomes the APP for ordering food and merchandise inside the venue.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Integrated Inventory Management',
                  'Contactless Ordering',
                  'In-Seat Delivery',
                  'Better Fan Satisfaction',
                  'Staffing Efficiencies',
                  'Increased Sales',
                  'Eliminate Queue Lines',
                  'Quick Setup (Minutes)'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    </div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Merchandise Sales"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-6">
              <Crown className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-400">Loyalty Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership & Subscription Programs</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Grow your brand, build strong connections with loyal members, and monetize your content with NFT-based membership programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Music, title: 'Digital Assets', desc: 'Music, movies, exclusive content' },
              { icon: ShoppingBag, title: 'Physical Items', desc: 'Clothes, merchandise, collectibles' },
              { icon: Ticket, title: 'Event Access', desc: 'Special events, VIP experiences' },
              { icon: Star, title: 'Points & Rewards', desc: 'Earn, exchange, and redeem' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition text-center">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/30">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3">Compatible With</h4>
              <p className="text-slate-400">Airline miles programs, Club memberships, Brand loyalty programs, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join DigiTree.ph and be part of the future of digital ownership in the Philippines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-400 hover:to-purple-400 rounded-xl font-semibold text-lg transition shadow-lg">
              Get Started Today
            </button>
            <a
              href="https://seemynft.page"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-600 hover:border-slate-500 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2"
            >
              Visit SeeMyNFT.page <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-6 h-6 text-emerald-400" />
                <span className="text-xl font-bold">DigiTree.ph</span>
              </div>
              <p className="text-slate-400 text-sm">
                The future of digital ownership for music, entertainment, and beyond.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#music" className="block hover:text-white transition">Music & Entertainment</a>
                <a href="#ticketing" className="block hover:text-white transition">NFT Ticketing</a>
                <a href="#fanclubs" className="block hover:text-white transition">Fan Clubs</a>
                <a href="#art" className="block hover:text-white transition">Art</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#payments" className="block hover:text-white transition">Payments</a>
                <a href="#membership" className="block hover:text-white transition">Membership</a>
                <a href="#apps" className="block hover:text-white transition">Apps</a>
                <a href="https://seemynft.page" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">SeeMyNFT.page</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Philippines</p>
                <p>info@digitree.ph</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm">
              Powered by <a href="https://seemynft.page" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">SeeMyNFT.page</a> Technology
            </p>
            <p className="text-slate-500 text-sm">
              &copy; 2025 DigiTree.ph. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
