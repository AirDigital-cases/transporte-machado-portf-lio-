import { motion } from 'framer-motion'

const serviceBlocks = [
  {
    title: 'Cobertura estratégica',
    description:
      'Atendemos as regiões Sul, Sudeste e Centro-Oeste com rotas otimizadas e leitura operacional mais clara para o cliente.',
  },
  {
    title: 'Agilidade logística',
    description:
      'Ideal para empresas que precisam de distribuição eficiente, prazos curtos e flexibilidade para demandas recorrentes.',
  },
]

const closedLoadCards = [
  {
    eyebrow: 'Carga Fechada',
    title: 'Exclusividade',
    description:
      'Operação dedicada com caminhão exclusivo para sua empresa. Atendimento personalizado que garante total controle sobre sua carga.',
  },
  {
    eyebrow: 'Carga Fechada',
    title: 'Agilidade',
    description:
      'Rotas diretas e otimizadas, sem paradas intermediárias. Redução significativa no tempo de trânsito.',
  },
  {
    eyebrow: 'Carga Fechada',
    title: 'Segurança',
    description:
      'Proteção máxima para cargas volumosas e de alto valor. Monitoramento completo e seguro de carga incluso em toda operação.',
  },
]

const partialLoadCards = [
  {
    eyebrow: 'Carga Fracionada',
    title: 'Flexibilidade',
    description:
      'Ideal para pequenas e médias cargas que não exigem caminhão exclusivo.',
  },
  {
    eyebrow: 'Carga Fracionada',
    title: 'Economia',
    description:
      'Reduza custos logísticos pagando apenas pelo volume transportado.',
  },
  {
    eyebrow: 'Carga Fracionada',
    title: 'Agilidade',
    description:
      'Rotas otimizadas e frequência regular de coletas garantem entregas rápidas mesmo para volumes menores.',
  },
]

const operationModes = [
  {
    eyebrow: 'Carga Fechada',
    title: 'Operação dedicada para cargas que pedem exclusividade',
    description:
      'Modelo indicado para volumes maiores, mercadorias sensíveis e rotas em que o tempo de trânsito impacta diretamente a operação do cliente.',
    cards: closedLoadCards,
  },
  {
    eyebrow: 'Carga Fracionada',
    title: 'Distribuição flexível com melhor equilíbrio entre custo e velocidade',
    description:
      'Formato preparado para empresas que precisam de frequência, eficiência e controle de investimento logístico sem abrir mão de performance.',
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
              Serviços apresentados como soluções comerciais, não como blocos genéricos.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Reestruturei esta área para deixar mais evidente o que a Machado entrega, como opera e em quais cenários gera valor. Isso melhora leitura, sofisticação e a percepção de especialidade.
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
