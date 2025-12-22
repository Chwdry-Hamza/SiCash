"use client";

export default function HubSection() {
  return (
    <section id="hub" className="relative bg-black pt-24 pb-40 overflow-hidden">
      <div className="relative z-10 w-full max-w-380 mx-auto px-8">
        {/* Grid Layout - matching the image exactly */}
        <div className="flex gap-6 items-end">
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-[520px] shrink-0">
            {/* SICASH HUB - Large card */}
            <div className="bg-[#1a1a1a] rounded-3xl p-8 relative overflow-hidden h-72">
              {/* Floating Icons Background */}
              <div className="absolute inset-0">
                {/* Wallet */}
                <svg className="absolute top-16 right-24 w-12 h-12 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="2" y="6" width="20" height="14" rx="2" />
                  <path d="M16 14h.01" />
                  <path d="M2 10h20" />
                </svg>
                {/* Plane */}
                <svg className="absolute top-8 right-56 w-10 h-10 text-zinc-700 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                {/* Bitcoin */}
                <svg className="absolute top-28 right-8 w-10 h-10 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M9.5 2v2m5-2v2M9.5 20v2m5-2v2" />
                  <path d="M7 8h8.5a2.5 2.5 0 010 5H7V8z" />
                  <path d="M7 13h9.5a2.5 2.5 0 010 5H7v-5z" />
                </svg>
                {/* Gift */}
                <svg className="absolute top-44 right-32 w-8 h-8 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="8" width="18" height="4" rx="1" />
                  <path d="M12 8v13M3 12h18v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
                </svg>
                {/* Tag */}
                <svg className="absolute top-12 right-40 w-8 h-8 text-zinc-700 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                  <circle cx="7" cy="7" r="1" />
                </svg>
                {/* Credit card */}
                <svg className="absolute top-36 right-52 w-10 h-10 text-zinc-700 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
                {/* Percent */}
                <svg className="absolute top-52 right-16 w-7 h-7 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="6.5" cy="6.5" r="2.5" />
                  <circle cx="17.5" cy="17.5" r="2.5" />
                  <path d="M20 4L4 20" />
                </svg>
                {/* Shopping bag */}
                <svg className="absolute top-8 right-72 w-8 h-8 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <path d="M3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-4xl font-bold text-white mb-3">SICASH HUB</h3>
                <p className="text-zinc-500 text-base leading-relaxed max-w-xs">
                  Internal marketplace featuring a variety of services and
                  products with attractive cashback offers for SICASH users.
                </p>
              </div>
            </div>

            {/* Bottom row - Two small cards */}
            <div className="flex gap-6">
              {/* EASY REGISTRATION */}
              <div className="bg-[#1a1a1a] rounded-3xl p-6 relative overflow-hidden flex-1 h-72">
                {/* Fingerprint Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 140" className="w-48 h-64 opacity-50">
                    {/* Fingerprint curved lines */}
                    <path d="M50,20 Q30,40 30,70 Q30,100 50,120" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M50,25 Q35,45 35,70 Q35,95 50,115" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M50,30 Q40,50 40,70 Q40,90 50,110" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M50,35 Q45,55 45,70 Q45,85 50,105" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M50,20 Q70,40 70,70 Q70,100 50,120" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M50,25 Q65,45 65,70 Q65,95 50,115" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M50,30 Q60,50 60,70 Q60,90 50,110" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M50,35 Q55,55 55,70 Q55,85 50,105" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    {/* Center line */}
                    <path d="M50,40 L50,100" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    {/* Horizontal arcs */}
                    <path d="M25,50 Q50,35 75,50" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M28,60 Q50,48 72,60" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M30,70 Q50,60 70,70" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M28,80 Q50,90 72,80" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                    <path d="M25,90 Q50,105 75,90" fill="none" stroke="#3f3f46" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white">EASY REGISTRATION</h3>
                </div>
              </div>

              {/* SECURITY */}
              <div className="bg-[#1a1a1a] rounded-3xl p-6 relative overflow-hidden flex-1 h-72">
                {/* EU Badge */}
                <div className="absolute top-5 right-5 flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                  <span className="text-zinc-500 text-xs">EU entity & License</span>
                </div>

                {/* Lock Visual */}
                <div className="mt-12 flex items-start gap-4">
                  <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-base">
                      Lock all th<span className="text-zinc-600">...</span>
                    </p>
                  </div>
                </div>

                {/* Light streaks */}
                <div className="absolute bottom-24 right-0 w-40 h-8 bg-linear-to-l from-amber-500/20 via-amber-500/10 to-transparent blur-sm" />
                <div className="absolute bottom-20 right-4 w-32 h-4 bg-linear-to-l from-amber-500/15 via-amber-500/5 to-transparent blur-sm" />

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    WE CARE ABOUT YOUR
                    <br />
                    SECURITY
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Advanced encryption and two-factor authentication
                    for round-the-clock protection of accounts and
                    transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Human Customer Care with Phone */}
          <div className="bg-[#1a1a1a] rounded-3xl p-6 flex-1 relative overflow-hidden h-150">
            {/* Text Content */}
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-amber-100 leading-tight mb-4 italic">
                HUMAN
                <br />
                CUSTOMER CARE
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Whatever your needs or questions, we are
                here with real human customer care
                specialists to provide reliable support at
                every step of your financial journey with SICASH.
              </p>
            </div>

            {/* Phone Mockup */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="relative w-64 h-[380px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-zinc-900 rounded-t-[40px] border-[8px] border-b-0 border-zinc-800 shadow-2xl overflow-hidden">
                  {/* Screen Content */}
                  <div className="w-full h-full bg-[#0f0f0f] flex flex-col">
                    {/* Header */}
                    <div className="text-center py-4 border-b border-zinc-800">
                      <span className="text-white font-bold text-base tracking-widest">SUPPORT CHAT</span>
                    </div>

                    {/* Chat Header */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
                      <svg className="w-4 h-4 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                      <div className="w-8 h-8 bg-zinc-700 rounded-full" />
                      <span className="text-white text-xs font-medium">Marcel Wisniewski</span>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-3 space-y-3 overflow-hidden">
                      {/* User Message */}
                      <div className="flex justify-end">
                        <div className="bg-zinc-800 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                          <p className="text-zinc-300 text-[10px] leading-relaxed">Hello, I'm having trouble accessing my online banking account. It keeps giving me an error message.</p>
                        </div>
                      </div>
                      {/* Support Message */}
                      <div className="flex justify-start">
                        <div className="bg-zinc-700 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                          <p className="text-white text-[10px] leading-relaxed">I'm sorry to hear that. I'd be happy to assist you. Can you please provide me with your account number and some additional details so I can look into this for you?</p>
                        </div>
                      </div>
                      {/* User Message */}
                      <div className="flex justify-end">
                        <div className="bg-zinc-800 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                          <p className="text-zinc-300 text-[10px] leading-relaxed">Sure, my account number is 123456789. The error message says something about connectivity...</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-zinc-800 rounded-full mr-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Worldwide Financial Access with Globe */}
          <div className="bg-[#1a1a1a] rounded-3xl p-6 w-80 shrink-0 relative overflow-hidden h-150">
            {/* Text Content */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-amber-100 leading-tight mb-3 italic">
                WORLDWIDE
                <br />
                FINANCIAL ACCESS
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Gain access to financial services available in
                nearly every part of the world.
              </p>
            </div>

            {/* Globe with Avatars */}
            <div className="absolute bottom-0 right-0 left-0 h-[420px]">
              {/* 3D Globe wireframe */}
              <div className="absolute bottom-0 right-0 w-64 h-64">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Sphere outline */}
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#3f3f46" strokeWidth="0.5" />
                  {/* Horizontal latitude lines */}
                  <ellipse cx="100" cy="100" rx="90" ry="20" fill="none" stroke="#3f3f46" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="80" ry="18" fill="none" stroke="#3f3f46" strokeWidth="0.5" />
                  <ellipse cx="100" cy="130" rx="80" ry="18" fill="none" stroke="#3f3f46" strokeWidth="0.5" />
                  <ellipse cx="100" cy="50" rx="60" ry="12" fill="none" stroke="#3f3f46" strokeWidth="0.5" />
                  <ellipse cx="100" cy="150" rx="60" ry="12" fill="none" stroke="#3f3f46" strokeWidth="0.5" />
                  {/* Vertical longitude lines */}
                  <ellipse cx="100" cy="100" rx="20" ry="90" fill="none" stroke="#3f3f46" strokeWidth="0.5" />
                  <ellipse cx="100" cy="100" rx="50" ry="90" fill="none" stroke="#3f3f46" strokeWidth="0.5" />
                  <ellipse cx="100" cy="100" rx="70" ry="90" fill="none" stroke="#3f3f46" strokeWidth="0.5" />
                  {/* Dots scattered */}
                  {Array.from({ length: 30 }).map((_, i) => {
                    const seed = (i * 7 + 3) % 20;
                    const angle = (360 / 30) * i + seed;
                    const radian = (angle * Math.PI) / 180;
                    const radius = 70 + ((i * 13) % 20);
                    const x = 100 + radius * Math.cos(radian);
                    const y = 100 + radius * Math.sin(radian) * 0.4 + ((i * 17) % 60 - 30);
                    return <circle key={i} cx={x} cy={y} r="1" fill="#52525b" />;
                  })}
                </svg>
              </div>

              {/* Floating Avatar Cards */}
              <div className="absolute top-4 right-6 w-14 h-14 bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-zinc-700">
                <div className="w-full h-full bg-linear-to-br from-zinc-400 to-zinc-500" />
              </div>
              <div className="absolute top-0 right-28 w-12 h-12 bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-zinc-700">
                <div className="w-full h-full bg-linear-to-br from-amber-100 to-amber-200" />
              </div>
              <div className="absolute top-16 right-0 w-11 h-11 bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-zinc-700">
                <div className="w-full h-full bg-linear-to-br from-zinc-500 to-zinc-600" />
              </div>
              <div className="absolute top-32 right-20 w-12 h-12 bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-zinc-700">
                <div className="w-full h-full bg-linear-to-br from-rose-200 to-rose-300" />
              </div>
              <div className="absolute top-48 right-2 w-11 h-11 bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-zinc-700">
                <div className="w-full h-full bg-linear-to-br from-zinc-600 to-zinc-700" />
              </div>
              <div className="absolute top-64 right-32 w-12 h-12 bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-zinc-700">
                <div className="w-full h-full bg-linear-to-br from-amber-200 to-amber-300" />
              </div>
              <div className="absolute top-24 left-4 w-10 h-10 bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-zinc-700">
                <div className="w-full h-full bg-linear-to-br from-zinc-300 to-zinc-400" />
              </div>
              <div className="absolute top-52 left-8 w-11 h-11 bg-zinc-800 rounded-xl overflow-hidden shadow-xl border border-zinc-700">
                <div className="w-full h-full bg-linear-to-br from-zinc-400 to-zinc-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
