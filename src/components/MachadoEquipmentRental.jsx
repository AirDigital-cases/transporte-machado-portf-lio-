import { motion } from 'framer-motion'

const rentalBenefits = [
  'Equipamentos modernos e revisados',
  'Alto desempenho operacional',
  'Seguranca na movimentacao de cargas',
  'Atendimento agil e suporte tecnico',
  'Solucoes sob medida para operacoes industriais e logisticas',
  'Transporte com eficiencia, seguranca e confiabilidade',
]

const rentalCapabilities = [
  {
    title: 'Estrutura preparada para operacoes exigentes',
    description:
      'Nossa estrutura atende operacoes industriais, movimentacao de cargas, armazenagem e demandas logisticas sob medida.',
  },
  {
    title: 'Solucoes para pequeno, medio e grande porte',
    description:
      'Disponibilizamos equipamentos modernos, equipe tecnica e solucoes eficientes para operacoes de pequeno, medio e grande porte.',
  },
  {
    title: 'Movimentacao industrial e armazenagem',
    description:
      'A Machado oferece solucoes para movimentacao industrial, armazenagem e apoio operacional alem do transporte.',
  },
  {
    title: 'Suporte especializado',
    description:
      'Com equipamentos revisados, suporte especializado e estrutura preparada, ajudamos empresas a reduzir custos, evitar paradas e manter suas operacoes produtivas.',
  },
]

function MachadoEquipmentRental() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] p-6 shadow-panel md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),transparent_30%,transparent_75%,rgba(211,0,15,0.08))]" />
        <div className="relative grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Locação de máquinas e equipamentos</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">Locacao de Maquinas e Equipamentos</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Alem do transporte, a Machado oferece solucoes para movimentacao industrial, armazenagem e apoio operacional.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Com equipamentos revisados, suporte especializado e estrutura preparada, ajudamos empresas a reduzir custos, evitar paradas e manter suas operacoes produtivas.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-slate-500">Nossa operacao garante</p>
            <div className="mt-6 grid gap-3">
              {rentalBenefits.map((item) => (
                <div key={item} className="rounded-[22px] border border-white/10 bg-black/30 px-4 py-4 text-sm leading-6 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {rentalCapabilities.map((item) => (
            <div key={item.title} className="rounded-[26px] border border-white/10 bg-[#101010] p-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Operacao</p>
              <p className="mt-4 text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoEquipmentRental
