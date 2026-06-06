function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-center gap-2 md:flex">
      <a
        href="https://wa.me/5511999999999?text=Olá%20Machado%20Transportes,%20gostaria%20de%20informações"
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-machado-red text-white shadow-lg shadow-red-500/30 transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <span className="text-2xl">🟢</span>
      </a>
      <div className="rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-sm text-slate-200 shadow-lg shadow-black/30">
        Converse via WhatsApp
      </div>
    </div>
  )
}

export default FloatingWhatsApp
