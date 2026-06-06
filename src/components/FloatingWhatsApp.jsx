function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2a9.9 9.9 0 0 0-8.6 14.77L2 22l5.39-1.41A9.9 9.9 0 0 0 12.04 22c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.89-7.19Zm-7.01 15.41a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-3.2.84.86-3.12-.2-.32a8.27 8.27 0 0 1-1.28-4.38c0-4.57 3.72-8.3 8.3-8.3 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.43 5.88c0 4.58-3.72 8.31-8.22 8.31Zm4.55-6.2c-.25-.12-1.49-.74-1.72-.82-.23-.08-.4-.12-.57.12-.17.25-.65.82-.8.98-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.25-.74-.66-1.24-1.49-1.39-1.74-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.21-.49-.42-.42-.57-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.18 3.7.58.25 1.03.4 1.39.52.58.18 1.1.16 1.52.1.46-.07 1.49-.61 1.7-1.2.21-.6.21-1.11.14-1.21-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  )
}

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 md:bottom-6 md:right-6">
      <div className="hidden rounded-2xl border border-white/10 bg-black/75 px-4 py-3 text-sm text-slate-200 shadow-lg shadow-black/30 backdrop-blur-md md:block">
        Atendimento comercial via WhatsApp
      </div>
      <a
        href="https://wa.me/5511999999999?text=Olá%20Machado%20Transportes,%20gostaria%20de%20informações"
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-machado-red text-white shadow-[0_18px_40px_rgba(211,0,15,0.35)] transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full border border-red-300/40 animate-ping opacity-40" />
        <span className="relative">
          <WhatsAppIcon />
        </span>
      </a>
    </div>
  )
}

export default FloatingWhatsApp
