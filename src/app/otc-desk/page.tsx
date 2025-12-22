import Link from "next/link";
import Footer from "@/components/Footer";

export default function OTCDeskPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-amber-100/50" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-amber-50 via-amber-100/30 to-transparent" />

        {/* Header */}
        <header className="relative z-10 w-full max-w-410 mx-auto px-8 py-8">
          <Link href="/" className="text-white font-black text-2xl tracking-tight hover:text-zinc-300 transition-colors">
            SICASH
          </Link>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 w-full mx-auto px-8 pt-16 pb-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight whitespace-nowrap">
            <span className="block">SECURE OTC TRADING FOR</span>
            <span className="block">YOUR BUSINESS</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10">
            Open IBAN accounts in EUR, USD and manage transactions, and take full control of your finances
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#demo"
              className="px-10 py-4 bg-zinc-600/60 hover:bg-zinc-500/60 text-white font-bold text-sm tracking-wider backdrop-blur-sm rounded transition-colors min-w-[200px]"
            >
              REQUEST A DEMO
            </Link>
            <Link
              href="#account"
              className="px-10 py-4 bg-zinc-700/60 hover:bg-zinc-600/60 text-white font-bold text-sm tracking-wider backdrop-blur-sm rounded transition-colors min-w-[200px]"
            >
              OPEN AN ACCOUNT
            </Link>
          </div>
        </div>

        {/* Crypto Coins */}
        {/* Tether - Top Right */}
        <div className="absolute top-[35%] right-[12%] w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 z-20">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-500 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex items-center justify-center transform -rotate-12 border-2 border-zinc-300/50">
            <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-b from-zinc-300 to-zinc-400 flex items-center justify-center">
              <span className="text-zinc-600 font-bold text-xl md:text-2xl">₮</span>
            </div>
          </div>
        </div>

        {/* Bitcoin - Right */}
        <div className="absolute top-[42%] right-[5%] w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 z-20">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex items-center justify-center border-4 border-amber-400/50">
            <div className="w-[88%] h-[88%] rounded-full bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-amber-900 font-bold text-4xl md:text-5xl">₿</span>
            </div>
          </div>
        </div>

        {/* Binance - Right Middle */}
        <div className="absolute top-[55%] right-[10%] w-16 h-16 md:w-22 md:h-22 lg:w-24 lg:h-24 z-20">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-900 shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex items-center justify-center border-2 border-zinc-500/50">
            <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 flex items-center justify-center">
              <span className="text-amber-400 font-bold text-2xl md:text-3xl">◆</span>
            </div>
          </div>
        </div>

        {/* Gold Coin (IOTA style) - Center */}
        <div className="absolute top-[58%] left-1/2 -translate-x-1/2 w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 z-20">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-800 shadow-[0_15px_50px_rgba(0,0,0,0.6)] flex items-center justify-center transform rotate-[15deg] border-4 border-amber-400/40">
            <div className="w-[92%] h-[92%] rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1.5 md:gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-amber-800/50 rounded-sm shadow-inner" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ethereum - Left */}
        <div className="absolute top-[60%] left-[18%] w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 z-20">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-white via-zinc-100 to-zinc-300 shadow-[0_12px_45px_rgba(0,0,0,0.5)] flex items-center justify-center border-4 border-white/60">
            <div className="w-[90%] h-[90%] rounded-full bg-gradient-to-b from-white to-zinc-200 flex items-center justify-center">
              <span className="text-zinc-600 text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">◇</span>
            </div>
          </div>
        </div>

        {/* Ripple - Right Bottom */}
        <div className="absolute top-[72%] right-[18%] w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 z-20">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex items-center justify-center transform -rotate-[15deg] border-3 border-zinc-300/40">
            <div className="w-[90%] h-[90%] rounded-full bg-gradient-to-b from-zinc-300 to-zinc-500 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-zinc-600 shadow-inner" />
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-zinc-600 shadow-inner" />
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-zinc-600 shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200 py-24">
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Side - Features */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-16 leading-tight italic">
                WE SIMPLIFY FIAT-CRYPTO<br />OPERATIONS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Feature 1 */}
                <div>
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">IBAN ACCOUNTS IN EUR OR USD</h3>
                  <p className="text-zinc-600 text-sm">Safe and convenient accounts tailored to your business need</p>
                </div>

                {/* Feature 2 */}
                <div>
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">CRYPTO WALLETS FOR USDT, USDC, BTC AND ETH</h3>
                  <p className="text-zinc-600 text-sm">Secure and easy wallet setup for seamless transactions</p>
                </div>

                {/* Feature 3 */}
                <div>
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">SIMPLE FIAT-CRYPTO EXCHANGE</h3>
                  <p className="text-zinc-600 text-sm">Fast, transparent transactions with no hidden fees</p>
                </div>

                {/* Feature 4 */}
                <div>
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">UNIFIED MANAGEMENT PLATFORM</h3>
                  <p className="text-zinc-600 text-sm">A single, intuitive platform to handle everything</p>
                </div>
              </div>
            </div>

            {/* Right Side - Laptop Mockup */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl">
                {/* Laptop Frame */}
                <div className="relative">
                  {/* Screen */}
                  <div className="bg-zinc-900 rounded-t-xl p-2 shadow-2xl">
                    <div className="bg-zinc-800 rounded-lg p-4 aspect-[16/10]">
                      {/* Dashboard Content */}
                      <div className="h-full flex flex-col">
                        {/* Top Stats */}
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-zinc-500 text-xs">Balance</p>
                            <p className="text-white text-2xl font-bold">254,596<span className="text-lg">04</span></p>
                          </div>
                          <div className="text-right">
                            <p className="text-green-400 text-lg font-bold">32.5</p>
                            <p className="text-zinc-400 text-xs">ETH</p>
                          </div>
                        </div>
                        {/* Chart Area */}
                        <div className="flex-1 flex items-end">
                          <svg className="w-full h-20" viewBox="0 0 200 50">
                            <path d="M0,40 Q30,35 50,25 T100,30 T150,15 T200,20" fill="none" stroke="#ef4444" strokeWidth="2"/>
                          </svg>
                        </div>
                        {/* Bottom Stats */}
                        <div className="flex justify-between mt-4">
                          <div className="text-center">
                            <p className="text-white font-bold">6953.2</p>
                            <p className="text-zinc-500 text-xs">EUR</p>
                          </div>
                          <div className="text-center">
                            <p className="text-white font-bold">EUR</p>
                            <p className="text-zinc-500 text-xs">Currency</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="bg-gradient-to-b from-zinc-300 to-zinc-400 h-4 rounded-b-xl mx-8"></div>
                  <div className="bg-gradient-to-b from-zinc-400 to-zinc-300 h-2 rounded-b-lg mx-16"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
