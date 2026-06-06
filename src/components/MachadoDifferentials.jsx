import { motion } from 'framer-motion'

const differentials = [
  {
    title: 'Pontualidade',
    description:
      'Entregas dentro dos prazos acordados com compromisso total e monitoramento constante das rotas.',
  },
  {
    title: 'Segurança',
    description:
      'Operação com seguro de carga completo e regularização total para sua tranquilidade.',
  },
  {
    title: 'Transparência',
    description:
      'Comunicação clara e acompanhamento em tempo real de todas as entregas.',
  },
]

function MachadoDifferentials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="rounded-[32px] border border-white/10 bg-[#111111] p-8 shadow-panel"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Diferenciais Competitivos</p>
      <h2 className="mt-4 text-3xl font-semibold text-white">Diferenciais que trazem confiança</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {differentials.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-semibold text-white">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default MachadoDifferentials
