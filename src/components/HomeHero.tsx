"use client";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-amber-900/20 rounded-full blur-3xl" />

      {/* Top Navigation */}
      <nav className="relative z-10 w-full max-w-380 mx-auto flex items-center justify-between px-8 py-6">
        <div className="text-amber-100 font-bold text-2xl tracking-tight">
                <Link href="/" className="text-amber-100 font-bold text-2xl tracking-tight hover:text-white transition-colors">
          SICASH
          </Link>
        </div>
        <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
          English
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-380 mx-auto px-8 pt-20 pb-32 flex items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold text-white leading-tight mb-6">
            THE MONEY APP
          </h1>
          <p className="text-xl text-zinc-400 mb-10">
            Send, spend, earn money & crypto in one app
          </p>
          <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="inline-block bg-linear-to-b from-zinc-100 to-zinc-300 text-black font-semibold px-8 py-4 text-lg rounded-xl hover:from-white hover:to-zinc-200 transition-all">
            GET SICASH APP
          </a>
        </div>

        {/* Right Content - Phone & Cards */}
        <div className="relative w-150 h-150">
          {/* Phone Mockup */}
          <div className="absolute top-0 right-20 w-70 h-140 bg-zinc-900 rounded-[40px] border-4 border-zinc-700 shadow-2xl overflow-hidden">
            {/* Phone Screen */}
            <div className="w-full h-full bg-linear-to-b from-zinc-800 to-black p-6 flex flex-col items-center justify-center">
              <div className="text-amber-100 font-bold text-3xl mb-2">SICASH</div>
              <div className="text-zinc-500 text-sm">THE MONEY APP</div>
            </div>
            {/* Phone Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
          </div>

          {/* Black Card */}
          <div className="absolute top-20 left-0 w-55 h-35 bg-linear-to-br from-zinc-800 to-zinc-900 rounded-2xl shadow-xl transform -rotate-12 border border-zinc-700">
            <div className="p-4">
              <div className="text-amber-100 font-bold text-sm mb-8">SICASH</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-6 bg-amber-400 rounded" />
                <div className="w-6 h-6 bg-zinc-600 rounded-full" />
              </div>
            </div>
          </div>

          {/* Silver Card */}
          <div className="absolute bottom-20 right-0 w-55 h-35 bg-linear-to-br from-zinc-300 to-zinc-500 rounded-2xl shadow-xl transform rotate-12">
            <div className="p-4">
              <div className="text-zinc-800 font-bold text-sm mb-8">SICASH</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-6 bg-amber-500 rounded" />
                <div className="w-6 h-6 bg-zinc-400 rounded-full" />
              </div>
              <div className="absolute bottom-4 left-4 text-zinc-600 text-xs tracking-wider">
                CARD HOLDER
              </div>
            </div>
          </div>

          {/* Currency Labels */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
            <CurrencyLabel icon="$" label="USD" opacity="opacity-50" />
            <CurrencyLabel icon="◆" label="ETH" />
            <CurrencyLabel icon="€" label="EUR" active />
            <CurrencyLabel icon="₮" label="USDT" />
            <CurrencyLabel icon="₿" label="BTC" opacity="opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CurrencyLabel({ icon, label, active, opacity }: { icon: string; label: string; active?: boolean; opacity?: string }) {
  return (
    <div className={`flex items-center gap-2 ${opacity || ''} ${active ? 'text-white' : 'text-zinc-400'}`}>
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
