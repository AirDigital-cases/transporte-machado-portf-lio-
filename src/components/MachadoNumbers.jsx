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
      className="grid gap-6 rounded-[32px] border border-white/10 bg-[#0f0f0f] p-6 shadow-panel sm:grid-cols-2 lg:grid-cols-4 lg:p-8"
    >
      {facts.map((fact) => (
        <div key={fact.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <p className="text-3xl font-semibold text-white">{fact.value}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-machado-grey">{fact.label}</p>
        </div>
      ))}
    </motion.section>
  )
}

export default MachadoNumbers
