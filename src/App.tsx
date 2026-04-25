/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, MessageCircle, Instagram, ChevronRight, ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    'https://janerik.com.br/wp-content/uploads/2026/04/01.jpg',
    'https://janerik.com.br/wp-content/uploads/2026/04/02.jpg',
    'https://janerik.com.br/wp-content/uploads/2026/04/03.jpeg',
    'https://janerik.com.br/wp-content/uploads/2026/04/04.jpeg',
    'https://janerik.com.br/wp-content/uploads/2026/04/05.jpeg',
    'https://janerik.com.br/wp-content/uploads/2026/04/07.jpeg',
    'https://janerik.com.br/wp-content/uploads/2026/04/08.jpg',
    'https://janerik.com.br/wp-content/uploads/2026/04/09.jpg',
    'https://janerik.com.br/wp-content/uploads/2026/04/11.jpg',
    'https://janerik.com.br/wp-content/uploads/2026/04/12.jpg',
    'https://janerik.com.br/wp-content/uploads/2026/04/13.jpg',
    'https://janerik.com.br/wp-content/uploads/2026/04/14.jpg',
    'https://janerik.com.br/wp-content/uploads/2026/04/15.jpg',
    'https://janerik.com.br/wp-content/uploads/2026/04/16.jpeg',
  ];

  const productImages = [
    'https://janerik.com.br/wp-content/uploads/2026/04/prod01.jpeg',
    'https://janerik.com.br/wp-content/uploads/2026/04/prod02.jpeg',
    'https://janerik.com.br/wp-content/uploads/2026/04/prod03.jpeg',
    'https://janerik.com.br/wp-content/uploads/2026/04/prod04-1.jpeg',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'A Associação', href: '#associacao' },
    { label: 'Nossos Produtos', href: '#produtos' },
    { label: 'O Rio do Engenho', href: '#rio' },
    { label: 'Trilha do Rio', href: '#trilha' },
    { label: 'Contato', href: '#contato' },
  ];

  const instagramLink = "https://www.instagram.com/amarea_ilheus?igsh=MWg5aGNwZDh4OG00Ng%3D%3D";

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center">
            <img 
              src="https://janerik.com.br/wp-content/uploads/2026/04/LOGO_AMAREA.png" 
              alt="AMAREA Logo" 
              className={`${isScrolled ? 'h-12' : 'h-14'} md:h-20 w-auto object-contain transition-all`}
            />
          </div>

          {/* Desktop Menu & Social */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-xs font-semibold text-[#5d7c6f] hover:text-[#a39e76] transition-colors relative group uppercase tracking-widest"
                  >
                    {link.label}
                    <div className={`absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-[2px] bg-[#a39e76] transition-all ${link.label === 'Início' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5d7c6f] hover:text-[#a39e76] transition-colors ml-4"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile/Tablet Right Controls */}
          <div className="lg:hidden flex flex-col items-end gap-2">
            <button 
              className="text-[#5d7c6f] p-2"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5d7c6f] p-1"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile/Tablet Menu Overlay */}
        <div id="mobile-menu" className="hidden lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-xl">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-[#5d7c6f] block uppercase tracking-wider"
                  onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative flex flex-col md:flex-row min-h-0 md:h-screen pt-24 md:pt-32 bg-white">
          {/* Text Content */}
          <div className="w-full md:w-1/2 bg-[#a39e76] flex items-start md:items-start justify-center p-6 md:p-12 lg:p-20 text-white">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl w-full pt-8 md:pt-20"
            >
              <h1 className="text-3xl md:text-2xl lg:text-4xl font-light leading-tight mb-8">
                Promovendo o desenvolvimento comunitário para os <span className="font-bold">Moradores e Agricultores do Rio de Engenho e Adjacências</span>
              </h1>
              <div className="w-20 h-px bg-white/50 mb-10"></div>
              <p className="text-sm md:text-xs lg:text-lg leading-relaxed opacity-90 mb-12 max-w-lg text-left">
                Somos um movimento que proporciona aos seus associados condições adequadas para a plena realização das funções de habitar, trabalhar, recrear e de se desenvolver.
              </p>
            </motion.div>
          </div>

          {/* Carousel Content */}
          <div className="w-full md:w-1/2 relative h-[450px] md:h-full overflow-hidden bg-gray-100">
            <AnimatePresence initial={false} mode="wait">
              <motion.img 
                key={currentHeroImage}
                src={heroImages[currentHeroImage]} 
                alt="Banner AMAREA" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Pagination Controls */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2 z-10 p-2 md:p-3 bg-black/10 backdrop-blur-md rounded-full">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentHeroImage(i)}
                  className={`transition-all duration-500 rounded-full ${i === currentHeroImage ? 'bg-white w-10 md:w-12 h-1.5' : 'bg-white/40 hover:bg-white/70 w-1.5 h-1.5'}`}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Centered Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center"
            onClick={() => document.getElementById('associacao')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-10 h-10 border-2 border-white md:border-white/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm bg-white/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </div>
          </motion.div>
        </section>

        {/* A Associação */}
        <section id="associacao" className="py-20 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://janerik.com.br/wp-content/uploads/2026/04/assossiacao.jpeg" 
              alt="A Associação" 
              className="w-full h-auto"
            />
          </motion.div>
          <div>
            <h2 className="font-script text-5xl md:text-6xl lg:text-7xl text-[#a39e76] mb-8">A associação</h2>
            <div className="space-y-6 text-[#4a4a4a] text-sm lg:text-base leading-relaxed">
              <p>
                <span className="font-bold">AMAREA - Associação de Moradores e Agricultores do Rio de Engenho e Adjacências</span>, fundada em 11/01/1998, sociedade civil sem fins econômicos, organizada exclusivamente para a prestação de serviços sócio comunitários, com personalidade jurídica própria e plena capacidade de cumprimento de seus fins.
              </p>
              <p>
                A sede se encontra no município de Ilhéus - Bahia, na Fazenda Bela Vista, S/N, Zona Rural, inscrita no CNPJ sob o n. 03.892.743/0001-01, tendo como Objeto Social congregar os habitantes do Rio de Engenho e adjacências em torno de seus problemas fundamentais, buscando as soluções destes problemas, promovendo o seu desenvolvimento comunitário, proporcionando a seus associados condições de adequadas para a plena realização das funções de habitar, trabalhar, recrear e de se desenvolver.
              </p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="bg-[#a39e76]/10 py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl text-center"
            >
              <h3 className="font-script text-5xl text-[#5d7c6f] mb-6">A marca</h3>
              <p className="text-[#4a4a4a] text-sm lg:text-base leading-relaxed">
                O logotipo escolhido informa que os produtos comercializados são produzidos através de manejo agroecológico, apresentando uma representação do Rio Santana e da mata atlântica e parte do monumento da Capela do Engenho Sant'Ana ou Capela do Rio de Engenho de Santana, indicando ainda o nome da associação titular da marca coletiva.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl text-center"
            >
              <h3 className="font-script text-5xl text-[#5d7c6f] mb-6">Valores da Associação</h3>
              <p className="text-[#4a4a4a] text-sm lg:text-base leading-relaxed">
                Preservação ambiental, o manejo sustentável, o desenvolvimento do setor rural representado pelo agricultor familiar, a interação equilibrada da produção agrícola com o trato com a floresta, o fortalecimento da cadeia produtiva local e o respeito à história.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nossos Produtos */}
        <section id="produtos" className="py-24 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-script text-6xl text-[#a39e76] mb-12">Nossos produtos</h2>
          <p className="max-w-4xl mx-auto text-[#4a4a4a] text-sm lg:text-base leading-relaxed mb-16 px-4">
            Os produtos comercializados devem obrigatoriamente ser produzidos atendendo a sistemas agroecológicos de produção e ter seu local de plantio e produção na região do Rio do Engenho e adjacências (Japu, Vila cachoeira, Banco da Vitória, Maria Jape, Couto, Santo Antônio, Cururutinga, Búzios e Santa Maria). A produção obedece a critérios de sustentabilidade e proteção ao meio ambiente, harmonizada com o ambiente florestal em que está inserida. Através do manejo agroflorestal os produtos representam a possibilidade de conciliar a produção de alimentos com a preservação do bioma mata atlântica.
          </p>

          <div className="mb-20">
            <h3 className="text-2xl lg:text-3xl font-light text-[#a39e76] mb-10">Produtos da <span className="font-bold">AMAREA</span></h3>
            <ul className="text-left max-w-3xl mx-auto space-y-4 text-[#4a4a4a] text-sm lg:text-base px-4">
              <li className="flex items-start gap-4">
                <span className="text-[#a39e76] mt-1 text-xl">•</span>
                <p>Cacau, açaí, pupunha, jenipapo, cajá, goiaba, graviola, cupuaçu, coco, mamão, abacaxi, banana, jaca.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#a39e76] mt-1 text-xl">•</span>
                <p>Cultivo de seringueira, aipim, hortaliças, criação de pequenos animais.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#a39e76] mt-1 text-xl">•</span>
                <p>Doces, licores, compotas, geleias, doce de cacau, chocolate artesanal, bastão de cacau (chocolate a 100%), polpas de diversas frutas.</p>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {productImages.map((src, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src={src} 
                  alt={`Produto ${i + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* O Rio do Engenho */}
        <section id="rio" className="flex flex-col md:flex-row min-h-[600px]">
          <div className="w-full md:w-1/2 bg-gray-200 min-h-[400px]">
            <img 
              src="https://janerik.com.br/wp-content/uploads/2026/04/RIO-do-engenho.jpg" 
              alt="O Rio do Engenho" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 bg-[#a39e76] flex items-center justify-center p-8 md:p-10 lg:p-16 text-white min-h-[400px]">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="font-script text-5xl md:text-6xl lg:text-7xl mb-8">O rio do engenho</h2>
              <div className="space-y-6 text-sm lg:text-base leading-relaxed opacity-95">
                <p>
                  O Rio do Engenho recebeu este nome em virtude do Engenho de Santana, cuja construção se atribui a Mem de Sá (Araújo et al., 2017, p.), sendo o palco de produção de açúcar e de batalhas envolvendo indígenas e escravos como resistência à dominação dos inúmeros senhores de engenho que administraram o local.
                </p>
                <p>
                  Um dos locais emblemáticos do Rio do Engenho é a Capela de Nossa Senhora Sant'Ana, terceira mais antiga na zona rural do Brasil. Segundo o IPHAN é o "monumento mais antigo subsistente em Ilhéus", tombada pelo Patrimônio Histórico e Artístico Nacional – IPHAN, através do Processo: 687-C-T-1962; Livro do Tombo Histórico: Inscr. nº 492, de 20/02/1984; Livro do Tombo Belas Artes: Inscr. nº 556, de 20/02/1984 e pelo IPAC-BA – Instituto do Patrimônio Artístico e Cultural da Bahia através do Processo de Tombamento: Nº 005/1981; Resolução de Tombamento: Nº 30.483/84, de 10/05/1984; Livro do Tombo: Inscr. nº 25.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trilha do Rio do Engenho */}
        <section id="trilha" className="flex flex-col md:flex-row min-h-[600px]">
          <div className="w-full md:w-1/2 bg-[#5d7c6f] flex items-center justify-center p-8 md:p-10 lg:p-16 text-white min-h-[400px]">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="font-script text-5xl md:text-6xl lg:text-7xl mb-8">Trilha do Rio do Engenho</h2>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-95 mb-10">
                Cenário de belezas naturais, a localidade favorece a realização de passeios e trilhas pelo roçado e pelas margens do Rio Santana, cavalgadas, passeios de barco, visita às propriedades locais para acompanhar atividades produtivas, conhecer os processos artesanais de agroindustrialização (doces, geleias, polpa de frutas, cacau e chocolate, bebidas), entre outras possibilidades. (ARAÚJO et al., 2017, p.33)
              </p>
              <a 
                href="https://janerik.com.br/wp-content/uploads/2026/04/Araujoetal.TurismonoEspaoRural-ISBN978-85-7991-107-1.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#b3ab8d] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all shadow-lg text-sm font-medium inline-block"
              >
                Veja mais no arquivo completo
              </a>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 bg-gray-200">
            <img 
              src="https://janerik.com.br/wp-content/uploads/2026/04/trilha.jpeg" 
              alt="Trilha do Rio" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-24 bg-white text-center">
          <h2 className="font-script text-6xl text-[#a39e76] mb-16">Contato</h2>
          
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#5d7c6f]/10 rounded-full flex items-center justify-center text-[#5d7c6f] mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <p className="font-bold text-lg">(73) 99152 – 2070</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#5d7c6f]/10 rounded-full flex items-center justify-center text-[#5d7c6f] mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <p className="font-bold text-lg">contato@amarea.com.br</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#5d7c6f]/10 rounded-full flex items-center justify-center text-[#5d7c6f] mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <p className="font-bold text-lg">Fazenda Bela Vista, S/N</p>
              <p className="text-gray-500">Zona Rural, Ilhéus - BA</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-[#5d7c6f] pt-24 pb-12 overflow-hidden">
        {/* Wave Border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] h-12 rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-full w-[calc(100%+1.3px)] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-white font-medium text-sm md:text-base">
            {navLinks.slice(1).map((link) => (
              <a key={link.label} href={link.href} className="hover:text-[#a39e76] transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex justify-center mb-12">
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#a39e76] transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 text-white/60 text-xs">
            <p>© {new Date().getFullYear()} AMAREA. Todos os direitos reservados.</p>
            <p>
              Produzido por: <a href="https://janagencia.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-[#a39e76] underline-offset-4">Jan Agência</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://api.whatsapp.com/send?phone=5573991522070" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 group"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-[#5d7c6f] px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-sm font-bold">
          Fale conosco
        </span>
      </a>
    </div>
  );
}
