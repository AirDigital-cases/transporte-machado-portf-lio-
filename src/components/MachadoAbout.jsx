import { motion } from 'framer-motion'

const aboutHighlights = [
  'Equipe qualificada e atendimento próximo',
  'Frota, processos e comunicação alinhados',
  'Apresentação comercial com mais percepção de valor',
]

function MachadoAbout() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] p-6 shadow-panel md:p-8 xl:p-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),transparent_24%,transparent_74%,rgba(211,0,15,0.08))]" />
      <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Perfil operacional</p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A apresentação agora comunica estrutura, segurança e maturidade operacional com mais clareza.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            A Machado deixa de parecer apenas um site institucional e passa a se posicionar como uma operação logística robusta, com narrativa visual preparada para convencer clientes, parceiros e equipes comerciais.
          </p>
          <div className="grid gap-3">
            {aboutHighlights.map((item) => (
              <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 sm:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Leitura de marca</p>
            <p className="mt-4 text-lg font-semibold text-white">Operação conectada à necessidade de cada cliente</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Oferecemos soluções inteligentes em transporte e logística, com agilidade, segurança e compromisso em cada entrega. A construção visual agora reforça esses atributos com mais profundidade e melhor ritmo entre texto, prova e mídia.
            </p>
          </div>
          <div className="rounded-[26px] border border-white/10 bg-[#101010] p-5">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Atendimento</p>
            <p className="mt-4 text-base font-semibold text-white">Contato humanizado</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Nossa operação é estruturada para garantir excelência operacional e atendimento humanizado.
            </p>
          </div>
          <div className="rounded-[26px] border border-white/10 bg-[#101010] p-5">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Capacidade</p>
            <p className="mt-4 text-base font-semibold text-white">Frota e processos otimizados</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Equipe qualificada, frota moderna e processos desenhados para atender demandas com previsibilidade.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoAbout
