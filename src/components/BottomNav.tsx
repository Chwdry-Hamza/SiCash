"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["payment", "transfer", "crypto", "earn", "hub"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-6 left-0 right-0 flex items-center justify-center gap-4 px-6 z-50">
      {/* Main Navigation Bar */}
      <nav className="w-full max-w-380 bg-zinc-900/90 backdrop-blur-md rounded-2xl px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-amber-100 font-bold text-xl tracking-tight">
          
          <Link href="/" className="text-amber-100 font-bold text-2xl tracking-tight hover:text-white transition-colors">
          SICASH
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-32">
          <NavItem icon={<CardIcon />} label="How to pay" href="#payment" isActive={activeSection === "payment"} />
          <NavItem icon={<SendIcon />} label="Send" href="#transfer" isActive={activeSection === "transfer"} />
          <NavItem icon={<CryptoIcon />} label="Crypto" href="#crypto" isActive={activeSection === "crypto"} />
          <NavItem icon={<EarnIcon />} label="Earn" href="#earn" isActive={activeSection === "earn"} />
          <NavItem icon={<HubIcon />} label="Hub" href="#hub" isActive={activeSection === "hub"} />
        </div>

        {/* CTA Button */}
        <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="bg-linear-to-b from-zinc-200 to-zinc-400 text-black font-semibold px-8 py-3.5 text-base rounded-xl hover:from-zinc-100 hover:to-zinc-300 transition-all">
          GET SICASH APP
        </a>
      </nav>
    </div>
  );
}

function NavItem({ icon, label, href, isActive }: { icon: React.ReactNode; label: string; href: string; isActive: boolean }) {
  return (
    <a href={href} className={`flex flex-col items-center gap-2 transition-colors cursor-pointer ${isActive ? "text-white" : "text-zinc-300 hover:text-white"}`}>
      <span className="w-7 h-7">{icon}</span>
      <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>{label}</span>
    </a>
  );
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function CryptoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  );
}

function EarnIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="8" width="7" height="12" rx="1" />
      <rect x="14" y="4" width="7" height="16" rx="1" />
    </svg>
  );
}

function HubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
