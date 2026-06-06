import { motion } from 'framer-motion'

function MachadoEquipmentRental() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="grid gap-10 rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8 shadow-panel lg:grid-cols-2"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Locação de Máquinas e Equipamentos</p>
        <h2 className="mt-4 text-2xl font-semibold text-white">Locação de Máquinas e Equipamentos</h2>
        <p className="mt-5 text-sm leading-7 text-slate-300">
          Com a nossa locação de máquinas e equipamentos, você reduz custos, evita manutenção inesperada e garante alta performance para sua operação.
        </p>
        <ul className="mt-6 space-y-3 text-slate-300">
          <li>• Mais praticidade</li>
          <li>• Menos burocracia</li>
          <li>• Equipamentos prontos para uso</li>
          <li>• Economia inteligente para sua empresa</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Estrutura Completa</p>
        <h2 className="mt-4 text-2xl font-semibold text-white">Estrutura completa</h2>
        <p className="mt-5 text-sm leading-7 text-slate-300">
          A Machado Transportadora também conta com estrutura completa para locação de máquinas e equipamentos logísticos, oferecendo soluções eficientes para operações industriais, armazenagem e movimentação de cargas.
        </p>
        <p className="mt-6 text-sm leading-7 text-slate-300">
          Disponibilizamos empilhadeiras de diversas capacidades, incluindo equipamentos especializados como empilhadeira de 7 toneladas com sistema clamp, ideal para movimentação segura de bobinas de papel e cargas sensíveis.
        </p>
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#101010] p-4 text-sm text-slate-300">
          <p>Equipamentos modernos e revisados</p>
          <p>Alto desempenho operacional</p>
          <p>Segurança na movimentação de cargas</p>
          <p>Atendimento ágil e suporte técnico</p>
          <p>Soluções sob medida para operações industriais e logísticas</p>
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoEquipmentRental
