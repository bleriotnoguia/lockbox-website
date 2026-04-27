import { Lock, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060b14] border-t border-white/[0.06] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <Lock className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-white tracking-tight text-sm">Lockbox</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <a
              href="https://github.com/bleriotnoguia/lockbox-local"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-slate-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Desktop
            </a>
            <a
              href="https://github.com/bleriotnoguia/lockbox-local-mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-slate-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Mobile
            </a>
            <a
              href="https://bleriotnoguia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-slate-300 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              By Blériot Noguia
            </a>
          </div>

          <p className="text-xs text-slate-600">
            Open-source · Local-first · Privacy-focused
          </p>
        </div>
      </div>
    </footer>
  );
}
