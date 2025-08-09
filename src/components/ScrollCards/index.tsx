import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ChatPng from '../../assets/chat-png.png'
import ControlPng from '../../assets/control-mockup.png'
import StatsPng from '../../assets/stats-mockup.png'
import ChartsPng from '../../assets/chart-mockup.png'
import CalendarPng from '../../assets/calendar-mockup.png'

type CardProps = {
  imgPath: string;
  title: string;
  description: string
}

const Card = ({ imgPath, title, description }: CardProps) => {
  return (
    <div className="flex-shrink-0 transform transition duration-350 ease-in-out hover:scale-102 w-72 sm:w-80 md:w-96 lg:w-[584px] h-64 sm:h-72 md:h-80 lg:h-[584px] bg-gradient-to-br from-blue-600 to-blue-100 rounded-2xl p-4 sm:p-5 lg:p-6 relative overflow-hidden">
      <img 
        src={imgPath} 
        className="w-full h-auto max-h-[60%] sm:max-h-[65%] lg:max-h-[70%] object-contain" 
        alt={title}
      />
      <div className='absolute bottom-4 sm:bottom-5 lg:bottom-6 left-4 sm:left-5 lg:left-6 right-4 sm:right-5 lg:right-6'>
        <h4 className="text-black font-bold text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">{title}</h4>
        <p className="text-black/70 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export function ScrollCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 300 : 610;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 300 : 610;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Check initial state
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <div className="w-full mx-auto bg-white rounded-lg flex flex-col p-4 sm:p-6 lg:p-8" id='scroll-cards'>
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 font-[Roboto] mb-3 leading-tight">
          Conheça sua nova gestão tecnológica
        </h2>
      </div>
      
      {/* Container com botões de navegação */}
      <div className="relative">
        {/* Botão Esquerda - agora em todas as telas */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-8 lg:w-10 h-8 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="w-4 lg:w-5 h-4 lg:h-5 text-gray-700" />
          </button>
        )}

        {/* Botão Direita - agora em todas as telas */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-8 lg:w-10 h-8 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-200 hover:scale-105"
          >
            <ChevronRight className="w-4 lg:w-5 h-4 lg:h-5 text-gray-700" />
          </button>
        )}

        {/* Container de scroll horizontal */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="flex gap-3 sm:gap-4 lg:gap-6 px-10 sm:px-12 lg:px-4 py-2" style={{ minWidth: 'max-content' }}>
            
            <Card imgPath={ChatPng} title='Inteligência artificial' description='Utilize nossa Inteligência Artificial ensinada a te ajudar a organizar as suas finanças' />

            <Card imgPath={ControlPng} title='Controle' description='Tenha acesso o controle mensal das suas parcelas, plantões, investimentos e muito mais, na sua mão.'/>

            <Card imgPath={StatsPng} title='Balanço' description='Visualize o balanço das suas entradas e saídas, seu saldo do mês, seus investimentos e muito mais.' />

            <Card imgPath={ChartsPng} title="Gráficos" description='Gráficos exclusivos de todo o seu balanço, dividendos, plantões e gastos disponíveis no seu celular.'/>

            <Card imgPath={CalendarPng} title='Calendários' description='Calendários personalizados com a data dos seus plantões e de suas parcelas' />

          </div>

        </div>
      </div>
    </div>
  );
}