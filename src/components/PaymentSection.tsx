"use client";

export default function PaymentSection() {
  return (
    <section id="payment" className="relative py-32 overflow-hidden">
      {/* Background gradient - black to cream */}
      <div className="absolute inset-0 bg-black" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-amber-900/20 rounded-full blur-3xl" />

      {/* Bottom gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-[#f5f0e6]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-380 mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-zinc-500 text-sm tracking-widest uppercase mb-4">
            FIAT AND CRYPTO
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            CHOOSE HOW TO PAY
          </h2>
          <p className="text-xl text-zinc-400">
            Switch between fiat and crypto in a second.
          </p>
        </div>

        {/* Card Display */}
        <div className="flex flex-col items-center">
          {/* Credit Card */}
          <div className="relative w-120 h-72 perspective-1000">
            <div className="w-full h-full bg-zinc-900 rounded-3xl shadow-2xl transform rotate-x-12 border border-zinc-800">
              {/* Card Content */}
              <div className="p-8 h-full flex flex-col justify-between">
                {/* Logo */}
                <div className="text-amber-100 font-bold text-xl">SICASH</div>

                {/* Balance */}
                <div className="flex items-center justify-between">
                  <span className="text-white text-4xl font-light tracking-wide">16 623 USDT</span>
                  {/* Mastercard Logo */}
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full opacity-90" />
                    <div className="w-10 h-10 bg-amber-400 rounded-full opacity-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Switch Button */}
          <div className="mt-12">
            <button className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-full px-6 py-4 hover:bg-zinc-800 transition-colors">
              <span className="text-white text-lg">Switch to EUR</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-zinc-900 font-bold text-sm">₮</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
