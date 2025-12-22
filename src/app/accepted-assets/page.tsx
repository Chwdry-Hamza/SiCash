import Link from "next/link";
import Footer from "@/components/Footer";

export default function AcceptedAssetsPage() {
  return (
    <main className="bg-black min-h-screen pb-20 md:pb-0">
      {/* Header */}
      <header className="relative z-10 w-full max-w-380 mx-auto px-8 py-8 flex items-center justify-between">
        <Link href="/" className="text-amber-100 font-bold text-2xl tracking-tight hover:text-white transition-colors">
          SICASH
        </Link>
        <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
          English
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="w-full max-w-380 mx-auto px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-amber-100">ACCEPTED</span>{" "}
            <span className="text-white">ASSETS</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl">
            SICASH supports a wide range of cryptocurrencies and fiat currencies for seamless transactions and management.
          </p>
        </div>
      </section>

      {/* Cryptocurrencies Section */}
      <section className="py-20">
        <div className="w-full max-w-380 mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-12">CRYPTOCURRENCIES</h2>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
            {/* USDT */}
            <a href="https://coinmarketcap.com/currencies/tether/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-teal-400 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-3xl font-bold">₮</span>
              </div>
              <p className="text-zinc-400 text-sm">USDT</p>
            </a>

            {/* BTC */}
            <a href="https://coinmarketcap.com/currencies/bitcoin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-3xl font-bold">₿</span>
              </div>
              <p className="text-zinc-400 text-sm">BTC</p>
            </a>

            {/* ETH */}
            <a href="https://coinmarketcap.com/currencies/ethereum/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-zinc-300 rounded-full flex items-center justify-center mb-3">
                <span className="text-zinc-700 text-3xl">◆</span>
              </div>
              <p className="text-zinc-400 text-sm">ETH</p>
            </a>

            {/* USDC */}
            <a href="https://coinmarketcap.com/currencies/usd-coin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl font-bold">$</span>
              </div>
              <p className="text-zinc-400 text-sm">USDC</p>
            </a>

            {/* ALGO */}
            <a href="https://coinmarketcap.com/currencies/algorand/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-transparent border-2 border-zinc-600 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <p className="text-zinc-400 text-sm">ALGO</p>
            </a>

            {/* ADA */}
            <a href="https://coinmarketcap.com/currencies/cardano/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-zinc-200 rounded-full flex items-center justify-center mb-3">
                <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="6" r="1.5" />
                  <circle cx="12" cy="18" r="1.5" />
                  <circle cx="6" cy="9" r="1.5" />
                  <circle cx="18" cy="9" r="1.5" />
                  <circle cx="6" cy="15" r="1.5" />
                  <circle cx="18" cy="15" r="1.5" />
                </svg>
              </div>
              <p className="text-zinc-400 text-sm">ADA</p>
            </a>

            {/* SOL */}
            <a href="https://coinmarketcap.com/currencies/solana/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-linear-to-br from-purple-500 via-teal-400 to-teal-300 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl font-bold">=</span>
              </div>
              <p className="text-zinc-400 text-sm">SOL</p>
            </a>

            {/* DOGE */}
            <a href="https://coinmarketcap.com/currencies/dogecoin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mb-3">
                <span className="text-amber-900 text-2xl font-bold">D</span>
              </div>
              <p className="text-zinc-400 text-sm">DOGE</p>
            </a>

            {/* GRT */}
            <a href="https://coinmarketcap.com/currencies/the-graph/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <p className="text-zinc-400 text-sm">GRT</p>
            </a>

            {/* LTC */}
            <a href="https://coinmarketcap.com/currencies/litecoin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-3xl font-bold">Ł</span>
              </div>
              <p className="text-zinc-400 text-sm">LTC</p>
            </a>

            {/* BCH */}
            <a href="https://coinmarketcap.com/currencies/bitcoin-cash/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-3xl font-bold">₿</span>
              </div>
              <p className="text-zinc-400 text-sm">BCH</p>
            </a>

            {/* TRX */}
            <a href="https://coinmarketcap.com/currencies/tron/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl font-bold">T</span>
              </div>
              <p className="text-zinc-400 text-sm">TRX</p>
            </a>

            {/* TON */}
            <a href="https://coinmarketcap.com/currencies/toncoin/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-zinc-900 hover:border hover:border-zinc-700 transition-all">
              <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-2xl font-bold">T</span>
              </div>
              <p className="text-zinc-400 text-sm">TON</p>
            </a>
          </div>
        </div>
      </section>

      {/* Fiat Currencies Section */}
      <section className="py-20">
        <div className="w-full max-w-380 mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-12">FIAT CURRENCIES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* EUR */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-amber-200/50 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-3xl font-bold">€</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">Euro</h3>
              <p className="text-zinc-500 text-lg">EUR</p>
              <p className="text-zinc-600 text-sm mt-4">IBAN accounts available</p>
            </div>

            {/* USD */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-amber-200/50 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-3xl font-bold">$</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">US Dollar</h3>
              <p className="text-zinc-500 text-lg">USD</p>
              <p className="text-zinc-600 text-sm mt-4">IBAN accounts available</p>
            </div>

            {/* GBP */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-amber-200/50 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-3xl font-bold">£</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">British Pound</h3>
              <p className="text-zinc-500 text-lg">GBP</p>
              <p className="text-zinc-600 text-sm mt-4">Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Networks Section */}
      <section className="py-20">
        <div className="w-full max-w-380 mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-12">SUPPORTED NETWORKS</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Ethereum Network */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-amber-200/50 transition-colors">
              <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">◇</span>
              </div>
              <h3 className="text-white font-bold">Ethereum</h3>
              <p className="text-zinc-500 text-sm">ERC-20</p>
            </div>

            {/* Tron Network */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-amber-200/50 transition-colors">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">T</span>
              </div>
              <h3 className="text-white font-bold">Tron</h3>
              <p className="text-zinc-500 text-sm">TRC-20</p>
            </div>

            {/* Bitcoin Network */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-amber-200/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">₿</span>
              </div>
              <h3 className="text-white font-bold">Bitcoin</h3>
              <p className="text-zinc-500 text-sm">Native</p>
            </div>

            {/* Polygon Network */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-amber-200/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-white font-bold">Polygon</h3>
              <p className="text-zinc-500 text-sm">MATIC</p>
            </div>

            {/* BSC Network */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-amber-200/50 transition-colors">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-xl font-bold">B</span>
              </div>
              <h3 className="text-white font-bold">BNB Chain</h3>
              <p className="text-zinc-500 text-sm">BEP-20</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20">
        <div className="w-full max-w-380 mx-auto px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Important Information</h2>

            <div className="space-y-6 text-zinc-400">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg">Minimum deposit and withdrawal amounts may vary depending on the asset and network selected.</p>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg">Always double-check the network you are using when sending or receiving crypto assets.</p>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg">SICASH reserves the right to add or remove supported assets at any time.</p>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-amber-200/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg">For large OTC trades, please contact our dedicated OTC desk for personalized rates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="w-full max-w-380 mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-zinc-400 text-xl mb-10 max-w-2xl mx-auto">
            Open your SICASH account today and start managing your fiat and crypto assets in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/otc-desk" className="px-8 py-4 bg-amber-200 hover:bg-amber-100 text-black font-bold text-sm tracking-wider rounded transition-colors">
              EXPLORE OTC DESK
            </Link>
            <Link href="/about" className="px-8 py-4 bg-zinc-700 hover:bg-zinc-600 text-white font-bold text-sm tracking-wider rounded transition-colors">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Bottom Nav - Only visible on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800 px-4 py-3 flex items-center justify-between md:hidden z-50">
        <Link href="/" className="text-white font-black text-xl tracking-tight">
          SICASH
        </Link>
        <a
          href="#"
          className="px-6 py-2.5 bg-linear-to-b from-zinc-400 to-zinc-600 text-zinc-900 font-bold text-sm tracking-wider rounded"
        >
          GET THE APP
        </a>
      </div>
    </main>
  );
}
