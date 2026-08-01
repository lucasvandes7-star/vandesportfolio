import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#EAE3D2] border-t border-[#EAE3D2]/15 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs uppercase tracking-widest text-[#EAE3D2]/70">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#EAE3D2]/30 flex items-center justify-center font-bebas text-base text-[#EAE3D2]">
            LV
          </div>
          <span className="font-bebas text-lg tracking-wider text-[#EAE3D2]">
            LUCAS VANDES STUDIO
          </span>
        </div>

        <div className="text-center text-[11px] text-[#EAE3D2]/50">
          © 2026 LUCAS VANDES · ENGENHARIA WEB & CRMS. TODOS OS DIREITOS RESERVADOS.
        </div>

        <div className="text-[11px] text-[#EAE3D2]/70 font-semibold">
          WWW.VANDESPORTFOLIO.COM.BR
        </div>

      </div>
    </footer>
  );
}
