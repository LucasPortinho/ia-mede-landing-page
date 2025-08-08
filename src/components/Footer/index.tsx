import IaMedePng from '../../assets/logo-ia-mede-horizontal.png'

export const Footer = () => {
    return (
        <footer className="max-w-full mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
            <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
                <img src={IaMedePng} className='h-10 scale-450 mb-5' />
            </div>
            <p className="text-gray-600 text-sm">
                O agente financeiro para médicos.
            </p>
            {/* <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <span className="hover:text-gray-700 cursor-pointer">Políticas de privacidade</span>
                <span className="hover:text-gray-700 cursor-pointer">Termos de serviço</span>
                <span className="hover:text-gray-700 cursor-pointer">Suporte</span>
            </div> */}
            <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-400 text-xs">
                    © 2025 IA.MEDE. Todos os direitos reservados.
                </p>
            </div>
            </div>
        </footer>
    )
}