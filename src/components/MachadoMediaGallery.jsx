import { useState } from 'react'
import { motion } from 'framer-motion'

function MachadoMediaGallery({ videos, photos }) {
  const [activeMedia, setActiveMedia] = useState(null)

  return (
    <section className="rounded-[32px] border border-white/10 bg-[#131313] p-8 shadow-panel">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-machado-red">Operação em movimento</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Galeria de fotos e vídeos</h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          Espaço preparado para exibir imagens reais da operação e vídeos da frota em ação.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo) => (
          <motion.button
            key={photo.id}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveMedia(photo)}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0 text-left shadow-panel"
          >
            <div className="relative h-40 overflow-hidden bg-[#0a0a0a]">
              <img
                src={photo.src}
                alt={photo.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-white">{photo.title}</p>
              <p className="mt-2 text-xs text-slate-400">Clique para ampliar</p>
            </div>
          </motion.button>
        ))}
        {videos.map((video) => (
          <motion.button
            key={video.id}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveMedia(video)}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0 text-left shadow-panel"
          >
            <div className="relative h-40 overflow-hidden bg-[#0a0a0a]">
              <img
                src={video.poster}
                alt={video.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-sm">
                  ▶ Vídeo
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-white">{video.title}</p>
              <p className="mt-2 text-xs text-slate-400">Clique para reproduzir</p>
            </div>
          </motion.button>
        ))}
      </div>

      {activeMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-8 md:p-10">
          <div className="relative w-full max-w-4xl rounded-[28px] border border-white/10 bg-[#0d0d0d] p-5 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveMedia(null)}
              className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
            >
              Fechar
            </button>
            <div className="rounded-3xl bg-[#050505] p-4">
              {activeMedia.src && activeMedia.src.endsWith('.mp4') ? (
                <video controls className="h-full w-full rounded-3xl bg-black">
                  <source src={activeMedia.src} type="video/mp4" />
                  Seu navegador não suporta reprodução de vídeo.
                </video>
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
              <p className="mt-2">Clique fora para retornar à galeria.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default MachadoMediaGallery
