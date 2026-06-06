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
      className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] p-6 shadow-panel md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),transparent_30%,transparent_75%,rgba(211,0,15,0.08))]" />
      <div className="relative flex h-full flex-col gap-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Diferenciais competitivos</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Três mensagens-chave para aumentar confiança sem poluir a leitura.
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
          O ganho aqui é de percepção: o visitante entende rápido que a Machado combina pontualidade, segurança e comunicação clara, com menos sensação de blocos repetidos.
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoDifferentials
