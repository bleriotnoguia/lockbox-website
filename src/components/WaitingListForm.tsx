import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function WaitingListForm() {
  const [email, setEmail] = useState('');
  const [waitingList, setWaitingList] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [featureRequest, setFeatureRequest] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (!waitingList && !newsletter) {
      setErrorMsg('Please select at least one option.');
      return;
    }
    setErrorMsg('');
    setState('loading');

    const { error } = await supabase.from('leads').upsert(
      {
        email: email.trim().toLowerCase(),
        waiting_list_opt_in: waitingList,
        newsletter_opt_in: newsletter,
        feature_request: featureRequest.trim(),
        source: 'landing_v3',
        locale: 'en',
      },
      { onConflict: 'email' }
    );

    if (error) {
      setState('error');
      setErrorMsg('Something went wrong. Please try again.');
    } else {
      setState('success');
    }
  };

  if (state === 'success') {
    return (
      <section id="waiting-list" className="py-24 bg-[#060b14]">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
          <p className="text-slate-400 leading-relaxed">
            Thanks for joining. You'll be among the first to hear about Lockbox V3 and Pro.
            We'll share the roadmap, top-requested features, and early access details directly to your inbox.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="waiting-list" className="py-24 relative overflow-hidden bg-[#060b14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(6,182,212,0.06),transparent)]" />

      <div className="relative max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
            Shape the future
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Help shape Lockbox V3
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Join the waiting list, get early access, and tell us what you need most.
            Your feedback directly influences the roadmap.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 sm:p-10"
        >
          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email address <span className="text-cyan-400">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 text-white placeholder:text-slate-600 text-sm transition-colors"
            />
          </div>

          {/* Checkboxes */}
          <div className="mb-6 flex flex-col gap-3">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-0.5">
                <input
                  type="checkbox"
                  checked={waitingList}
                  onChange={(e) => setWaitingList(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    waitingList
                      ? 'bg-cyan-500 border-cyan-500'
                      : 'bg-white/5 border-white/15 group-hover:border-white/25'
                  }`}
                  onClick={() => setWaitingList(!waitingList)}
                >
                  {waitingList && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-white">Join the V3/Pro waiting list</span>
                <p className="text-xs text-slate-500 mt-0.5">Get early access and first-look announcements</p>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-0.5">
                <input
                  type="checkbox"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    newsletter
                      ? 'bg-cyan-500 border-cyan-500'
                      : 'bg-white/5 border-white/15 group-hover:border-white/25'
                  }`}
                  onClick={() => setNewsletter(!newsletter)}
                >
                  {newsletter && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-white">Receive the Lockbox newsletter</span>
                <p className="text-xs text-slate-500 mt-0.5">Occasional project updates, no spam</p>
              </div>
            </label>
          </div>

          {/* Feature request */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              What feature do you want most?
              <span className="text-slate-600 ml-1 font-normal">(optional)</span>
            </label>
            <textarea
              value={featureRequest}
              onChange={(e) => setFeatureRequest(e.target.value)}
              placeholder="Describe the feature you'd love to see in Lockbox V3..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 text-white placeholder:text-slate-600 text-sm transition-colors resize-none"
            />
          </div>

          {errorMsg && (
            <p className="text-red-400 text-sm mb-4">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={state === 'loading'}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:-translate-y-0.5"
          >
            {state === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Join the list
              </>
            )}
          </button>

          <p className="text-center text-xs text-slate-600 mt-4">
            Unsubscribe anytime. Your email is only used for Lockbox updates.
          </p>
        </form>
      </div>
    </section>
  );
}
