import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Sobre Nós' },
    { href: '#services', label: 'Serviços' },
    { href: '#amenities', label: 'Comodidades' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md shadow-lg border-b border-primary/20' 
        : 'bg-transparent'
    }`} style={isScrolled ? { background: 'rgba(7,36,27,0.9)' } : {}}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold brand-serif">
            <span className="heading-primary">LR Cowork</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <Button className="hidden lg:flex btn-primary items-center gap-2">
            <Phone size={18} />
            <a href="tel:+5511974700899">Ligue Agora</a>
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 space-y-2">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full btn-primary flex items-center justify-center gap-2">
                <Phone size={18} />
                <a href="tel:+5511974700899">Ligue Agora</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

