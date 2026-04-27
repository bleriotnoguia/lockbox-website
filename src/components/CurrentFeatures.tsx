import { Lock, Clock, Brain, AlertTriangle, CalendarClock, History } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Local Encryption',
    description: 'All your sensitive data is encrypted locally on your device. Nothing ever leaves without your permission.',
  },
  {
    icon: Clock,
    title: 'Unlock & Relock Delay',
    description: 'Set deliberate delays before content unlocks, preventing impulsive access when you need to stay focused.',
  },
  {
    icon: Brain,
    title: 'Reflection Mode',
    description: 'A mindful pause that prompts you to reflect before accessing locked content, building better habits.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Code',
    description: 'A secure fallback mechanism that lets you access your data in critical situations, always under your control.',
  },
  {
    icon: CalendarClock,
    title: 'Scheduled Unlock',
    description: 'Define time windows when your content automatically becomes accessible — on your schedule, not on impulse.',
  },
  {
    icon: History,
    title: 'Access History',
    description: 'Keep a transparent log of every access event, so you stay aware of your own usage patterns.',
  },
];

export default function CurrentFeatures() {
  return (
    <section id="features" className="py-24 bg-[#060b14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            Available today
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What you can use today
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Lockbox already protects your sensitive information locally, with strong encryption
            and anti-impulsive-access safeguards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center mb-4 group-hover:bg-emerald-500/15 transition-colors">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
