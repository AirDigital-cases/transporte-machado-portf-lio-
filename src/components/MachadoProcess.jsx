import { motion } from 'framer-motion'

const steps = [
  {
    step: '1',
    title: 'Solicitação da cotação',
    description:
      'Cliente informa origem, destino e características da carga. Resposta rápida em até 10 minutos.',
  },
  {
    step: '2',
    title: 'Coleta da mercadoria',
    description:
      'Agendamento flexível e execução segura da coleta com equipe treinada e preparada.',
  },
  {
    step: '3',
    title: 'Transporte e entrega',
    description:
      'Entrega no prazo acordado com acompanhamento operacional full time.',
  },
]

function MachadoProcess() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="rounded-[32px] border border-white/10 bg-[#111111] p-8 shadow-panel"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Processo Operacional</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Processo operacional em 3 etapas</h2>
        </div>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {steps.map((item) => (
          <div key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-machado-red text-lg font-semibold text-white">
              {item.step}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default MachadoProcess
