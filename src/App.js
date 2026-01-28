import React, { useState } from 'react';
import {
  Music, Users, Wallet, ArrowRight, ChevronDown, Ticket,
  PieChart, Palette, Film, Smartphone, Heart, CreditCard,
  ShoppingBag, Globe, Crown, Play, Shield, Zap, Star,
  Menu, X, ExternalLink
} from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

// Language Switcher Component
function LanguageSwitcher() {
  const { language, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg text-sm transition"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLang?.nativeName}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 py-2 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 min-w-[140px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-800 transition ${
                  language === lang.code ? 'text-emerald-400' : 'text-slate-300'
                }`}
              >
                {lang.nativeName}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, tArray } = useLanguage();

  const services = [
    {
      id: 'music',
      titleKey: 'services.items.music.title',
      icon: Music,
      color: 'emerald',
      size: 'large',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
      shortDescKey: 'services.items.music.shortDesc',
    },
    {
      id: 'ticketing',
      titleKey: 'services.items.ticketing.title',
      icon: Ticket,
      color: 'purple',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80',
      shortDescKey: 'services.items.ticketing.shortDesc',
    },
    {
      id: 'fanclubs',
      titleKey: 'services.items.fanclubs.title',
      icon: Heart,
      color: 'pink',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80',
      shortDescKey: 'services.items.fanclubs.shortDesc',
    },
    {
      id: 'fractional',
      titleKey: 'services.items.fractional.title',
      icon: PieChart,
      color: 'blue',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
      shortDescKey: 'services.items.fractional.shortDesc',
    },
    {
      id: 'art',
      titleKey: 'services.items.art.title',
      icon: Palette,
      color: 'amber',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=80',
      shortDescKey: 'services.items.art.shortDesc',
    },
    {
      id: 'movies',
      titleKey: 'services.items.movies.title',
      icon: Film,
      color: 'red',
      size: 'large',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
      shortDescKey: 'services.items.movies.shortDesc',
    },
    {
      id: 'apps',
      titleKey: 'services.items.apps.title',
      icon: Smartphone,
      color: 'cyan',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      shortDescKey: 'services.items.apps.shortDesc',
    },
    {
      id: 'sponsorship',
      titleKey: 'services.items.sponsorship.title',
      icon: Star,
      color: 'orange',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
      shortDescKey: 'services.items.sponsorship.shortDesc',
    },
    {
      id: 'payments',
      titleKey: 'services.items.payments.title',
      icon: CreditCard,
      color: 'green',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
      shortDescKey: 'services.items.payments.shortDesc',
    },
    {
      id: 'merchandise',
      titleKey: 'services.items.merchandise.title',
      icon: ShoppingBag,
      color: 'yellow',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
      shortDescKey: 'services.items.merchandise.shortDesc',
    },
    {
      id: 'currency',
      titleKey: 'services.items.currency.title',
      icon: Globe,
      color: 'teal',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&q=80',
      shortDescKey: 'services.items.currency.shortDesc',
    },
    {
      id: 'membership',
      titleKey: 'services.items.membership.title',
      icon: Crown,
      color: 'indigo',
      size: 'large',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
      shortDescKey: 'services.items.membership.shortDesc',
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
                <span className="text-[10px] text-slate-500 -mt-1">{t('nav.poweredBy')}</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-slate-300 hover:text-white transition text-sm">{t('nav.services')}</a>
              <a href="#music" className="text-slate-300 hover:text-white transition text-sm">{t('nav.forArtists')}</a>
              <a href="#fanclubs" className="text-slate-300 hover:text-white transition text-sm">{t('nav.forFans')}</a>
              <a href="https://seemynft.page" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition text-sm flex items-center gap-1">
                {t('nav.platform')} <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <button className="hidden sm:block px-4 py-2 bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-400 hover:to-purple-400 rounded-lg font-medium transition text-sm">
                {t('nav.getStarted')}
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
              <a href="#services" className="block text-slate-300 hover:text-white transition">{t('nav.services')}</a>
              <a href="#music" className="block text-slate-300 hover:text-white transition">{t('nav.forArtists')}</a>
              <a href="#fanclubs" className="block text-slate-300 hover:text-white transition">{t('nav.forFans')}</a>
              <a href="https://seemynft.page" target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition">
                {t('nav.platform')}
              </a>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg font-medium">
                {t('nav.getStarted')}
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
            <span className="text-sm text-emerald-400">{t('hero.badge')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('hero.titleLine1')}
            </span>
            <br />
            <span className="text-white">{t('hero.titleLine2')}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/25">
              {t('hero.exploreServices')} <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2">
              <Play className="w-5 h-5" /> {t('hero.watchDemo')}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">90%+</div>
              <div className="text-sm text-slate-400">{t('hero.stats.artistRevenue')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">12+</div>
              <div className="text-sm text-slate-400">{t('hero.stats.integratedServices')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400">100%</div>
              <div className="text-sm text-slate-400">{t('hero.stats.trueOwnership')}</div>
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
              {t('services.title')}
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {t('services.description')}
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
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {t(service.shortDescKey)}
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
                <span className="text-sm text-emerald-400">{t('musicSection.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('musicSection.title')}
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                {t('musicSection.description')}
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('musicSection.features.ownership.title')}</h4>
                    <p className="text-slate-400 text-sm">{t('musicSection.features.ownership.description')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('musicSection.features.control.title')}</h4>
                    <p className="text-slate-400 text-sm">{t('musicSection.features.control.description')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('musicSection.features.beyond.title')}</h4>
                    <p className="text-slate-400 text-sm">{t('musicSection.features.beyond.description')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('musicSection.features.crowdfund.title')}</h4>
                    <p className="text-slate-400 text-sm">{t('musicSection.features.crowdfund.description')}</p>
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
                <div className="text-sm text-slate-400">{t('musicSection.goesToArtists')}</div>
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
                <div className="text-lg font-bold text-purple-400">{t('ticketing.stapp')}</div>
                <div className="text-xs text-slate-400">{t('ticketing.smartTicketApp')}</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
                <Ticket className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400">{t('ticketing.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('ticketing.title')}
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                {t('ticketing.description')}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {tArray('ticketing.features').map((feature, index) => (
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
              <span className="text-sm text-pink-400">{t('fanClubs.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('fanClubs.title')}</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {t('fanClubs.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition">
              <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                <Crown className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('fanClubs.cards.membership.title')}</h3>
              <p className="text-slate-400">
                {t('fanClubs.cards.membership.description')}
              </p>
            </div>

            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition">
              <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('fanClubs.cards.community.title')}</h3>
              <p className="text-slate-400">
                {t('fanClubs.cards.community.description')}
              </p>
            </div>

            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition">
              <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('fanClubs.cards.scarcity.title')}</h3>
              <p className="text-slate-400">
                {t('fanClubs.cards.scarcity.description')}
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
                <span className="text-sm text-blue-400">{t('fractionalOwnership.badge')}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('fractionalOwnership.title')}</h2>
              <p className="text-slate-300 mb-6">
                {t('fractionalOwnership.description')}
              </p>
              <div className="space-y-3">
                {tArray('fractionalOwnership.items').map((item) => (
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
                <span className="text-sm text-amber-400">{t('artSection.badge')}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('artSection.title')}</h2>
              <p className="text-slate-300 mb-6">
                {t('artSection.description')}
              </p>
              <div className="space-y-3">
                {tArray('artSection.items').map((item) => (
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
                <span className="text-sm text-red-400">{t('movies.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('movies.title')}</h2>
              <p className="text-lg text-slate-300 mb-8">
                {t('movies.description')}
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('movies.features.distribution.title')}</h4>
                    <p className="text-slate-400 text-sm">{t('movies.features.distribution.description')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('movies.features.royalties.title')}</h4>
                    <p className="text-slate-400 text-sm">{t('movies.features.royalties.description')}</p>
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
                <span className="text-sm text-cyan-400">{t('apps.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('apps.title')}</h2>
              <p className="text-lg text-slate-300 mb-8">
                {t('apps.description')}
              </p>
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
                <h4 className="font-semibold mb-4 text-cyan-400">{t('apps.tokenization')}</h4>
                <p className="text-slate-400 mb-4">
                  {t('apps.tokenizationDesc')}
                </p>
                <div className="flex items-center gap-3 p-4 bg-cyan-500/10 rounded-xl">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <span className="font-medium">{t('apps.avoidTax')}</span>
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
              <span className="text-sm text-orange-400">{t('sponsorship.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('sponsorship.title')}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t('sponsorship.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="font-semibold mb-3">{t('sponsorship.cards.recognition.title')}</h4>
              <p className="text-slate-400 text-sm">{t('sponsorship.cards.recognition.description')}</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="font-semibold mb-3">{t('sponsorship.cards.resale.title')}</h4>
              <p className="text-slate-400 text-sm">{t('sponsorship.cards.resale.description')}</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="font-semibold mb-3">{t('sponsorship.cards.flexible.title')}</h4>
              <p className="text-slate-400 text-sm">{t('sponsorship.cards.flexible.description')}</p>
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
                <span className="text-sm text-green-400">{t('payments.badge')}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('payments.title')}</h2>
              <p className="text-slate-300 mb-6">
                {t('payments.description')}
              </p>
              <div className="space-y-4">
                {tArray('payments.features').map((item) => (
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
                <span className="text-sm text-teal-400">{t('currency.badge')}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('currency.title')}</h2>
              <p className="text-slate-300 mb-6">
                {t('currency.description')}
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-slate-900/50 rounded-xl text-center">
                  <div className="text-2xl mb-2">$</div>
                  <div className="text-sm text-slate-400">{t('currency.usd')}</div>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl text-center">
                  <div className="text-2xl mb-2">ETH</div>
                  <div className="text-sm text-slate-400">{t('currency.crypto')}</div>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl text-center">
                  <div className="text-2xl mb-2">PHP</div>
                  <div className="text-sm text-slate-400">{t('currency.peso')}</div>
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
                <span className="text-sm text-yellow-400">{t('merchandise.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('merchandise.title')}</h2>
              <p className="text-lg text-slate-300 mb-8">
                {t('merchandise.description')}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {tArray('merchandise.features').map((feature, index) => (
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
              <span className="text-sm text-indigo-400">{t('membership.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('membership.title')}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t('membership.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Music, titleKey: 'membership.cards.digital.title', descKey: 'membership.cards.digital.description' },
              { icon: ShoppingBag, titleKey: 'membership.cards.physical.title', descKey: 'membership.cards.physical.description' },
              { icon: Ticket, titleKey: 'membership.cards.events.title', descKey: 'membership.cards.events.description' },
              { icon: Star, titleKey: 'membership.cards.rewards.title', descKey: 'membership.cards.rewards.description' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition text-center">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h4 className="font-semibold mb-2">{t(item.titleKey)}</h4>
                  <p className="text-slate-400 text-sm">{t(item.descKey)}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/30">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3">{t('membership.compatible')}</h4>
              <p className="text-slate-400">{t('membership.compatibleDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-400 hover:to-purple-400 rounded-xl font-semibold text-lg transition shadow-lg">
              {t('cta.getStarted')}
            </button>
            <a
              href="https://seemynft.page"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-600 hover:border-slate-500 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2"
            >
              {t('cta.visitPlatform')} <ExternalLink className="w-5 h-5" />
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
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.servicesTitle')}</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#music" className="block hover:text-white transition">{t('footer.servicesLinks.music')}</a>
                <a href="#ticketing" className="block hover:text-white transition">{t('footer.servicesLinks.ticketing')}</a>
                <a href="#fanclubs" className="block hover:text-white transition">{t('footer.servicesLinks.fanClubs')}</a>
                <a href="#art" className="block hover:text-white transition">{t('footer.servicesLinks.art')}</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.platformTitle')}</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#payments" className="block hover:text-white transition">{t('footer.platformLinks.payments')}</a>
                <a href="#membership" className="block hover:text-white transition">{t('footer.platformLinks.membership')}</a>
                <a href="#apps" className="block hover:text-white transition">{t('footer.platformLinks.apps')}</a>
                <a href="https://seemynft.page" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">SeeMyNFT.page</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer.contactTitle')}</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>{t('footer.country')}</p>
                <p>info@digitree.ph</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm">
              {t('footer.poweredBy')} <a href="https://seemynft.page" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">SeeMyNFT.page</a> {t('footer.technology')}
            </p>
            <p className="text-slate-500 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
