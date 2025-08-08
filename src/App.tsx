import { useEffect, useRef, useState } from 'react';
import './App.css'
import { MainSection } from './components/Main';
import { Header } from './components/Header';
import { ScrollCards } from './components/ScrollCards';
import { AppDemoCard } from './components/AppDemoCard'
import { FeaturesGrid } from './components/FeaturesGrid';
import { Footer } from './components/Footer';
import { ToastifyContainer } from './components/ToastifyContainer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const emailInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ToastifyContainer />
      
      <Header scrollY={scrollY} emailInputRef={emailInputRef} />

      <div>
        <MainSection inputRef={emailInputRef}  />
        
        <div className='bg-gray-200 h-px' />

        <ScrollCards />
        
        <div className='bg-gray-200 h-px' />

        <AppDemoCard />

        <div className='bg-gray-200 h-px' />

        <FeaturesGrid />

        <div className='bg-gray-200 h-px' />

        <Footer />
      </div>
      
    </div>
  )
}

export default App
