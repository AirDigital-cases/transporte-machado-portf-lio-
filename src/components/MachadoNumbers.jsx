import { motion } from 'framer-motion'

const facts = [
  { label: '400 mil+ cargas', value: '400K+' },
  { label: '1.000+ veículos', value: '1.000+' },
  { label: '110+ colaboradores', value: '110+' },
  { label: '350 milhões de kg', value: '350M kg' },
]

function MachadoNumbers() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f0f0f] p-6 shadow-panel md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(255,255,255,0.05),transparent_20%,transparent_70%,rgba(211,0,15,0.08))]" />
      <div className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Escala operacional</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Números que sustentam a narrativa</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Indicadores apresentados em formato mais editorial, com leitura rápida e hierarquia mais forte no mobile e no desktop.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {facts.map((fact, index) => (
            <div key={fact.label} className="rounded-[26px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-slate-400">
                  Capacidade
                </span>
              </div>
              <p className="mt-8 text-4xl font-semibold leading-none text-white sm:text-[2.65rem]">{fact.value}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-machado-grey">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoNumbers
