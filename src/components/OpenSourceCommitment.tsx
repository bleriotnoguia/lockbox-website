import { Github, ShieldCheck, Heart, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Core stays open',
    description: 'Lockbox open-source remains active and maintained. Security fixes and core improvements are an ongoing priority.',
  },
  {
    icon: Heart,
    title: 'Pro funds the mission',
    description: 'Lockbox Pro helps fund long-term, sustainable development — making the open-source version stronger over time.',
  },
  {
    icon: TrendingUp,
    title: 'Community-driven roadmap',
    description: 'Feature requests from the community directly shape what gets built next, for both open-source and Pro.',
  },
];

export default function OpenSourceCommitment() {
  return (
    <section id="open-source" className="py-24 bg-[#060b14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.07] overflow-hidden">
          <div className="p-10 sm:p-14">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
                  Our open-source commitment
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                  Open-source at the core.
                  <br />
                  <span className="text-slate-400">Always.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Lockbox started as an open-source project built on trust.
                  That philosophy doesn't change. The open-source version will
                  continue to evolve — Pro is an extension, not a replacement.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://github.com/bleriotnoguia/lockbox-local"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4" />
                    Desktop Repository
                  </a>
                  <a
                    href="https://github.com/bleriotnoguia/lockbox-local-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4" />
                    Mobile Repository
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm mb-1">{p.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
