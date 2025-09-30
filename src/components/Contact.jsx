import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 11 99402-4901',
      link: 'tel:+55 11 99402-4901',
      description: 'Ligue para nós'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+55 11 99402-4901',
      link: 'https://wa.me/5511994024901?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20o%20LR%20Coworking.',
      description: 'Converse conosco'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'lr.cowork.cons@gmail.com',
      link: 'mailto:lr.cowork.cons@gmail.com',
      description: 'Envie um email'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Av. João Bernardo Medeiros, 512 - Bom Clima, Guarulhos - SP',
      link: 'https://maps.google.com/?q=Av.+João+Bernardo+Medeiros,+512+-+Bom+Clima,+Guarulhos+-+SP',
      description: 'Venha nos visitar'
    }
  ];

  const businessHours = [
    { day: 'Segunda - Sexta', hours: '08:00 - 18:00' },
    { day: 'Sábado', hours: '09:00 - 14:00' },
    { day: 'Domingo', hours: 'Fechado' }
  ];

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium mb-4">
            <MessageCircle size={16} />
            <span>Entre em Contato</span>
          </div>
          <h2 className="heading-secondary text-foreground mb-6">
            Vamos Conversar Sobre Seu Projeto
          </h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Estamos prontos para ajudar você a encontrar o espaço ideal para seu trabalho. 
            Entre em contato conosco e descubra como podemos impulsionar sua produtividade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Formulário de contato */}
          <div className="order-2 lg:order-1">
            <div className="elegant-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Send size={24} className="text-primary" />
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre suas necessidades de espaço de trabalho..."
                    rows="5"
                    className="w-full"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full btn-primary hover-glow text-lg py-3">
                  <Send size={20} className="mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>

          {/* Informações de contato */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Cards de contato */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="elegant-card p-6 hover-lift group block"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent size={24} className="text-primary group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-1">{info.description}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Horário de funcionamento */}
            <div className="elegant-card p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Clock size={20} className="text-primary" />
                Horário de Funcionamento
              </h4>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium text-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa placeholder */}
            <div className="elegant-card p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <MapPin size={20} className="text-primary" />
                Nossa Localização
              </h4>
              <div className="bg-muted rounded-xl h-48 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-2 text-primary" />
                  <p className="font-medium">Centro de Guarulhos, SP</p>
                  <p className="text-sm">Mapa interativo em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA de contato rápido */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Precisa de uma Resposta Rápida?
          </h3>
          <p className="text-elegant mb-8 max-w-2xl mx-auto">
            Para atendimento imediato, entre em contato via WhatsApp ou telefone. 
            Nossa equipe está pronta para esclarecer suas dúvidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary hover-glow">
                <a href="https://wa.me/5511994024901" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </Button>
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <a href="tel:+5511994024901" className="flex items-center gap-2">
                <Phone size={20} />
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

