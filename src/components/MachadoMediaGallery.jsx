import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const galleryFocus = [
  'Frota e identidade visual',
  'Equipe e operacao real',
  'Armazenagem e movimentacao de cargas',
  'Entregas com seguranca e precisao',
]

function isVideo(media) {
  return media?.kind === 'video' || media?.src?.endsWith('.mp4')
}

function SafeVideoPlayer({ src, fallbackSrc, poster, className, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src)

  useEffect(() => {
    setCurrentSrc(src)
  }, [src])

  return (
    <video
      {...props}
      key={currentSrc}
      className={className}
      poster={poster}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
        }
      }}
    >
      <source src={currentSrc} type="video/mp4" />
      Seu navegador nao suporta reproducao de video.
    </video>
  )
}

function MachadoMediaGallery({ videos, photos }) {
  const [activeMedia, setActiveMedia] = useState(videos[0] ?? photos[0] ?? null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const mediaGroups = [
    { title: 'Vídeos', items: videos },
    { title: 'Fotos', items: photos },
  ]

  return (
    <section
      id="galeria"
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#131313] p-6 shadow-panel md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),transparent_25%,transparent_72%,rgba(211,0,15,0.08))]" />
      <div className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Portfólio de mídia</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Nossa operacao em movimento
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Fotos e videos reais da rotina Machado: frota, equipe, armazenagem, movimentacao de cargas e entregas. Cada registro mostra a estrutura, o cuidado e a precisao que sustentam nossas operacoes.
          </p>
        </div>

        <div className="relative mt-8 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[30px] border border-white/10 bg-[#0a0a0a] p-3 shadow-panel sm:p-4">
            {activeMedia && (
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black">
                {isVideo(activeMedia) ? (
                  <SafeVideoPlayer
                    controls
                    poster={activeMedia.poster}
                    src={activeMedia.src}
                    fallbackSrc={activeMedia.fallbackSrc}
                    className="aspect-[16/10] w-full object-cover"
                  />
                ) : (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="aspect-[16/10] w-full object-cover"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-red-200 backdrop-blur-md">
                  {isVideo(activeMedia) ? 'Video em destaque' : 'Foto em destaque'}
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur-md hover:bg-black/65"
                >
                  {isVideo(activeMedia) ? 'Assistir video' : 'Expandir'}
                </button>
                <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
                  <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{activeMedia.category}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{activeMedia.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{activeMedia.note}</p>
                    </div>
                    <div className="rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-3 sm:text-right">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Registro</p>
                      <p className="mt-2 text-sm font-medium text-white">
                        {isVideo(activeMedia) ? 'Operacao em video' : 'Operacao em imagem'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid gap-4">
            {mediaGroups.map((group) => (
              <div key={group.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.3em] text-machado-red">{group.title}</p>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-slate-400">
                    {group.items.length} itens
                  </span>
                </div>
                <div className="mt-4 grid gap-3">
                  {group.items.map((item) => {
                    const selected = activeMedia?.id === item.id

                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => setActiveMedia(item)}
                        className={`grid gap-4 rounded-[22px] border p-3 text-left transition hover:-translate-y-0.5 sm:grid-cols-[96px_1fr] sm:items-center ${
                          selected
                            ? 'border-red-500/35 bg-red-500/10'
                            : 'border-white/10 bg-black/25 hover:border-white/20 hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="relative h-24 overflow-hidden rounded-[18px] border border-white/10 bg-[#0a0a0a]">
                          <img
                            src={item.poster ?? item.src}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                          {isVideo(item) && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white backdrop-blur-md">
                                ▶
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">{item.category}</p>
                          <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
                          <p className="mt-2 text-xs leading-5 text-slate-400">{item.note}</p>
                          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-red-200">
                            {isVideo(item) ? 'Assistir video' : 'Ver imagem'}
                          </p>
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {galleryFocus.map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-black/25 px-4 py-5 text-sm leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>

        {activeMedia && isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 px-4 py-8 md:p-10"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative w-full max-w-5xl rounded-[28px] border border-white/10 bg-[#0d0d0d] p-5 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                Fechar
              </button>
              <div className="rounded-3xl bg-[#050505] p-4">
                {isVideo(activeMedia) ? (
                  <SafeVideoPlayer
                    controls
                    src={activeMedia.src}
                    fallbackSrc={activeMedia.fallbackSrc}
                    poster={activeMedia.poster}
                    className="h-full w-full rounded-3xl bg-black"
                  />
                ) : (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="h-full w-full rounded-3xl object-cover"
                  />
                )}
              </div>
              <div className="mt-4 text-sm text-slate-300">
                <p className="font-semibold text-white">{activeMedia.title}</p>
                <p className="mt-2">{activeMedia.note}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MachadoMediaGallery
