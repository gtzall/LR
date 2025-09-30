import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Sobre Nós' },
    { href: '#services', label: 'Serviços' },
    { href: '#amenities', label: 'Comodidades' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#contact', label: 'Contato' },
  ];

  const services = [
    'Sala Privativa',
    'Sala Dupla',
    'Sala de Reunião',
    'Aluguel Mensal',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Seção principal do footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Informações da empresa */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">
                <span className="heading-primary">LR Coworking</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Seu espaço de trabalho ideal em Guarulhos, SP. Oferecemos ambientes 
                modernos e flexíveis para impulsionar sua produtividade.
              </p>
            </div>
            
            {/* Informações de contato */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-primary" />
                <a href="tel:+5511974700899" className="hover:text-primary transition-colors duration-300">
                  +55 11 97470-0899
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-primary" />
                <a href="mailto:lr.cowork.cons@gmail.com" className="hover:text-primary transition-colors duration-300">
                  lr.cowork.cons@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-primary" />
                <span>Centro, Guarulhos - SP</span>
              </div>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm relative group"
                  >
                    {service}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horário e redes sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Horário de Funcionamento</h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Clock size={14} className="text-primary" />
                <span className="text-muted-foreground">Seg - Sex: 08:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={14} className="text-primary" />
                <span className="text-muted-foreground">Sábado: 09:00 - 14:00</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={14} className="text-primary" />
                <span className="text-muted-foreground">Domingo: Fechado</span>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-foreground">Siga-nos</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={social.label}
                      href={social.href} 
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              &copy; {currentYear} LR Coworking. Todos os direitos reservados.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Botão flutuante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5511994024901" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Contato via WhatsApp"
        >
          <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

