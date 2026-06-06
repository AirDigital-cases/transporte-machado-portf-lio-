import { motion } from 'framer-motion'

const differentials = [
  {
    title: 'Pontualidade',
    description:
      'Planejamento logistico e acompanhamento constante para cumprir prazos com responsabilidade.',
  },
  {
    title: 'Segurança',
    description:
      'Operacao regularizada, carga segurada e processos de controle para proteger cada entrega.',
  },
  {
    title: 'Transparência',
    description:
      'Comunicacao clara, suporte proximo e acompanhamento em todas as etapas da operacao.',
  },
]

function MachadoDifferentials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] p-6 shadow-panel md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),transparent_30%,transparent_75%,rgba(211,0,15,0.08))]" />
      <div className="relative flex h-full flex-col gap-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Diferenciais competitivos</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Por que empresas escolhem a Machado?
          </h2>
        </div>
        <div className="grid gap-4">
          {differentials.map((item, index) => (
            <div key={item.title} className="grid gap-4 rounded-[26px] border border-white/10 bg-white/[0.05] p-5 sm:grid-cols-[auto_1fr] sm:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-sm font-semibold text-red-200">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[24px] border border-white/10 bg-black/30 px-5 py-5 text-sm leading-7 text-slate-300">
          Pontualidade, seguranca e transparencia fazem parte da base operacional que sustenta cada entrega.
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoDifferentials
