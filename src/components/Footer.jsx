export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg border border-[#00e5ff]/30 flex items-center justify-center bg-[#070a0f]">
            <span className="font-black text-[#00e5ff] text-sm leading-none">S</span>
          </div>
          <span className="font-black text-white text-sm">Sambhav<span className="text-[#00e5ff]">.</span></span>
        </div>
        <p className="text-gray-600 text-sm">© 2025 Sambhav Garg. Built with React + Vite.</p>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
          <span>Available for hire</span>
        </div>
      </div>
    </footer>
  );
}
