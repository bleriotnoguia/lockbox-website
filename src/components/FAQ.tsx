import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Will open-source be discontinued?',
    a: 'No. Lockbox open-source remains active, maintained, and a long-term priority. The open-source version will continue to receive security fixes and core improvements regardless of Pro.',
  },
  {
    q: 'Do I need Pro to keep using Lockbox?',
    a: 'Absolutely not. The open-source version is fully functional and will remain so. Pro is an optional upgrade for users who want advanced workflows and capabilities — it is never a requirement.',
  },
  {
    q: 'Will Pro be a subscription?',
    a: 'No. The current plan is a one-time purchase with lifetime access. We will always label this clearly as "current plan" until finalized, so you have full transparency on pricing.',
  },
  {
    q: 'When is V3 launching?',
    a: 'The timeline will be shared with the waiting list first. Join to be the first to know — we will send a roadmap snapshot and launch details directly to subscribers.',
  },
  {
    q: 'Will my data stay private?',
    a: 'Yes. The local-first, privacy-first philosophy is unchanged. Your data stays on your device. No unnecessary telemetry, no cloud sync without your explicit consent.',
  },
  {
    q: 'Who is building Lockbox?',
    a: 'Lockbox is built by Blériot Noguia. You can learn more at bleriotnoguia.com or explore the source code on GitHub.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm sm:text-base font-medium text-white group-hover:text-cyan-300 transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}
      >
        <p className="text-sm text-slate-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#060b14]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Frequently asked questions
          </h2>
          <p className="text-slate-400">
            Transparent answers to common questions.
          </p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl px-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
