import React from 'react';
import { Target, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Oferecer soluções de espaço de trabalho flexíveis e de alta qualidade, promovendo um ambiente colaborativo e produtivo.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Valores',
      description: 'Inovação, Flexibilidade, Comunidade, Excelência e Suporte ao Cliente são os pilares que guiam nossa atuação.',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Diferenciais',
      description: 'Localização estratégica, design moderno, tecnologia de ponta e atendimento personalizado para seu sucesso.',
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium mb-4">
            <MapPin size={16} />
            <span>Sobre Nós</span>
          </div>
          <h2 className="heading-secondary text-foreground mb-6">
            Transformando Espaços, Inspirando Negócios
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-elegant mb-8">
              A LR Coworking oferece um ambiente de trabalho moderno e flexível em Guarulhos, SP. 
              Nosso objetivo é proporcionar um espaço inspirador e produtivo para profissionais 
              e empresas de todos os tamanhos.
            </p>
            <p className="text-elegant mb-8">
              Com infraestrutura completa e diversas opções de salas, garantimos que você tenha 
              tudo o que precisa para focar no seu sucesso e crescimento profissional.
            </p>
            
            {/* Vídeo de apresentação */}
            <div className="mt-8 mb-8 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
              <video 
                className="w-full aspect-video object-contain bg-black" 
                controls
                poster="/images/video-poster.jpg"
              >
                <source src="/images/videoLR.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>
        </div>

        {/* Cards de características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="elegant-card p-8 text-center hover-lift group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent size={32} className="text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-elegant leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Seção de estatísticas */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">2+</div>
              <div className="text-sm md:text-base text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
              <div className="text-sm md:text-base text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">6</div>
              <div className="text-sm md:text-base text-muted-foreground">Ambientes Diferentes</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm md:text-base text-muted-foreground">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

