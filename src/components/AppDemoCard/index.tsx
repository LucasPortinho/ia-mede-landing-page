import ChatPng from '../../assets/chat-png.png'
import { Crown } from 'lucide-react'

export const AppDemoCard = () => {
  return (
    <div className="max-w-full flex flex-col bg-white rounded-lg p-8" id='premium'>
        <div className='max-w-6xl self-center ml-28'>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
                
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                {/* Header */}
                <div>
                    <div className="text-blue-600 text-sm font-medium mb-2 uppercase tracking-wider">
                    Inteligência Artificial
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
                    Organize os<br />
                    seus plantões.
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                        Utilize da nossa ferramenta para organizar suas finanças do dia a dia, como plantões, investimentos, gastos e parcelas.
                    </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Inteligência artificial</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Dividendos</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Gráficos</span>
                    </div>
                </div>

                {/* Team Badge */}
                <div className="flex items-center space-x-3 bg-yellow-50 rounded-lg p-3 w-fit">
                    <div className="w-10 h-10 bg-yellow-300 rounded-lg flex items-center justify-center">
                    <Crown color='#ca8a04' />
                    </div>
                    <div>
                    <div className="text-sm font-semibold text-gray-900">
                        Função Premium
                    </div>
                    <div className="text-xs text-gray-500">Organize suas finanças</div>
                    </div>
                </div>
                </div>

                {/* Right Phone Mockup */}
                <div className="flex-shrink-0">
                    <div className="relative w-160 h-120" >
                        <img src={ChatPng} />
                    </div>
                </div>

        </div>
      </div>
    </div>
  );
};
