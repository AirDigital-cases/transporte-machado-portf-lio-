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
            Sua operacao merece uma logistica a altura do seu crescimento.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            A Machado Transportes esta preparada para desenvolver solucoes logisticas sob medida para sua empresa, com seguranca, agilidade e suporte especializado.
          </p>
        </div>
        <div className="grid gap-3">
          <a
            href="https://wa.me/5511999999999?text=Olá%20Machado%20Transportes,%20gostaria%20de%20uma%20cotação"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-machado-red px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(211,0,15,0.28)] hover:bg-[#eb0b1b]"
          >
            Solicitar cotacao
          </a>
          <a
            href="#galeria"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:border-white/20 hover:bg-white/10"
          >
            Conhecer operacao
          </a>
          <a
            href="https://machadotransportadora.com.br"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:border-white/20 hover:bg-white/10"
          >
            Acessar site oficial
          </a>
          <div className="rounded-[24px] border border-white/10 bg-black/30 px-5 py-4 text-sm leading-6 text-slate-300">
            Seguranca, agilidade e suporte especializado para operacoes sob medida.
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoCTA
