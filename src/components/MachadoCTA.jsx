import { motion } from 'framer-motion'

function MachadoCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#151515] p-6 shadow-panel md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(211,0,15,0.16),transparent_30%,transparent_70%,rgba(255,255,255,0.05))]" />
      <div className="relative grid gap-6 xl:grid-cols-[1.04fr_0.96fr] xl:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Próximo passo comercial</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A base visual está pronta para apresentar a Machado como uma operação mais premium, mais organizada e mais vendável.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Se quiser, a próxima iteração pode aprofundar acervo real, provas sociais, clientes atendidos e uma galeria ainda mais cinematográfica sem quebrar a estrutura que já ficou pronta aqui.
          </p>
        </div>
        <div className="grid gap-3">
          <a
            href="https://wa.me/5511999999999?text=Olá%20Machado%20Transportes,%20gostaria%20de%20uma%20cotação"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-machado-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(211,0,15,0.28)] hover:bg-[#eb0b1b]"
          >
            Solicite uma cotação no WhatsApp
          </a>
          <a
            href="https://instagram.com/machado.transporte"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:border-white/20 hover:bg-white/10"
          >
            Instagram
          </a>
          <a
            href="https://www.machadotransportadora.com.br"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:border-white/20 hover:bg-white/10"
          >
            Site oficial
          </a>
          <div className="rounded-[24px] border border-white/10 bg-black/30 px-5 py-4 text-sm leading-6 text-slate-300">
            Visual premium, identidade coerente e estrutura de portfólio pronta para evoluir com fotos e vídeos reais.
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoCTA
