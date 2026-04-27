import { Bell, Smartphone, Zap, ShieldPlus, Gauge, Star } from 'lucide-react';

const proFeatures = [
  {
    icon: Bell,
    title: 'Advanced System Notifications',
    description: 'Rich desktop and mobile notifications tailored to your platform — timely, contextual, and privacy-respecting.',
    status: 'In progress',
  },
  {
    icon: Smartphone,
    title: 'Better Cross-Device Workflows',
    description: 'Smoother sync and continuity between your desktop and mobile devices, without compromising local-first principles.',
    status: 'Planned',
  },
  {
    icon: Zap,
    title: 'Enhanced Automation & Reminders',
    description: 'Intelligent reminders and automation rules to help you build routines and enforce your own commitments.',
    status: 'Planned',
  },
  {
    icon: ShieldPlus,
    title: 'Pro Security & Productivity Options',
    description: 'Advanced protection layers and productivity-focused settings for power users who need more control.',
    status: 'Preview',
  },
  {
    icon: Gauge,
    title: 'Faster Advanced UX Flows',
    description: 'Streamlined interactions and power-user shortcuts that make your daily Lockbox experience faster and smoother.',
    status: 'Planned',
  },
  {
    icon: Star,
    title: 'Priority Feature Rollouts',
    description: 'Pro users get early access to new features before they ship to the open-source release.',
    status: 'Confirmed',
  },
];

const statusColor: Record<string, string> = {
  'In progress': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Planned': 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  'Preview': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Confirmed': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
};

export default function ProPreview() {
  return (
    <section id="v3-pro" className="py-24 relative overflow-hidden bg-[#060b14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(6,182,212,0.05),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
            Coming soon
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What is coming with V3 / Pro
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Lockbox Pro will introduce advanced capabilities while preserving
            the open-source core of the project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-cyan-500/25 transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center group-hover:bg-cyan-500/15 transition-colors">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${statusColor[f.status]}`}>
                      {f.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-600 mt-8">
          Feature details are subject to change. Final capabilities will be shared with the waiting list first.
        </p>
      </div>
    </section>
  );
}
