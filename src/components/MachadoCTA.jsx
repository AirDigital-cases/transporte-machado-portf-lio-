import { motion } from 'framer-motion'

function MachadoCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="rounded-[32px] border border-white/10 bg-[#151515] p-8 shadow-panel"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Sua satisfação é nossa prioridade</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Sua logística precisa de uma transportadora preparada para crescer junto com sua empresa.</h2>
        </div>
        <div className="grid gap-3 sm:auto-cols-fr sm:grid-flow-col">
          <a
            href="https://wa.me/5511999999999?text=Olá%20Machado%20Transportes,%20gostaria%20de%20uma%20cotação"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-machado-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-red-500/20"
          >
            Solicite uma cotação no WhatsApp
          </a>
          <a
            href="https://instagram.com/machado.transporte"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.machadotransportadora.com.br"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white"
          >
            Site oficial
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoCTA
