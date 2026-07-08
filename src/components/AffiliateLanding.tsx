"use client";
import React from "react";
import AffiliateHeader from "./AffiliateHeader";
import AffiliateFooter from "./AffiliateFooter";

const faqData = [
  {
    question: "How much can I earn?",
    answer:
      "You earn 30% recurring commission on every customer you refer, for 12 months. Because it's recurring, a single referral keeps paying you month after month — not just once. Depending on your traffic and audience, affiliates can earn anywhere from a few hundred to several thousand dollars per month.",
  },
  {
    question: "What's the commission structure?",
    answer:
      "30% of every payment your referred customers make, for a full 12 months from their signup. If they upgrade, your commission grows with them.",
  },
  {
    question: "How long does the referral cookie last?",
    answer:
      "60 days. If someone clicks your link and signs up any time within 60 days, the referral is credited to you.",
  },
  {
    question: "Who can become an affiliate?",
    answer:
      "Anyone. Creators, newsletter writers, AI educators, bloggers, consultants — if you have an audience that uses AI tools, you can join. Signup is open and approval is instant.",
  },
  {
    question: "How and when do I get paid?",
    answer:
      "We pay via PayPal or Wise. Once your balance reaches our $25 minimum payout threshold, your commission is sent. (A short holding period applies after each commission is earned to allow for refunds and cancellations.)",
  },
  {
    question: "Do you provide marketing materials?",
    answer:
      "Yes. You get a full asset kit so you can start promoting right away without asking us for anything — a demo video, brand logos, banners, screenshots, and ready-to-use messaging and copy.",
  },
  {
    question: "Can I track my performance?",
    answer:
      "Yes. You get real-time access to your own dashboard to track clicks, traffic, conversions, and earnings as they happen.",
  },
  {
    question: "What is OneChat AI? (What am I promoting?)",
    answer:
      "OneChat AI is the ultimate AI super app. It unifies ChatGPT, Claude, Gemini, DeepSeek, and all the major models, along with hundreds of tools for writing, marketing, content creation, image generation, video generation, and graphic design — all in one place. It's an easy, high-value product to recommend because it replaces multiple separate AI subscriptions with one.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sign up on this page, grab your unique referral link from your dashboard, and start sharing. You'll have everything you need in a couple of minutes.",
  },
  {
    question: "Who do I contact with questions?",
    answer: (
      <>
        Email us any time at{" "}
        <a
          href="mailto:support@onechatai.ai"
          className="text-violet-600 underline font-medium hover:text-violet-800 transition-colors"
        >
          support@onechatai.ai
        </a>
        .
      </>
    ),
  },
];

export default function AffiliateLanding() {
  const portalUrl =
    process.env.NEXT_PUBLIC_REWARDFUL_PORTAL_URL ||
    "https://onechat-ai.getrewardful.com/signup";

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-zinc-900 font-sans antialiased flex flex-col selection:bg-zinc-200 selection:text-zinc-900">
      <AffiliateHeader />

      {/* Main Content */}
      <main className="grow">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <div className="max-w-2xl w-full text-center mx-auto">
            {/* Top Badge */}
            {/* <div className="flex justify-center mb-6">
              <a
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white hover:bg-white border border-zinc-200 shadow-sm transition-colors duration-200"
                href="https://onechatai.ai"
              >
                <span className="text-[11px] text-zinc-9000 font-medium tracking-wide">
                  OneChat AI
                </span>
                <span className="text-zinc-600 text-xs scale-105">›</span>
                <span className="text-[11px] text-zinc-900 font-medium tracking-wide">
                  Affiliate Program
                </span>
              </a>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-5 leading-tight px-2 tracking-tight">
              Promote OneChat AI. <br className="sm:hidden" />
              Earn 30% Commission.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-9000 mb-5 px-4 max-w-xl mx-auto leading-relaxed">
              OneChat AI is the ultimate AI super app. It unifies ChatGPT,
              Claude, Gemini, DeepSeek, and all the major models, along with
              hundreds of tools for writing, marketing, content creation, image
              generation, video generation, and graphic design — all in one
              place.
            </p>

            {/* Creator avatars */}
            {/* <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2.5">
                <div className="flex -space-x-1.5">
                  <span className="inline-flex size-5 items-center justify-center rounded-full text-[8px] font-semibold text-white ring-[1.5px] ring-zinc-950 bg-green-600">
                    JM
                  </span>
                  <span className="inline-flex size-5 items-center justify-center rounded-full text-[8px] font-semibold text-white ring-[1.5px] ring-zinc-950 bg-blue-600">
                    AK
                  </span>
                  <span className="inline-flex size-5 items-center justify-center rounded-full text-[8px] font-semibold text-white ring-[1.5px] ring-zinc-950 bg-amber-600">
                    TR
                  </span>
                  <span className="inline-flex size-5 items-center justify-center rounded-full text-[8px] font-semibold text-white ring-[1.5px] ring-zinc-950 bg-violet-600">
                    LP
                  </span>
                  <span className="inline-flex size-5 items-center justify-center rounded-full text-[8px] font-semibold text-white ring-[1.5px] ring-zinc-950 bg-orange-500">
                    SD
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-zinc-9000">
                    <span className="font-semibold text-zinc-900">
                      400+ creators
                    </span>{" "}
                    already earning
                  </span>
                </div>
              </div>
            </div> */}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3
      h-16 px-16
      text-lg font-semibold
      rounded-full
      bg-[#6C56E5] text-white
      hover:bg-[#5B46D4]
      transition-all duration-200
      shadow-lg hover:shadow-xl
      w-full sm:w-auto"
              >
                Join Affiliate
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats Card */}
            <div className="mt-12 sm:mt-14 inline-flex divide-x divide-zinc-800 rounded-2xl border border-zinc-200 bg-white backdrop-blur-sm shadow-sm overflow-hidden">
              <div className="flex flex-col items-center px-7 py-4">
                <span className="text-2xl sm:text-3xl font-bold text-zinc-900 tabular-nums tracking-tight">
                  30%
                </span>
                <span className="mt-1 text-[10px] sm:text-xs text-zinc-9000">
                  Commission
                </span>
              </div>
              <div className="flex flex-col items-center px-7 py-4">
                <span className="text-2xl sm:text-3xl font-bold text-zinc-900 tabular-nums tracking-tight">
                  12 months
                </span>
                <span className="mt-1 text-[10px] sm:text-xs text-zinc-9000">
                  Duration
                </span>
              </div>
              <div className="flex flex-col items-center px-7 py-4">
                <span className="text-2xl sm:text-3xl font-bold text-zinc-900 tabular-nums tracking-tight">
                  60 days
                </span>
                <span className="mt-1 text-[10px] sm:text-xs text-zinc-9000">
                  Cookie Window
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 pb-32 sm:pb-48">
          <p className="text-[10px] sm:text-xs md:text-sm text-zinc-9000 uppercase tracking-[0.2em] mb-2 font-medium">
            How it works
          </p>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-zinc-900 mb-3 leading-tight px-4">
            Three steps to start earning
          </h2>
          <p className="text-[11px] sm:text-sm text-zinc-9000 mb-12 sm:mb-16 px-6">
            No upfront cost. No technical setup. Just share and earn.
          </p>

          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            <div className="hidden sm:block absolute top-7 left-[16.67%] right-[16.67%] h-px border-t border-dashed border-zinc-200"></div>

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-zinc-200 shadow-sm border border-zinc-200 flex items-center justify-center mb-5 shadow-sm text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-check w-5 h-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <polyline points="16 11 18 13 22 9"></polyline>
                </svg>
              </div>
              <p className="text-[10px] font-mono text-zinc-600 mb-1.5 tracking-wider">
                01
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-zinc-900 mb-2 leading-snug">
                Sign Up
              </h3>
              <p className="text-xs sm:text-sm text-zinc-9000 leading-relaxed max-w-[220px] mx-auto">
                Sign up and start immediately. Instant approval — no review
                period or criteria to meet.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-zinc-200 shadow-sm border border-zinc-200 flex items-center justify-center mb-5 shadow-sm text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-link2 w-5 h-5"
                >
                  <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                  <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                  <line x1="8" x2="16" y1="12" y2="12"></line>
                </svg>
              </div>
              <p className="text-[10px] font-mono text-zinc-600 mb-1.5 tracking-wider">
                02
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-zinc-900 mb-2 leading-snug">
                Share Your Link
              </h3>
              <p className="text-xs sm:text-sm text-zinc-9000 leading-relaxed max-w-[220px] mx-auto">
                Get your unique referral link and share it with founders,
                marketers, and indie hackers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-zinc-200 shadow-sm border border-zinc-200 flex items-center justify-center mb-5 shadow-sm text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up w-5 h-5"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <p className="text-[10px] font-mono text-zinc-600 mb-1.5 tracking-wider">
                03
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-zinc-900 mb-2 leading-snug">
                Earn Commission
              </h3>
              <p className="text-xs sm:text-sm text-zinc-9000 leading-relaxed max-w-[220px] mx-auto">
                30% on every payment your referrals make within 12 months. Paid
                monthly via PayPal.
              </p>
            </div>
          </div>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 h-16 px-16 text-lg font-semibold rounded-full bg-[#6C56E5] text-white hover:bg-[#5B46D4] transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Join Affiliate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          {/* END ADDED CTA 1 */}
        </div>

        {/* Program Benefits Section */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 pb-32 sm:pb-48">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-zinc-900 mb-3 leading-tight px-4">
            Program benefits
          </h2>
          <p className="text-[11px] sm:text-sm text-zinc-9000 mb-10 sm:mb-14 px-6">
            Everything you need to earn consistently.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
            {/* Card 1 */}
            <div className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-percent w-4 h-4"
                >
                  <line x1="19" x2="5" y1="5" y2="19"></line>
                  <circle cx="6.5" cy="6.5" r="2.5"></circle>
                  <circle cx="17.5" cy="17.5" r="2.5"></circle>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1.5">
                  30% Recurring Commission
                </p>
                <p className="text-xs text-zinc-9000 leading-relaxed">
                  Earn on every payment your referrals make — not just the first
                  one.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar-days w-4 h-4"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1.5">
                  12-Month Attribution
                </p>
                <p className="text-xs text-zinc-9000 leading-relaxed">
                  Long earning window. Commission on all payments within 12
                  months of referral.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-timer w-4 h-4"
                >
                  <line x1="10" x2="14" y1="2" y2="2"></line>
                  <line x1="12" x2="15" y1="14" y2="11"></line>
                  <circle cx="12" cy="14" r="8"></circle>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1.5">
                  60-Day Cookie
                </p>
                <p className="text-xs text-zinc-9000 leading-relaxed">
                  Visitors who click your link have 60 days to sign up — you
                  still get credit.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chart-column w-4 h-4"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1.5">
                  Real-Time Dashboard
                </p>
                <p className="text-xs text-zinc-9000 leading-relaxed">
                  Track clicks, conversions, and earnings live. Full
                  transparency.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layers w-4 h-4"
                >
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                  <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                  <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1.5">
                  Marketing Assets
                </p>
                <p className="text-xs text-zinc-9000 leading-relaxed">
                  Branded banners, templates, and copy — ready to use.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wallet w-4 h-4"
                >
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1.5">
                  Monthly Payouts
                </p>
                <p className="text-xs text-zinc-9000 leading-relaxed">
                  Reliable monthly PayPal payouts with a simple $25 threshold.
                </p>
              </div>
            </div>
          </div>
          {/* ADDED CTA 2 */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 h-16 px-16 text-lg font-semibold rounded-full bg-[#6C56E5] text-white hover:bg-[#5B46D4] transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Join Affiliate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          {/* END ADDED CTA 2 */}
        </div>

        {/* Product Promo Section (What you'll promote) */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 pb-32 sm:pb-48">
          <p className="text-[10px] sm:text-xs md:text-sm text-zinc-9000 uppercase tracking-[0.2em] mb-2 font-medium">
            What you&apos;ll promote
          </p>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-zinc-900 mb-3 leading-tight px-4">
            The Ultimate AI Super App
          </h2>
          <p className="text-[11px] sm:text-sm text-zinc-9000 mb-10 sm:mb-14 px-6">
            Access all top-tier models under one subscription. It sells itself.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
            {/* Promo Card 1 */}
            <div className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-700">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1.5">
                  All-in-One AI Access
                </p>
                <p className="text-xs text-zinc-9000 leading-relaxed">
                  OneChat AI brings every major AI model, and 300+ tools into
                  one place.
                </p>
              </div>
            </div>

            {/* Promo Card 2 */}
            <div className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-banknote w-4 h-4"
                >
                  <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M6 12h.01M18 12h.01"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1.5">
                  Save $250/mo+ on AI Tools
                </p>
                <p className="text-xs text-zinc-9000 leading-relaxed">
                  Instead of spending hundreds of dollars on many AI apps and
                  tools, you can get everything in one place for less than $15.
                </p>
              </div>
            </div>

            {/* Promo Card 3 */}
            <div className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users w-4 h-4"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1.5">
                  Used by Thousands of Users
                </p>
                <p className="text-xs text-zinc-9000 leading-relaxed">
                  Indie hackers, developers, writers, and students use OneChat
                  AI daily for work and study.
                </p>
              </div>
            </div>

            {/* Promo Card 4 */}
            <div className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 text-zinc-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap w-4 h-4"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1.5">
                  High Conversion Rate
                </p>
                <p className="text-xs text-zinc-9000 leading-relaxed">
                  Users instantly see the value of having all models
                  side-by-side, making upgrades easy and conversions high.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-8 pb-32 sm:pb-48">
          <div className="text-center mb-12">
            <p className="text-[10px] sm:text-xs md:text-sm text-zinc-500 uppercase tracking-[0.2em] mb-2 font-semibold">
              FAQs
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-zinc-200 divide-y divide-zinc-200">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5 sm:py-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors duration-200 cursor-pointer">
                      {item.question}
                    </span>
                    <span
                      className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#f0effd] text-[#6366f1] group-hover:bg-[#e4e2fd] transition-all duration-200 cursor-pointer`}
                    >
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 cursor-pointer"
                        >
                          <line x1="5" x2="19" y1="12" y2="12"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 cursor-pointer"
                        >
                          <line x1="12" x2="12" y1="5" y2="19"></line>
                          <line x1="5" x2="19" y1="12" y2="12"></line>
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed max-w-[90%]">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA Box */}
        {/* Start Earning Bottom Banner */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
          <div className="rounded-2xl bg-[#18181b] text-white px-4 py-6 sm:px-12 sm:py-12 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
              <div className="flex flex-col gap-3 md:max-w-[260px] lg:max-w-sm">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-1.5 shrink-0">
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-green-600 text-[8px] font-semibold text-white ring-[1.5px] ring-[#18181b] shrink-0">
                      JM
                    </span>
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-blue-600 text-[8px] font-semibold text-white ring-[1.5px] ring-[#18181b] shrink-0">
                      AK
                    </span>
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-amber-600 text-[8px] font-semibold text-white ring-[1.5px] ring-[#18181b] shrink-0">
                      TR
                    </span>
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-violet-600 text-[8px] font-semibold text-white ring-[1.5px] ring-[#18181b] shrink-0">
                      LP
                    </span>
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-orange-500 text-[8px] font-semibold text-white ring-[1.5px] ring-[#18181b] shrink-0">
                      SD
                    </span>
                  </div>
                  <p className="text-xs text-zinc-9000">
                    <span className="font-semibold text-white">
                      400+ creators
                    </span>{" "}
                    already earning
                  </p>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold leading-tight text-white">
                  Start earning today
                </h2>
                <p className="text-sm leading-relaxed text-zinc-9000">
                  Instant approval. No minimum payout threshold. Join in under a
                  minute.
                </p>
              </div>

              <div className="flex flex-col gap-4 flex-1 max-w-md">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-9000">
                  Free to join · No minimum payout
                </p>
                <a
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-8 text-sm font-semibold rounded-full bg-white text-zinc-900 hover:bg-zinc-200 transition-colors duration-200 w-full sm:w-auto text-center shadow-sm"
                >
                  Join as Affiliate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right size-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs text-zinc-9000">
                    Questions?{" "}
                    <a
                      href="mailto:support@onechatai.ai"
                      className="text-white underline font-medium hover:text-zinc-300"
                    >
                      support@onechatai.ai
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>

      <AffiliateFooter />
    </div>
  );
}
