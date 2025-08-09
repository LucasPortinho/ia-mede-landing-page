import { useState } from "react"
import AppleLogo from '../../assets/apple-logo.svg'
import GooglePlayLogo from '../../assets/google-play-store-logo.svg'
import { z } from 'zod'
import sanitizeHtml from 'sanitize-html';
import { toast } from 'react-toastify'
import axios from 'axios'
 
export const MainSection = ({ inputRef }: { inputRef: React.RefObject<HTMLInputElement | null> }) => {
    const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false)

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      toast.dismiss()

      const FormSchema = z.object({
        email: z.email().trim().transform(val => sanitizeHtml(val))
      })
      
      const emailValue = inputRef.current?.value

      const zodParsedObj = FormSchema.safeParse({ email: emailValue })
      
      if (!zodParsedObj.success) {
        toast.error('Email inválido')
      }
    
      const data = zodParsedObj.data
      
      if (data) {
        try {
          toast.info('Salvando e-mail...')
          await axios.post(import.meta.env.VITE_API_ROUTE, { email: data.email })
          toast.dismiss()
          toast.success('Email salvo com sucesso')
        }
        catch (e) {
          toast.error('Erro ao salvar e-mail')
          console.log('ERROR', e)
        }
      }
    }

    return (
    <>
        <div className="max-w-full mx-auto mt-10 sm:mt-0 bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 py-12 sm:py-16 lg:py-20" id="hero-section">

        <div className="flex flex-col lg:flex-row items-center bg-gray-100 rounded-xl p-4 sm:p-6 lg:p-4">

          
          {/* Center - Content */}
          <div className="flex-1 space-y-3 sm:space-y-4 flex flex-col text-center items-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-600 leading-tight">
              IA.MEDE
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-600 leading-tight -mt-2">
              Agente financeiro feito para médicos
            </h1>
            <span className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Conheça a Inteligência Artificial treinada apenas para organizar as finanças de seus 
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              Plantões, Gastos e Investimentos
            </span>
            <span className="text-blue-400 text-xs sm:text-sm lg:text-base leading-relaxed">
              De médicos para médicos
            </span>
            <div className="flex flex-col justify-center sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
              <button className="bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center justify-center space-x-2 text-sm sm:text-base">
                <span className="hidden sm:inline">Em breve na App Store</span>
                <span className="sm:hidden">App Store</span>
                <img src={AppleLogo} alt='Apple logo' className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button className="border border-gray-300 bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center justify-center space-x-2 text-sm sm:text-base">
                <span className="hidden sm:inline">Em breve na Google Play</span>
                <span className="sm:hidden">Google Play</span>
                <img src={GooglePlayLogo} alt='Google play logo' className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className='mb-6 sm:mb-7 flex items-center flex-col'>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-500 font-[Roboto] leading-tight">
              Quer utilizar nossa inteligência artificial de forma gratuita?
            </h2>
            <span className='text-gray-600 text-sm sm:text-base mt-2'>
              Cadastre-se abaixo para ganhar 1 mês de acesso premium gratuito
            </span>
          </div>
          
          <form className={`
            flex items-center justify-between bg-gray-200
            rounded-xl px-3 sm:px-4 transition-all duration-300 ease-in-out
            max-w-full sm:max-w-3xl mx-auto h-[44px] sm:h-[48px]
            hover:ring hover:ring-blue-500
            ${isEmailFocused ? 'ring ring-blue-500 bg-gray-50' : ''}
          `} onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-1 h-full items-center space-x-3 min-w-0">
              <input 
                ref={inputRef}
                className="w-full h-full bg-transparent outline-none text-sm sm:text-base"
                placeholder="Digite seu e-mail"
                maxLength={255}
                type="email"
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />
            </div>
            <button className="bg-blue-500 h-4/5 cursor-pointer px-3 sm:px-4 rounded-full text-xs sm:text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-blue-700 flex-shrink-0">
              Enviar
            </button>
          </form>

          <span className="mt-3 text-gray-500 text-xs block max-w-sm sm:max-w-none mx-auto">
            Ao enviar o seu e-mail você autoriza o envio de e-mails promocionais
          </span>
        </div>
      </div>
    </>
    )
}