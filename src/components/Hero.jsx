import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-dark"></div>
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/15 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse animation-delay-800"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white/90 animate-fade-in-up">
            <MapPin size={16} />
            <span className="text-sm font-medium">Guarulhos, SP</span>
          </div>

          <h1 className="text-white animate-fade-in-up animation-delay-200 brand-serif">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              LR Cowork
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-light text-white/90">
              Seu espaço de trabalho moderno e inspirador
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Transforme sua produtividade em um ambiente profissional e flexível. 
            Salas privativas, duplas e de reunião com infraestrutura completa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
            <Button className="btn-primary text-lg px-8 py-4 hover-lift group">
              <a href="#services" className="flex items-center gap-2">
                Conheça Nossos Espaços
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 text-lg px-8 py-4 hover-lift">
              <a href="tel:+5511974700899" className="flex items-center gap-2">
                <Clock size={20} />
                Agendar Visita
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

