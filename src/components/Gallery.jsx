import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Camera, X, ZoomIn } from 'lucide-react';

// Galeria usando as fotos reais fornecidas (coloque os arquivos em public/images)
// Lista principal com caminho completo incluindo a extensão
const images = [
  {
    base: '/images/lr-fachada-frontal.jpeg',
    alt: 'Fachada LR Cowork e Consultoria',
    description: 'Vista externa da unidade, acesso fácil e identificação clara.',
    category: 'Fachada'
  },
  {
    base: '/images/lr-sala-reuniao-vidro.jpeg',
    alt: 'Sala de reunião com mesa de vidro',
    description: 'Mesa ampla de vidro com cadeiras ergonômicas, ideal para reuniões e treinamentos.',
    category: 'Sala de Reunião'
  },
  {
    base: '/images/lr-corredor-circulacao.jpeg',
    alt: 'Corredor e área de circulação',
    description: 'Ambiente clean com plantas e iluminação suave, acesso às salas.',
    category: 'Áreas Comuns'
  },
  {
    base: '/images/lr-sala-dupla-mesas-vidro.jpeg',
    alt: 'Sala dupla com mesas de vidro',
    description: 'Duas estações independentes para trabalho colaborativo com privacidade.',
    category: 'Salas'
  },
  {
    base: '/images/lr-sala-espera-poltronas.jpeg',
    alt: 'Sala de espera com poltronas',
    description: 'Recepção confortável para clientes, com poltronas e mesa de apoio.',
    category: 'Recepção'
  },
  {
    base: '/images/lr-sala-monitor-bancada.jpeg',
    alt: 'Sala com monitor e mesa ampla',
    description: 'Espaço privativo com bancada longa, ideal para produtividade.',
    category: 'Salas'
  },
  {
    base: '/images/lr-escritorio-executivo.jpeg',
    alt: 'Escritório executivo',
    description: 'Mesa executiva com cadeira gerencial para atendimentos reservados.',
    category: 'Diretoria'
  }
];

// Componente para exibir imagens com caminho direto
function ImageWithFallback({ base, alt, className }) {
  return (
    <img
      src={base}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', ...new Set(images.map(img => img.category))];
  
  const filteredImages = filter === 'Todos' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium mb-4">
            <Camera size={16} />
            <span>Nossa Galeria</span>
          </div>
          <h2 className="heading-secondary text-foreground mb-6">
            Conheça Nossos Espaços
          </h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Explore nossos ambientes modernos e inspiradores, projetados para maximizar 
            sua produtividade e proporcionar o melhor ambiente de trabalho.
          </p>
        </div>

        {/* Filtros simples (sem efeitos exagerados) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de imagens - pronto para receber suas fotos reais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-sm"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  base={image.base}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium bg-primary/80 px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                    <ZoomIn size={20} className="opacity-80" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{image.alt}</h3>
                  <p className="text-sm text-white/90 line-clamp-2">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de imagem */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-5xl p-0 border-none bg-transparent">
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                >
                  <X size={20} />
                </button>
                
                <div className="rounded-2xl overflow-hidden bg-white shadow-2xl">
                  <ImageWithFallback 
                    base={selectedImage.base} 
                    alt={selectedImage.alt} 
                    className="w-full h-auto max-h-[70vh] object-cover" 
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {selectedImage.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {selectedImage.alt}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Quer Conhecer Pessoalmente?
            </h3>
            <p className="text-elegant mb-8 max-w-2xl mx-auto">
              Agende uma visita e conheça todos os nossos espaços. Nossa equipe estará 
              pronta para apresentar as melhores opções para suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary hover-glow">
                <a href="https://wa.me/5511994024901" target="_blank" rel="noopener noreferrer">
                  Agendar Visita
                </a>
              </button>
              <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                <a href="tel:+5511974700899">
                  Ligar Agora
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

