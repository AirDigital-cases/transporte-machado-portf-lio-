import { motion } from 'framer-motion'
import MachadoHero from './MachadoHero'
import MachadoAbout from './MachadoAbout'
import MachadoNumbers from './MachadoNumbers'
import MachadoServices from './MachadoServices'
import MachadoDifferentials from './MachadoDifferentials'
import MachadoCertifications from './MachadoCertifications'
import MachadoProcess from './MachadoProcess'
import MachadoEquipmentRental from './MachadoEquipmentRental'
import MachadoMediaGallery from './MachadoMediaGallery'
import MachadoCTA from './MachadoCTA'
import FloatingWhatsApp from './FloatingWhatsApp'

const mediaBase = `${import.meta.env.BASE_URL}media/machado`
const placeholderVideo = `${mediaBase}/videos/placeholder.mp4`
const heroPoster = `${mediaBase}/photos/hero-fallback.svg`
const photoPlaceholder = `${mediaBase}/photos/placeholder.svg`

const heroVideo = {
  id: 'hero-machado',
  kind: 'video',
  category: 'Hero Machado',
  title: 'Operacao Machado em Movimento',
  note: 'Video principal do hero, preparado para destacar a operacao real da Machado Transportes.',
  usage: 'hero',
  src: `${mediaBase}/videos/hero-machado.mp4`,
  fallbackSrc: placeholderVideo,
  poster: heroPoster,
}

const videos = [
  {
    id: 'v-frota',
    kind: 'video',
    category: 'Video real',
    title: 'Frota em Movimento',
    note: 'Caminhoes em rota, operacao ativa e presenca logistica nas estradas.',
    src: `${mediaBase}/videos/frota-em-movimento.mp4`,
    fallbackSrc: placeholderVideo,
    poster: heroPoster,
  },
  {
    id: 'v-carga-fechada',
    kind: 'video',
    category: 'Video real',
    title: 'Carga Fechada',
    note: 'Operacoes dedicadas com controle, exclusividade e seguranca.',
    src: `${mediaBase}/videos/carga-fechada.mp4`,
    fallbackSrc: placeholderVideo,
    poster: heroPoster,
  },
  {
    id: 'v-carga-fracionada',
    kind: 'video',
    category: 'Video real',
    title: 'Carga Fracionada',
    note: 'Organizacao, separacao e transporte eficiente para volumes variados.',
    src: `${mediaBase}/videos/carga-fracionada.mp4`,
    fallbackSrc: placeholderVideo,
    poster: heroPoster,
  },
  {
    id: 'v-empilhadeira-clamp',
    kind: 'video',
    category: 'Video real',
    title: 'Movimentacao Industrial',
    note: 'Equipamentos preparados para movimentacao segura de cargas especiais.',
    src: `${mediaBase}/videos/empilhadeira-clamp.mp4`,
    fallbackSrc: placeholderVideo,
    poster: heroPoster,
  },
  {
    id: 'v-armazem',
    kind: 'video',
    category: 'Video real',
    title: 'Armazem e Estrutura',
    note: 'Estrutura operacional preparada para armazenagem e apoio logistico.',
    src: `${mediaBase}/videos/armazem-estrutura.mp4`,
    fallbackSrc: placeholderVideo,
    poster: heroPoster,
  },
  {
    id: 'v-equipe',
    kind: 'video',
    category: 'Video real',
    title: 'Equipe Operacional',
    note: 'Profissionais preparados para conduzir cada etapa com precisao.',
    src: `${mediaBase}/videos/equipe-operacional.mp4`,
    fallbackSrc: placeholderVideo,
    poster: heroPoster,
  },
  {
    id: 'v-institucional',
    kind: 'video',
    category: 'Video real',
    title: 'Institucional Machado',
    note: 'Uma visao completa da operacao, estrutura e compromisso da Machado Transportes.',
    src: `${mediaBase}/videos/institucional-machado.mp4`,
    fallbackSrc: placeholderVideo,
    poster: heroPoster,
  },
]

const photos = [
  {
    id: 'p1',
    kind: 'photo',
    category: 'Frota',
    title: 'Frota moderna',
    note: 'Cada registro mostra a estrutura, o cuidado e a precisao que sustentam nossas operacoes.',
    src: photoPlaceholder,
  },
  {
    id: 'p2',
    kind: 'photo',
    category: 'Operação',
    title: 'Operação em pátio',
    note: 'Fotos e videos reais da rotina Machado: frota, equipe, armazenagem, movimentacao de cargas e entregas.',
    src: photoPlaceholder,
  },
  {
    id: 'p3',
    kind: 'photo',
    category: 'Equipe',
    title: 'Equipe em ação',
    note: 'A rotina operacional reforca a confianca de quem depende de seguranca, agilidade e suporte em cada entrega.',
    src: photoPlaceholder,
  },
  {
    id: 'p4',
    kind: 'photo',
    category: 'Entrega',
    title: 'Carga pronta para entrega',
    note: 'Conteudo preparado para evidenciar frota, movimentacao de cargas, armazenagem e entregas com precisao.',
    src: photoPlaceholder,
  },
]

function MachadoPortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-machado-bg text-white">
      <FloatingWhatsApp />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mx-auto flex w-full max-w-[1540px] flex-col gap-8 px-4 pb-20 pt-4 sm:px-6 md:gap-10 md:px-10 md:pt-8 xl:px-14"
      >
        <MachadoHero featuredVideo={heroVideo} />
        <section className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          <MachadoAbout />
          <MachadoNumbers />
        </section>
        <MachadoServices />
        <section className="grid gap-8 xl:grid-cols-[0.98fr_1.02fr]">
          <MachadoDifferentials />
          <MachadoProcess />
        </section>
        <section className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          <MachadoEquipmentRental />
          <MachadoCertifications />
        </section>
        <MachadoMediaGallery videos={videos} photos={photos} />
        <MachadoCTA />
      </motion.main>
    </div>
  )
}

export default MachadoPortfolioPage
