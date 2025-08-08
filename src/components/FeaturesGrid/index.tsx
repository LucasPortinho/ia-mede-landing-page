type FeatureType = {
    title: string;
    description: string;
}

export function FeaturesGrid() {
    const features: FeatureType[] = [
        { 
            title: 'Inteligência Artificial', 
            description: "Nossa Inteligência Artificial foi feita para sua praticidade, transformando o tempo de organização das suas finanças de 10 minutos em 10 segundos" 
        },
        {
            title: 'Controle',
            description: 'Tenha acesso à tudo que entra e sai da sua conta, salvando seus plantões, gastos, parcelas, investimentos e poupança. Suas finanças na sua mão.'
        },
        {
            title: 'Balanço',
            description: 'Visualize de forma prática tudo que entrou e saiu da sua conta. Tenha o balanço das suas entradas e saídas de forma totalmente prática.'
        },
        {
            title: 'Gráficos',
            description: 'Tenha seu saldo do mês projetado visualmente para você, além da projeção dos seus dividendos e de tudo que passou por sua carteira.'
        },
        {  
            title: 'Calendários',
            description: 'Organize a data dos seus plantões, parcelas e gastos. Tenha controle do quanto entrou e quanto saiu em cada dia da sua vida.'
        },
        {
            title: 'Investimentos',
            description: 'Tenha um controle diferenciado dos dividendos projetados na sua conta. Visualize gráficos, veja projeções futuras e aumente seus fundos.'
        }
    ] 

    return (
        <div className="max-w-full flex flex-col mx-auto bg-white rounded-lg p-8">
          <div className="max-w-7xl self-center grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map(feature => {
                return (
                <div>
                    <h3 className="text-blue-500 font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            )
            })}
          </div>
        </div>
    )
}