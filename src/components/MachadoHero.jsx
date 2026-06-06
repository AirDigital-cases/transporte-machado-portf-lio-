import { motion } from 'framer-motion'

const heroStats = [
  { label: 'Atuação', value: 'Sul, Sudeste e Centro-Oeste' },
  { label: 'Soluções', value: 'Carga fechada, fracionada e logística regional' },
  { label: 'Compromisso', value: 'Segurança, agilidade e previsibilidade' },
]

const heroProofs = [
  'Transporte de cargas com operação real',
  'Estrutura preparada para demandas de pequeno, médio e grande porte',
  'Atendimento empresarial com foco em confiança e performance',
]

function MachadoHero({ featuredVideo }) {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#090909] px-5 pb-5 pt-6 shadow-panel md:px-8 md:pb-8 md:pt-8 xl:px-10 xl:pb-10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(211,0,15,0.14),transparent_24%,transparent_60%,rgba(255,255,255,0.04)_100%)]" />
      <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="relative grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.35em] text-red-200">
              Portfólio digital logístico
            </span>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.38em] text-slate-500">Machado Transportes</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] text-white sm:text-5xl xl:text-7xl">
                Movimentamos cargas. Entregamos confianca.
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Solucoes inteligentes em transporte e logistica para empresas que precisam de seguranca, agilidade e previsibilidade em cada entrega.
            </p>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              A Machado Transportes conecta operacoes, regioes e negocios atraves de uma estrutura preparada para atender demandas de pequeno, medio e grande porte.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-sm font-medium leading-6 text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="https://wa.me/5511999999999?text=Olá%20Machado%20Transportes,%20quero%20saber%20mais%20sobre%20suas%20soluções"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-machado-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(211,0,15,0.28)] hover:bg-[#eb0b1b] sm:w-auto"
            >
              Solicitar cotação
            </a>
            <a
              href="#galeria"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:border-white/20 hover:bg-white/10 sm:w-auto"
            >
              Conhecer operacao
            </a>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300">
              Carga fechada, carga fracionada e logistica regional
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {heroProofs.map((item) => (
              <div key={item} className="rounded-[22px] border border-white/10 bg-black/30 px-4 py-4 text-sm leading-6 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="grid gap-4"
        >
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#121212] shadow-panel">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
            <video
              className="h-full min-h-[360px] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={featuredVideo.poster}
            >
              <source src={featuredVideo.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-red-200 backdrop-blur-md">
              Operacao real
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{featuredVideo.category}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{featuredVideo.title}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{featuredVideo.note}</p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-4 sm:text-right">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Especialidades</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-white">Carga fechada, carga fracionada e logistica regional</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Seguranca</p>
              <p className="mt-3 text-sm leading-6 text-white">Operacao estruturada para proteger cada carga do inicio ao fim.</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Agilidade</p>
              <p className="mt-3 text-sm leading-6 text-white">Prazos competitivos e respostas alinhadas ao ritmo da sua empresa.</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Previsibilidade</p>
              <p className="mt-3 text-sm leading-6 text-white">Mais controle operacional e acompanhamento em cada entrega.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MachadoHero
