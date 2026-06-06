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
const videoPoster = (name) => `${mediaBase}/photos/${name}.jpg`
const videoSource = (name) => `${mediaBase}/videos/${name}.mp4`

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
    description: 'Caminhoes em rota, operacao ativa e presenca logistica nas estradas.',
    duration: '00:08',
    src: videoSource('frota-em-movimento'),
    fallbackSrc: placeholderVideo,
    poster: videoPoster('frota-em-movimento'),
    thumbnail: videoPoster('frota-em-movimento'),
  },
  {
    id: 'v-carga-fechada',
    kind: 'video',
    category: 'Video real',
    title: 'Carga Fechada',
    description: 'Operacoes dedicadas com controle, exclusividade e seguranca.',
    duration: '00:10',
    src: videoSource('carga-fechada'),
    fallbackSrc: placeholderVideo,
    poster: videoPoster('carga-fechada'),
    thumbnail: videoPoster('carga-fechada'),
  },
  {
    id: 'v-carga-fracionada',
    kind: 'video',
    category: 'Video real',
    title: 'Carga Fracionada',
    description: 'Organizacao, separacao e transporte eficiente para volumes variados.',
    duration: '00:09',
    src: videoSource('carga-fracionada'),
    fallbackSrc: placeholderVideo,
    poster: videoPoster('carga-fracionada'),
    thumbnail: videoPoster('carga-fracionada'),
  },
  {
    id: 'v-empilhadeira-clamp',
    kind: 'video',
    category: 'Video real',
    title: 'Movimentacao Industrial',
    description: 'Equipamentos preparados para movimentacao segura de cargas especiais.',
    duration: '00:16',
    src: videoSource('empilhadeira-clamp'),
    fallbackSrc: placeholderVideo,
    poster: videoPoster('empilhadeira-clamp'),
    thumbnail: videoPoster('empilhadeira-clamp'),
  },
  {
    id: 'v-armazem',
    kind: 'video',
    category: 'Video real',
    title: 'Armazem e Estrutura',
    description: 'Estrutura operacional preparada para armazenagem e apoio logistico.',
    duration: '00:36',
    src: videoSource('armazem-estrutura'),
    fallbackSrc: placeholderVideo,
    poster: videoPoster('armazem-estrutura'),
    thumbnail: videoPoster('armazem-estrutura'),
  },
  {
    id: 'v-equipe',
    kind: 'video',
    category: 'Video real',
    title: 'Equipe Operacional',
    description: 'Profissionais preparados para conduzir cada etapa com precisao.',
    duration: '00:07',
    src: videoSource('equipe-operacional'),
    fallbackSrc: placeholderVideo,
    poster: videoPoster('equipe-operacional'),
    thumbnail: videoPoster('equipe-operacional'),
  },
  {
    id: 'v-institucional',
    kind: 'video',
    category: 'Video real',
    title: 'Institucional Machado',
    description: 'Uma visao completa da operacao, estrutura e compromisso da Machado Transportes.',
    duration: '00:12',
    src: videoSource('institucional-machado'),
    fallbackSrc: placeholderVideo,
    poster: videoPoster('institucional-machado'),
    thumbnail: videoPoster('institucional-machado'),
  },
]

const photos = [
  {
    id: 'p1',
    kind: 'photo',
    category: 'Frota',
    title: 'Frota moderna',
    description: 'Cada registro mostra a estrutura, o cuidado e a precisao que sustentam nossas operacoes.',
    src: photoPlaceholder,
    thumbnail: photoPlaceholder,
  },
  {
    id: 'p2',
    kind: 'photo',
    category: 'Operação',
    title: 'Operação em pátio',
    description: 'Fotos e videos reais da rotina Machado: frota, equipe, armazenagem, movimentacao de cargas e entregas.',
    src: photoPlaceholder,
    thumbnail: photoPlaceholder,
  },
  {
    id: 'p3',
    kind: 'photo',
    category: 'Equipe',
    title: 'Equipe em ação',
    description: 'A rotina operacional reforca a confianca de quem depende de seguranca, agilidade e suporte em cada entrega.',
    src: photoPlaceholder,
    thumbnail: photoPlaceholder,
  },
  {
    id: 'p4',
    kind: 'photo',
    category: 'Entrega',
    title: 'Carga pronta para entrega',
    description: 'Conteudo preparado para evidenciar frota, movimentacao de cargas, armazenagem e entregas com precisao.',
    src: photoPlaceholder,
    thumbnail: photoPlaceholder,
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
