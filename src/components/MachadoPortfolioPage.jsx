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

const videos = [
  {
    id: 'v1',
    kind: 'video',
    category: 'Operacao real',
    title: 'Nossa operacao em rota',
    note: 'Cada registro mostra a estrutura, o cuidado e a precisao que sustentam nossas operacoes.',
    src: `${mediaBase}/videos/placeholder.mp4`,
    poster: `${mediaBase}/photos/hero-fallback.svg`,
  },
  {
    id: 'v2',
    kind: 'video',
    category: 'Movimentacao de cargas',
    title: 'Cargas em movimento',
    note: 'Fotos e videos reais da rotina Machado: frota, equipe, armazenagem, movimentacao de cargas e entregas.',
    src: `${mediaBase}/videos/placeholder.mp4`,
    poster: `${mediaBase}/photos/hero-fallback.svg`,
  },
]

const photos = [
  {
    id: 'p1',
    kind: 'photo',
    category: 'Frota',
    title: 'Frota moderna',
    note: 'Cada registro mostra a estrutura, o cuidado e a precisao que sustentam nossas operacoes.',
    src: `${mediaBase}/photos/placeholder.svg`,
  },
  {
    id: 'p2',
    kind: 'photo',
    category: 'Operação',
    title: 'Operação em pátio',
    note: 'Fotos e videos reais da rotina Machado: frota, equipe, armazenagem, movimentacao de cargas e entregas.',
    src: `${mediaBase}/photos/placeholder.svg`,
  },
  {
    id: 'p3',
    kind: 'photo',
    category: 'Equipe',
    title: 'Equipe em ação',
    note: 'A rotina operacional reforca a confianca de quem depende de seguranca, agilidade e suporte em cada entrega.',
    src: `${mediaBase}/photos/placeholder.svg`,
  },
  {
    id: 'p4',
    kind: 'photo',
    category: 'Entrega',
    title: 'Carga pronta para entrega',
    note: 'Conteudo preparado para evidenciar frota, movimentacao de cargas, armazenagem e entregas com precisao.',
    src: `${mediaBase}/photos/placeholder.svg`,
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
        <MachadoHero featuredVideo={videos[0]} />
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
