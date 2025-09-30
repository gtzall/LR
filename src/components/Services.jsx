import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { User, Users, Presentation, Calendar, Clock, Wifi, Coffee, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Sala Privativa',
      description: 'Espaço exclusivo e silencioso para foco total. Ideal para trabalho individual ou reuniões confidenciais com máxima privacidade.',
      price: 'A partir de R$50',
      period: '/hora',
      features: ['Wi-Fi de alta velocidade', 'Ar condicionado', 'Mesa ergonômica', 'Tomadas e USB'],
      popular: false,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Sala Dupla',
      description: 'Perfeita para equipes pequenas ou colaboração a dois. Conforto e privacidade para suas tarefas em um ambiente colaborativo.',
      price: 'A partir de R$1200',
      period: '/mês (aluguel)',
      features: ['2 estações de trabalho', 'Espaço colaborativo', 'Quadro branco', 'Iluminação ajustável'],
      popular: true,
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Presentation,
      title: 'Sala de Reunião',
      description: 'Equipada com tecnologia para apresentações e discussões produtivas. Ideal para equipes maiores e reuniões com clientes.',
      price: 'R$100',
      period: '/hora',
      features: ['TV 32" com HDMI', 'Sistema de som', 'Mesa para 8 pessoas', 'Flipchart'],
      popular: false,
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Aluguel da Sala Dupla',
      description: 'Opção de aluguel mensal ou por períodos mais longos para a sala dupla, com condições especiais e flexibilidade.',
      price: 'Consulte-nos',
      period: '',
      features: ['Contrato flexível', 'Desconto progressivo', 'Acesso 24h', 'Suporte dedicado'],
      popular: false,
      gradient: 'from-orange-500 to-orange-600'
    },
  ];

  const commonFeatures = [
    { icon: Wifi, text: 'Wi-Fi de alta velocidade' },
    { icon: Coffee, text: 'Café e água incluso' },
    { icon: Shield, text: 'Segurança 24h' },
    { icon: Clock, text: 'Flexibilidade de horários' },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium mb-4">
            <Presentation size={16} />
            <span>Nossos Serviços</span>
          </div>
          <h2 className="heading-secondary text-foreground mb-6">
            Espaços Pensados Para Seu Sucesso
          </h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Oferecemos diferentes tipos de ambientes para atender suas necessidades específicas, 
            desde trabalho individual até reuniões corporativas importantes.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`elegant-card hover-lift group relative overflow-hidden ${
                  service.popular ? 'ring-2 ring-primary ring-opacity-50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Mais Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-foreground">{service.price}</span>
                      <span className="text-sm text-muted-foreground">{service.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full btn-primary hover-glow">
                    <a href="https://wa.me/5511994024901" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Calendar size={16} />
                      Agendar Agora
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recursos comuns */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Incluso em Todos os Planos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {commonFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

