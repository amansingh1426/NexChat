import { Link } from "react-router";
import {
  CheckCheckIcon,
  FileTextIcon,
  HeartIcon,
  MessageCircleIcon,
  PlusCircleIcon,
  SendHorizontalIcon,
} from "lucide-react";

function AuthEditorialShell({
  title,
  subtitle,
  form,
  helperText,
  helperLinkText,
  helperLinkTo,
  mode = "login",
}) {
  const visualHeadline = mode === "signup" ? "Built for Better Beginnings" : "Designed for Clarity";
  const visualBody =
    mode === "signup"
      ? "Start your workspace with a focused interface where onboarding feels effortless."
      : "Experience the next generation of team communication where every word matters.";

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#edf2f8_0%,#dfe8f4_100%)] font-['Inter',sans-serif]">
      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-4 py-8 md:px-6 md:py-14">
        <div className="w-full overflow-hidden rounded-[2rem] bg-[#f2f4f6]/75 shadow-[0_32px_64px_rgba(0,80,203,0.08)] md:grid md:grid-cols-2">
          <section className="bg-white/92 p-8 md:p-14">
            <div className="mb-10">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0050cb] text-white">
                  <MessageCircleIcon className="h-5 w-5" />
                </span>
                <span className="text-[1.65rem] font-extrabold tracking-[-0.03em] text-[#191c1e]">
                  NexChat
                </span>
              </div>
              <h1 className="mb-2 text-[2.05rem] font-bold tracking-[-0.03em] text-[#191c1e]">{title}</h1>
              <p className="text-[1rem] text-[#424656]">{subtitle}</p>
            </div>

            {form}

            <div className="mt-10 rounded-2xl bg-[#f7f9fb] px-5 py-6 text-center">
              <p className="mb-2 text-sm text-[#596071]">{helperText}</p>
              <Link className="text-base font-bold text-[#0050cb] hover:text-[#0066ff]" to={helperLinkTo}>
                {helperLinkText}
              </Link>
            </div>
          </section>

          <section className="relative hidden flex-col items-center justify-center overflow-hidden bg-[#eaf1fb] p-10 md:flex lg:p-14">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#0066ff]/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#0050cb]/10 blur-2xl" />

            <div className="relative w-full max-w-md rounded-[1.65rem] bg-white p-5 shadow-[0_12px_32px_rgba(25,28,30,0.06)]">
              <div className="mb-7 flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0050cb] to-[#6ca2ff]" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#191c1e]">Editorial Team</p>
                  <p className="text-[11px] font-medium text-emerald-600">typing...</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="max-w-[82%] rounded-2xl rounded-bl-md bg-[#e0e3e5] px-4 py-3 text-[#191c1e]">
                  The new campaign assets are ready for review. 🚀
                </div>
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-[#0050cb] px-4 py-3 text-white">
                  Great! I&apos;ll check them right now.
                  <CheckCheckIcon className="ml-1 inline h-3.5 w-3.5 align-[-1px]" />
                </div>
                <div className="max-w-[82%] rounded-2xl rounded-bl-md bg-[#e0e3e5] px-4 py-3 text-[#191c1e]">
                  Perfect. Let me know if you need any adjustments.
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-full bg-[#f2f4f6] px-3 py-2">
                <PlusCircleIcon className="h-4 w-4 text-[#6e7687]" />
                <span className="flex-1 text-xs text-[#8a90a0]">Type a message...</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0066ff] text-white">
                  <SendHorizontalIcon className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div className="absolute right-8 top-7 rounded-2xl bg-white p-3 shadow-[0_10px_28px_rgba(25,28,30,0.10)]">
              <HeartIcon className="h-5 w-5 fill-[#0050cb] text-[#0050cb]" />
            </div>

            <div className="absolute left-6 top-[44%] flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow-[0_10px_28px_rgba(25,28,30,0.10)]">
              <span className="rounded-lg bg-[#ebf2ff] p-2 text-[#0050cb]">
                <FileTextIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-[#191c1e]">Campaign_Final.pdf</p>
                <p className="text-[10px] text-[#6d7586]">2.4 MB • Sent</p>
              </div>
            </div>

            <div className="mt-11 max-w-sm text-center">
              <h2 className="mb-2 text-[1.9rem] font-bold tracking-[-0.03em] text-[#191c1e]">
                {visualHeadline}
              </h2>
              <p className="text-sm leading-relaxed text-[#424656]">{visualBody}</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 pb-6 text-xs text-[#8a90a0] md:flex-row md:gap-6 md:px-7">
        <p>© 2026 NexChat. All rights reserved.</p>
        <div className="flex gap-5">
          <a className="underline-offset-2 hover:underline" href="#">
            Privacy Policy
          </a>
          <a className="underline-offset-2 hover:underline" href="#">
            Terms of Service
          </a>
          <a className="underline-offset-2 hover:underline" href="#">
            Cookie Settings
          </a>
        </div>
      </footer>
    </div>
  );
}

export default AuthEditorialShell;
