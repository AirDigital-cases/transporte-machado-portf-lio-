import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const galleryFocus = [
  'Frota e identidade visual',
  'Equipe e operacao real',
  'Armazenagem e movimentacao de cargas',
  'Entregas com seguranca e precisao',
]

function getMediaDescription(media) {
  return media?.description ?? media?.note ?? ''
}

function getMediaThumbnail(media) {
  return media?.thumbnail ?? media?.poster ?? media?.src
}

function isPlaceholderPhoto(src) {
  return typeof src === 'string' && src.endsWith('placeholder.svg')
}

function formatVideoDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return null
  }

  const totalSeconds = Math.round(seconds)
  const minutes = Math.floor(totalSeconds / 60)
  const remainingSeconds = totalSeconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
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
  const [activeVideoId, setActiveVideoId] = useState(videos[0]?.id ?? null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [durations, setDurations] = useState({})

  useEffect(() => {
    if (videos.length === 0) {
      setActiveVideoId(null)
      return
    }

    if (!videos.some((video) => video.id === activeVideoId)) {
      setActiveVideoId(videos[0].id)
    }
  }, [activeVideoId, videos])

  const activeVideo = videos.find((video) => video.id === activeVideoId) ?? videos[0] ?? null
  const visiblePhotos = photos.filter((photo) => !isPlaceholderPhoto(photo.src))

  function handleVideoMetadata(videoId, event) {
    const formattedDuration = formatVideoDuration(event.currentTarget.duration)

    if (!formattedDuration) {
      return
    }

    setDurations((currentDurations) => {
      if (currentDurations[videoId] === formattedDuration) {
        return currentDurations
      }

      return {
        ...currentDurations,
        [videoId]: formattedDuration,
      }
    })
  }

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
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Nossa operacao em movimento
              </h2>
              <span className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                {videos.length} videos disponiveis
              </span>
            </div>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Selecione um video da lista para trocar imediatamente a exibicao principal, o titulo, a descricao e a thumb da operacao em destaque.
          </p>
        </div>

        <div className="relative mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.18fr)_400px] xl:items-start">
          <div className="space-y-4">
            {activeVideo && (
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black">
                <SafeVideoPlayer
                  controls
                  preload="metadata"
                  playsInline
                  poster={activeVideo.poster}
                  src={activeVideo.src}
                  fallbackSrc={activeVideo.fallbackSrc}
                  onLoadedMetadata={(event) => handleVideoMetadata(activeVideo.id, event)}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-red-200 backdrop-blur-md">
                  Galeria de videos
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur-md hover:bg-black/65"
                >
                  Expandir
                </button>
              </div>
            )}

            {activeVideo && (
              <div className="rounded-[28px] border border-white/10 bg-black/25 p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-slate-300">
                      {activeVideo.category}
                    </span>
                    <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-red-200">
                      ● Em reproducao
                    </span>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-slate-400">
                    {durations[activeVideo.id] ?? activeVideo.duration ?? 'Video real'}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white sm:text-[30px]">
                  {activeVideo.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                  {getMediaDescription(activeVideo)}
                </p>
              </div>
            )}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Videos</p>
                <p className="mt-2 text-sm text-slate-400">Selecione um item para trocar o destaque.</p>
              </div>
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-slate-300">
                {videos.length} videos disponiveis
              </span>
            </div>
            <div className="mt-4 grid gap-3">
              {videos.map((video) => {
                const selected = activeVideo?.id === video.id
                const duration = durations[video.id] ?? video.duration

                return (
                  <motion.button
                    key={video.id}
                    type="button"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setActiveVideoId(video.id)}
                    className={`grid gap-4 rounded-[22px] border p-3 text-left transition hover:-translate-y-0.5 sm:grid-cols-[116px_1fr] sm:items-center ${
                      selected
                        ? 'border-red-500/35 bg-red-500/10'
                        : 'border-white/10 bg-black/25 hover:border-white/20 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="relative h-28 overflow-hidden rounded-[18px] border border-white/10 bg-[#0a0a0a]">
                      <img
                        src={getMediaThumbnail(video)}
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <span className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm text-white backdrop-blur-md">
                        ▶
                      </span>
                      {duration && (
                        <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                          {duration}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">{video.category}</p>
                        {selected && (
                          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-200">
                            ● Em reproducao
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm font-semibold text-white sm:text-base">{video.title}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-400">{getMediaDescription(video)}</p>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-red-200">
                        {selected ? 'Ativo agora' : 'Clique para assistir'}
                      </p>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {galleryFocus.map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-black/25 px-4 py-5 text-sm leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>

        {visiblePhotos.length > 0 && (
          <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Fotos</p>
                <p className="mt-2 text-sm text-slate-400">Registros complementares da operacao Machado.</p>
              </div>
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-slate-300">
                {visiblePhotos.length} fotos
              </span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {visiblePhotos.map((photo) => (
                <div key={photo.id} className="overflow-hidden rounded-[22px] border border-white/10 bg-black/25">
                  <img
                    src={getMediaThumbnail(photo)}
                    alt={photo.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="space-y-2 p-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">{photo.category}</p>
                    <p className="text-sm font-semibold text-white">{photo.title}</p>
                    <p className="text-xs leading-5 text-slate-400">{getMediaDescription(photo)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeVideo && isModalOpen && (
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
                <SafeVideoPlayer
                  controls
                  preload="metadata"
                  playsInline
                  src={activeVideo.src}
                  fallbackSrc={activeVideo.fallbackSrc}
                  poster={activeVideo.poster}
                  className="h-full w-full rounded-3xl bg-black"
                />
              </div>
              <div className="mt-4 text-sm text-slate-300">
                <p className="font-semibold text-white">{activeVideo.title}</p>
                <p className="mt-2">{getMediaDescription(activeVideo)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MachadoMediaGallery
