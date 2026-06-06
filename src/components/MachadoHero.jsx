import { motion } from 'framer-motion'

function MachadoHero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0a0a0a] p-6 shadow-panel md:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(211,0,15,0.16),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.5),transparent)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-red-300">
            Portfólio Digital
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            Família Machado Transportes
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Soluções inteligentes para transportes e logística.
          </p>
          <p className="max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Segurança, agilidade e confiança em cada entrega.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/5511999999999?text=Olá%20Machado%20Transportes,%20quero%20saber%20mais%20sobre%20suas%20soluções"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-machado-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-red-500/10 transition hover:bg-white/10 sm:w-auto"
            >
              Solicite uma cotação
            </a>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">
              Instagram: @machado.transporte
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#131313] shadow-panel"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
          <video
            className="h-full min-h-[320px] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/machado/photos/hero-fallback.svg"
          >
            <source src="/media/machado/videos/placeholder.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-5 left-5 rounded-3xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.25em] text-red-300">Vídeo</p>
            <h2 className="text-base font-semibold text-white">Frota e operação em ação</h2>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MachadoHero
