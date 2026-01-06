import React from 'react';

const PromoBar: React.FC = () => {
  return (
    <div className="premium-bar text-emerald-50 text-[10px] sm:text-[11px] py-2.5 px-4 font-semibold tracking-[0.15em] text-center uppercase border-b border-emerald-800 leading-relaxed">
      <span>CUKROS NASIK HELYETT FRISS ROSTI&nbsp;•</span>
      
      <br className="block sm:hidden" />
      <span className="hidden sm:inline">&nbsp;&nbsp;&nbsp;</span>

      <span>5 FÉLE NYERS ZÖLDSÉG&nbsp;•</span>

      <br className="block lg:hidden" />
      <span className="hidden lg:inline">&nbsp;&nbsp;&nbsp;</span>

      <span className="silver-highlight">2 NAP MOSOLY A CSAPATNAK 🫜🥕☀️</span>
    </div>
  );
};

export default PromoBar;