import { motion } from 'framer-motion'

const steps = [
  {
    step: '1',
    title: 'Solicitação da cotação',
    description:
      'Cliente informa origem, destino e caracteristicas da carga. Nossa equipe analisa a melhor solucao logistica.',
  },
  {
    step: '2',
    title: 'Coleta da mercadoria',
    description:
      'Agendamento flexivel e coleta realizada com equipe preparada para garantir seguranca desde o inicio.',
  },
  {
    step: '3',
    title: 'Transporte e entrega',
    description:
      'Entrega no prazo acordado, com acompanhamento operacional e suporte durante todo o trajeto.',
  },
]

function MachadoProcess() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] p-6 shadow-panel md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.04),transparent_30%,transparent_75%,rgba(211,0,15,0.08))]" />
      <div className="relative flex h-full flex-col gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Processo operacional</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Da cotacao a entrega: uma operacao acompanhada de ponta a ponta
            </h2>
          </div>
        </div>
        <div className="relative grid gap-4">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-red-500/0 via-red-500/45 to-red-500/0 sm:block" />
          {steps.map((item) => (
            <div key={item.step} className="relative grid gap-4 rounded-[26px] border border-white/10 bg-white/[0.05] p-5 sm:grid-cols-[auto_1fr] sm:items-start sm:pl-20">
              <div className="sm:absolute sm:left-0 sm:top-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-lg font-semibold text-red-200">
                  {item.step}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoProcess
