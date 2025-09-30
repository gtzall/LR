import React from 'react';
import { CheckCircle, Coffee, Wifi, Shield, Car, Clock, MapPin } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: Coffee,
      title: 'Sala de Espera Confortável',
      description: 'Ambiente acolhedor com poltronas confortáveis para receber seus clientes',
      color: 'gold'
    },
    {
      icon: Wifi,
      title: 'Infraestrutura Completa',
      description: 'Wi-Fi de alta velocidade e limpeza profissional',
      color: 'gold'
    },
    {
      icon: Coffee,
      title: 'Café e Água à Vontade',
      description: 'Estação de café e água mineral disponível durante todo o período',
      color: 'gold'
    },
    {
      icon: Car,
      title: 'Estacionamento Conveniado',
      description: 'Vagas para 3 carros disponíveis em estacionamento próximo com preços especiais',
      color: 'gold'
    },
    {
      icon: Shield,
      title: 'Segurança 24h',
      description: 'Monitoramento e segurança 24 horas para sua tranquilidade',
      color: 'gold'
    },
    {
      icon: MapPin,
      title: 'Localização Privilegiada',
      description: 'Localizado no centro de Guarulhos com fácil acesso ao transporte público',
      color: 'gold'
    }
  ];

  return (
    <section id="amenities" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium mb-4">
            <CheckCircle size={16} />
            <span>Comodidades Inclusas</span>
          </div>
          <h2 className="heading-secondary text-foreground mb-6">
            Tudo Incluso Para Sua Comodidade
          </h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Oferecemos uma infraestrutura completa e comodidades pensadas para proporcionar 
            a melhor experiência de trabalho, sem custos adicionais.
          </p>
        </div>

        {/* Grid de comodidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div 
                key={index} 
                className="elegant-card p-6 hover-lift group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ${amenity.color === 'gold' ? 'gradient-gold' : ''}`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {amenity.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {amenity.description}
                </p>
                
                {/* Indicador de inclusão */}
                <div className="mt-4 inline-flex items-center gap-2 text-green-600 text-sm font-medium">
                  <CheckCircle size={16} />
                  <span>Incluso</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Seção de destaque */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sem Taxas Ocultas, Sem Surpresas
            </h3>
            <p className="text-elegant mb-8">
              Todas essas comodidades estão incluídas no valor da sua reserva. 
              Nosso compromisso é oferecer transparência total e a melhor experiência possível.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Os Incluso</h4>
                <p className="text-sm text-muted-foreground">Sem custos extras</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Disponível 24/7</h4>
                <p className="text-sm text-muted-foreground">Acesso quando precisar</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Garantia Total</h4>
                <p className="text-sm text-muted-foreground">Satisfação garantida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;

