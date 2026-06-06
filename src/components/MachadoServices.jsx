import { motion } from 'framer-motion'

const serviceBlocks = [
  {
    title: 'Atuacao estrategica',
    description:
      'Atuamos de forma estrategica nas regioes Sul, Sudeste e Centro-Oeste, com rotas otimizadas, prazos competitivos e uma operacao preparada para acompanhar o ritmo da sua empresa.',
  },
  {
    title: 'Controle e previsibilidade',
    description:
      'Nossa logistica regional garante mais controle, previsibilidade e eficiencia para empresas que precisam distribuir cargas com seguranca e agilidade.',
  },
]

const closedLoadCards = [
  {
    eyebrow: 'Carga Fechada',
    title: 'Exclusividade',
    description:
      'Veiculo dedicado para sua empresa, garantindo controle total da carga desde a coleta ate a entrega.',
  },
  {
    eyebrow: 'Carga Fechada',
    title: 'Agilidade',
    description:
      'Rotas diretas e otimizadas, sem paradas intermediarias, reduzindo o tempo de transito da operacao.',
  },
  {
    eyebrow: 'Carga Fechada',
    title: 'Segurança',
    description:
      'Monitoramento, seguro de carga e cuidado operacional para mercadorias volumosas, sensiveis ou de alto valor.',
  },
]

const partialLoadCards = [
  {
    eyebrow: 'Carga Fracionada',
    title: 'Flexibilidade',
    description:
      'Compartilhamento inteligente de espaco, adaptado ao volume e a necessidade da sua operacao.',
  },
  {
    eyebrow: 'Carga Fracionada',
    title: 'Economia',
    description:
      'Reducao de custos logisticos ao pagar apenas pelo espaco utilizado no transporte.',
  },
  {
    eyebrow: 'Carga Fracionada',
    title: 'Agilidade',
    description:
      'Rotas planejadas e frequencia operacional para manter entregas rapidas, seguras e eficientes.',
  },
]

const operationModes = [
  {
    eyebrow: 'Carga Fechada',
    title: 'Carga Fechada',
    description:
      'Solucao dedicada para operacoes que exigem exclusividade, controle e seguranca maxima durante todo o transporte.',
    cards: closedLoadCards,
  },
  {
    eyebrow: 'Carga Fracionada',
    title: 'Carga Fracionada',
    description:
      'Ideal para empresas que precisam transportar pequenas e medias cargas sem contratar um veiculo exclusivo.',
    cards: partialLoadCards,
  },
]

function OverviewCard({ title, description }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
      <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Pilar</p>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </div>
  )
}

function ModeCard({ eyebrow, title, description, cards }) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#0f0f0f] p-6 shadow-panel md:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm uppercase tracking-[0.3em] text-machado-red">{eyebrow}</p>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-slate-400">
          Modelo operacional
        </span>
      </div>
      <h3 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-white">{title}</h3>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {cards.map((item) => (
          <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">{item.eyebrow}</p>
            <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MachadoServices() {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] p-6 shadow-panel md:p-8"
      >
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),transparent_24%,transparent_74%,rgba(211,0,15,0.08))]" />
        <div className="relative grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Frentes de operação</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Transporte Regional
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Atuamos de forma estrategica nas regioes Sul, Sudeste e Centro-Oeste, com rotas otimizadas, prazos competitivos e uma operacao preparada para acompanhar o ritmo da sua empresa.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceBlocks.map((item) => (
              <OverviewCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </motion.div>

      {operationModes.map((mode, index) => (
        <motion.div
          key={mode.eyebrow}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 * (index + 1) }}
        >
          <ModeCard {...mode} />
        </motion.div>
      ))}
    </section>
  )
}

export default MachadoServices
