import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'RNTRC regularizado',
    description:
      'Registro Nacional de Transportadores Rodoviários de Cargas ativo e em conformidade com todas as exigências legais.',
  },
  {
    title: 'Certificação ANTT',
    description:
      'Agência Nacional de Transportes Terrestres com licença ativa, garantindo operação 100% regularizada.',
  },
  {
    title: 'ISO 9001 + SSL seguro',
    description:
      'Gestão de qualidade certificada e proteção de dados com certificado SSL.',
  },
]

function MachadoCertifications() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8 shadow-panel"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Certificações e Segurança</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {certifications.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-semibold text-white">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default MachadoCertifications
