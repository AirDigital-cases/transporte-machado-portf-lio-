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

const videos = [
  {
    id: 'v1',
    title: 'Operação em rota',
    src: '/media/machado/videos/placeholder.mp4',
    poster: '/media/machado/photos/hero-fallback.svg',
  },
  {
    id: 'v2',
    title: 'Movimentação de carga',
    src: '/media/machado/videos/placeholder.mp4',
    poster: '/media/machado/photos/hero-fallback.svg',
  },
]

const photos = [
  { id: 'p1', title: 'Frota moderna', src: '/media/machado/photos/placeholder.svg' },
  { id: 'p2', title: 'Operação em pátio', src: '/media/machado/photos/placeholder.svg' },
  { id: 'p3', title: 'Equipe em ação', src: '/media/machado/photos/placeholder.svg' },
  { id: 'p4', title: 'Carga pronta para entrega', src: '/media/machado/photos/placeholder.svg' },
]

function MachadoPortfolioPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-machado-bg text-white">
      <FloatingWhatsApp />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-16 px-6 pb-20 pt-8 md:px-10 lg:px-14"
      >
        <MachadoHero />
        <section className="grid gap-16">
          <div className="space-y-12">
            <MachadoAbout />
            <MachadoNumbers />
            <MachadoServices />
            <MachadoDifferentials />
            <MachadoCertifications />
            <MachadoProcess />
            <MachadoEquipmentRental />
            <MachadoMediaGallery videos={videos} photos={photos} />
          </div>
          <MachadoCTA />
        </section>
      </motion.main>
    </div>
  )
}

export default MachadoPortfolioPage
