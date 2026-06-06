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
      className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] p-6 shadow-panel md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.04),transparent_30%,transparent_75%,rgba(211,0,15,0.08))]" />
      <div className="relative flex h-full flex-col gap-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Segurança e governança</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Seguranca, regularizacao e confianca
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            A Machado atua com responsabilidade operacional, regularizacao e processos que reforcam a seguranca de cada transporte.
          </p>
        </div>
        <div className="grid gap-4">
          {certifications.map((item) => (
            <div key={item.title} className="rounded-[26px] border border-white/10 bg-white/[0.05] p-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Comprovação</p>
              <p className="mt-4 text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default MachadoCertifications
