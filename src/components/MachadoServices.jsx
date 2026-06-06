import { motion } from 'framer-motion'

const serviceBlocks = [
  {
    title: 'Cobertura estratégica',
    description:
      'Atendemos as regiões Sul, Sudeste e Centro-Oeste com rotas otimizadas e entregas ágeis para sua operação.',
  },
  {
    title: 'Agilidade logística',
    description:
      'Ideal para empresas que precisam de distribuição eficiente, prazos curtos e flexibilidade operacional.',
  },
]

const closedLoadCards = [
  {
    title: 'Exclusividade',
    description:
      'Operação dedicada com caminhão exclusivo para sua empresa. Atendimento personalizado que garante total controle sobre sua carga.',
  },
  {
    title: 'Agilidade',
    description:
      'Rotas diretas e otimizadas, sem paradas intermediárias. Redução significativa no tempo de trânsito.',
  },
  {
    title: 'Segurança',
    description:
      'Proteção máxima para cargas volumosas e de alto valor. Monitoramento completo e seguro de carga incluso em toda operação.',
  },
]

const partialLoadCards = [
  {
    title: 'Flexibilidade',
    description:
      'Ideal para pequenas e médias cargas que não exigem caminhão exclusivo.',
  },
  {
    title: 'Economia',
    description:
      'Reduza custos logísticos pagando apenas pelo volume transportado.',
  },
  {
    title: 'Agilidade',
    description:
      'Rotas otimizadas e frequência regular de coletas garantem entregas rápidas mesmo para volumes menores.',
  },
]

function SectionCard({ title, description }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </div>
  )
}

function MachadoServices() {
  return (
    <section className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8 shadow-panel"
      >
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Transporte Regional</p>
          <h2 className="text-3xl font-semibold text-white">Transporte Regional</h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {serviceBlocks.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="grid gap-10 lg:grid-cols-2"
      >
        <div className="rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8 shadow-panel">
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Carga Fechada</p>
          <div className="mt-8 grid gap-4">
            {closedLoadCards.map((item) => (
              <SectionCard key={item.title} {...item} />
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8 shadow-panel">
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Carga Fracionada</p>
          <div className="mt-8 grid gap-4">
            {partialLoadCards.map((item) => (
              <SectionCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default MachadoServices
