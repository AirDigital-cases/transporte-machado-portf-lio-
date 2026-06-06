import { motion } from 'framer-motion'

function MachadoAbout() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-8 shadow-panel md:p-10"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Sobre nós</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Nossa operação conectada à sua empresa</h2>
        </div>
      </div>
      <div className="mt-8 grid gap-6 text-slate-300 sm:grid-cols-2">
        <p>
          Oferecemos soluções inteligentes em transporte e logística, com agilidade, segurança e compromisso em cada entrega.
        </p>
        <p>
          Nossa operação é estruturada para garantir excelência operacional e atendimento humanizado. Contamos com equipe qualificada, frota moderna e processos otimizados para atender às necessidades de cada cliente.
        </p>
      </div>
    </motion.section>
  )
}

export default MachadoAbout
