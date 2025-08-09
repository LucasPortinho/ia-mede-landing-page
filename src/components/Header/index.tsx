import React from 'react'
import IaMedePng from '../../assets/logo-ia-mede-horizontal.png'

const SpecialButton = ({ onClick, text }: { onClick:  React.MouseEventHandler<HTMLButtonElement>, text: string}) => (
    <button className="relative cursor-pointer overflow-hidden px-4 py-2 rounded-lg text-sm font-medium text-white border border-blue-400/30 group" onClick={onClick}>
      {/* Fundo base escuro */}
      <div className="absolute inset-0 bg-slate-900"></div>
      
      {/* Camada de lava azul base */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-80"></div>
      
      {/* Bolhas de lava flutuantes */}
      <div className="absolute inset-0">
        <div className="absolute w-8 h-8 bg-blue-400/60 rounded-full blur-sm animate-[float_4s_ease-in-out_infinite] top-1 left-2"></div>
        <div className="absolute w-6 h-6 bg-cyan-300/50 rounded-full blur-sm animate-[float_3s_ease-in-out_infinite_0.5s] top-3 right-3"></div>
        <div className="absolute w-4 h-4 bg-blue-300/70 rounded-full blur-sm animate-[float_3.5s_ease-in-out_infinite_1s] bottom-2 left-1"></div>
        <div className="absolute w-5 h-5 bg-cyan-400/40 rounded-full blur-sm animate-[float_2.8s_ease-in-out_infinite_1.5s] bottom-1 right-2"></div>
      </div>
      
      {/* Ondas de lava */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-transparent to-transparent animate-[wave_3s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/40 via-transparent to-transparent animate-[wave_4s_ease-in-out_infinite_0.8s]"></div>
      </div>
      
      {/* Pulsação geral */}
      <div className="absolute inset-0 bg-blue-400/20 animate-[pulse_2s_ease-in-out_infinite]"></div>
      
      {/* Brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Texto do botão */}
      <span className="relative z-10 drop-shadow-sm">{text}</span>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-8px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes wave {
          0%, 100% { 
            transform: translateX(-10px);
            opacity: 0.6;
          }
          50% { 
            transform: translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </button>
)


export const Header = ({ scrollY, emailInputRef }: { scrollY: number, emailInputRef: React.RefObject<HTMLInputElement | null> }) => {
  const handleClick = () => {
    const input = emailInputRef.current

    if (!input) return;

    const rect = input.getBoundingClientRect();
    const isVisible =
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

    if (isVisible) {
      input.focus();
    } else {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => input.focus(), 500); 
    }
  }
    return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-8 py-4 relative">
          <div className="flex justify-between items-center">
            {/* Logo que pode crescer */}
            <div className="flex-shrink-0">
                <img 
                  src={IaMedePng} 
                  alt="IA Mede Logo" 
                  style={{ marginTop: -6 }}
                  className="h-15 w-auto scale-250 origin-left object-contain"
                />
            </div>
            
            <div className="hidden md:flex items-center cursor-pointer space-x-10 text-neutral-800 self-center">
              <a className='relative bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text hover:text-transparent transition-all ease-in-out duration-200 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-200 after:to-blue-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0' onClick={() => document.getElementById("hero-section")?.scrollIntoView({ behavior: 'smooth' })}>Sobre nós</a>
              <a className='relative bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text hover:text-transparent transition-all ease-in-out duration-200 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-200 after:to-blue-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0' onClick={() => document.getElementById("scroll-cards")?.scrollIntoView({ behavior: 'smooth' })}>Recursos</a>
              <a className='relative bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text hover:text-transparent transition-all ease-in-out duration-200 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-200 after:to-blue-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0' onClick={() => document.getElementById("premium")?.scrollIntoView({ behavior: 'smooth' })}>Premium</a>
              <a className='relative bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text hover:text-transparent transition-all ease-in-out duration-200 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-200 after:to-blue-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0' onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: 'smooth' })}>Nossa missão</a>
            </div>
            
            {/* Botão fixo no topo direito */}
            <div className="flex items-center space-x-4">
              <SpecialButton onClick={handleClick} text="Teste gratuito" />
            </div>
          </div>
        </div>
      </header>
    )
}