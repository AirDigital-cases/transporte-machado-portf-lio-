import { motion } from 'framer-motion'

const aboutHighlights = [
  'Transporte de cargas',
  'Logistica regional',
  'Suporte operacional',
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
            Sobre a Machado Transportes
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            A Machado Transportes oferece solucoes completas para transporte de cargas, logistica regional, movimentacao industrial e suporte operacional.
          </p>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Nossa operacao foi estruturada para atender empresas que precisam de seguranca, agilidade e confianca em cada etapa da entrega. Com equipe qualificada, frota preparada e processos bem definidos, transformamos desafios logisticos em operacoes mais eficientes.
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
            <p className="mt-4 text-lg font-semibold text-white">Operacao conectada a necessidade de cada cliente</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Seguranca, agilidade e confianca nao aparecem apenas no discurso: fazem parte da forma como planejamos, executamos e acompanhamos cada transporte.
            </p>
          </div>
          <div className="rounded-[26px] border border-white/10 bg-[#101010] p-5">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Equipe</p>
            <p className="mt-4 text-base font-semibold text-white">Equipe qualificada</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Atendimento empresarial com suporte proximo e foco em execucao segura.
            </p>
          </div>
          <div className="rounded-[26px] border border-white/10 bg-[#101010] p-5">
            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Operacao</p>
            <p className="mt-4 text-base font-semibold text-white">Frota preparada e processos bem definidos</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Estrutura pensada para atender demandas com previsibilidade, controle e confianca.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoAbout
