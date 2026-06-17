"use client";
import React from "react";
import AffiliateHeader from "./AffiliateHeader";
import AffiliateFooter from "./AffiliateFooter";

export default function AffiliateTerms() {
  const portalUrl =
    process.env.NEXT_PUBLIC_REWARDFUL_PORTAL_URL ||
    "https://onechat-ai.getrewardful.com/signup";

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-zinc-900 font-sans antialiased flex flex-col selection:bg-zinc-200 selection:text-zinc-900">
      <AffiliateHeader />

      {/* Main Content */}
      <main className="grow pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          {/* Back button */}
          <a
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-10"
            href="/affiliate"
          >
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
              className="lucide lucide-arrow-left size-4"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Affiliate Program
          </a>

          {/* Title block */}
          <div className="mb-14">
            <p className="text-[10px] sm:text-xs md:text-sm text-zinc-9000 uppercase tracking-[0.2em] mb-3 font-medium">
              Program Terms
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900 mb-4 leading-tight">
              OneChat AI Affiliate Program Terms
            </h1>
            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
              Everything you need to know before joining. Read through, then
              sign up and start earning.
            </p>
          </div>

          {/* Section: About */}
          <section className="mb-14">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-3">
              About OneChat AI
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              OneChat AI is the ultimate AI Super App that brings GPT-4o, Claude
              3.5 Sonnet, Gemini 1.5, and more under a single subscription. It
              replaces paying separate bills to multiple providers, starting at
              just $14.99/mo. Thousands of designers, writers, developers, and
              founders use OneChat AI daily to accelerate their work.
            </p>
          </section>

          {/* Section: Overview */}
          <section className="mb-14">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-3">
              Program Overview
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed mb-3">
              We partner with creators, writers, marketers, and developers who
              want to share OneChat AI with their audience and earn recurring
              commission on referrals. If you write or create content for
              creators, builders, students, or marketers — this program is
              designed for you.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Commissions are calculated automatically and paid monthly via
              PayPal for balances of{" "}
              <span className="font-medium text-zinc-900">$20 or more</span>.
            </p>
          </section>

          {/* Section: Program Benefits */}
          <section className="mb-14">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-4">
              Program Benefits
            </h2>
            <div className="space-y-2">
              {/* Benefit 1 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5 text-zinc-700">
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
                    className="lucide lucide-circle-check size-4"
                  >
                    <circle cx={12} cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-900 leading-snug mb-1">
                    20% Commission
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    On all referred payments within the first 6 active months of
                    their subscription.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5 text-zinc-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check size-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-900 leading-snug mb-1">
                    60-Day Cookie Window
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Visitors have 60 days to sign up and subscribe after
                    clicking your referral link.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5 text-zinc-700">
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
                    className="lucide lucide-circle-check size-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-900 leading-snug mb-1">
                    Monthly PayPal Payouts
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Automatic payouts processed monthly for balances of $20 or
                    more.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5 text-zinc-700">
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
                    className="lucide lucide-circle-check size-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-900 leading-snug mb-1">
                    Real-Time Dashboard
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Track clicks, signups, conversions, and unpaid commissions
                    live with our partner portal.
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5 text-zinc-700">
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
                    className="lucide lucide-circle-check size-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-900 leading-snug mb-1">
                    Marketing Resources
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Branded assets, design resources, social media banners, and
                    templates to start sharing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Who This Is For */}
          <section className="mb-14">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-3">
              Who This Is For
            </h2>
            <div className="space-y-2 text-sm text-zinc-500">
              <div className="flex items-start gap-2.5">
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
                  className="lucide lucide-circle-check size-4 text-zinc-900 mt-0.5 flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>
                  You have an audience of creators, developers, designers, or
                  startup operators
                </span>
              </div>
              <div className="flex items-start gap-2.5">
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
                  className="lucide lucide-circle-check size-4 text-zinc-900 mt-0.5 flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>
                  You write or create content about productivity, growth, AI, or
                  SaaS tools
                </span>
              </div>
              <div className="flex items-start gap-2.5">
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
                  className="lucide lucide-circle-check size-4 text-zinc-900 mt-0.5 flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>
                  You run a newsletter, blog, YouTube channel, or active social
                  media handle
                </span>
              </div>
              <div className="flex items-start gap-2.5">
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
                  className="lucide lucide-circle-check size-4 text-zinc-900 mt-0.5 flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>
                  You share authentic, high-quality reviews and comparisons —
                  not spam
                </span>
              </div>
            </div>
          </section>

          {/* Section: Suggested Talking Points */}
          <section className="mb-14">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-4">
              Suggested Talking Points
            </h2>
            <div className="space-y-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5">
                  <span className="text-sm font-semibold text-zinc-700">1</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  OneChat AI groups top-tier models (GPT-4o, Claude 3.5, Gemini
                  Pro) in a single workflow. Users can switch models dynamically
                  in a single chat.
                </p>
              </div>
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5">
                  <span className="text-sm font-semibold text-zinc-700">2</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  It saves over $60/mo in subscription fees, replacing
                  individual paid accounts with one unified pricing plan
                  starting at $14.99/mo.
                </p>
              </div>
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5">
                  <span className="text-sm font-semibold text-zinc-700">3</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  Dynamic workflows, prompt libraries, image generation, and
                  chat history exports are all built-in for a seamless user
                  experience.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Do's & Don'ts */}
          <section className="mb-14">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-4">
              Do&apos;s &amp; Don&apos;ts
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <h3 className="text-sm font-medium text-zinc-900 mb-3 flex items-center gap-2">
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
                    className="lucide lucide-circle-check size-4 text-emerald-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  Do
                </h3>
                <div className="space-y-2 text-xs text-zinc-500 leading-relaxed">
                  <p>
                    Clearly reference &quot;OneChat AI&quot; in reviews and
                    tutorials
                  </p>
                  <p>Use your unique link in videos, descriptions, and bios</p>
                  <p>Share genuine workflows showing comparative models</p>
                  <p>Highlight the direct cost savings for multi-model users</p>
                  <p>Engage with questions about the platform in comments</p>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <h3 className="text-sm font-medium text-zinc-900 mb-3 flex items-center gap-2">
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
                    className="lucide lucide-circle-x size-4 text-red-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                  Don&apos;t
                </h3>
                <div className="space-y-2 text-xs text-zinc-500 leading-relaxed">
                  <p>Spam public forums, threads, or channels with links</p>
                  <p>
                    Make unrealistic or misleading claims about capabilities
                  </p>
                  <p>
                    Register domains or handles containing &quot;OneChat
                    AI&quot;
                  </p>
                  <p>Violate local advertising or endorsement laws</p>
                  <p>
                    Use paid advertising to bid on branded keywords (see below)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Restrictions */}
          {/* Section: Restrictions */}
          <section className="mb-14">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-4">
              Advertising &amp; Promotion Restrictions
            </h2>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                To maintain brand consistency and avoid competition with our
                core marketing campaigns, affiliates must follow these strict
                advertising guidelines.{" "}
                <span className="font-medium text-zinc-900">
                  Violations will lead to suspension, account closure, and
                  commission forfeiture.
                </span>
              </p>

              <div className="space-y-4">
                {/* Rule 1 */}
                <div className="flex items-start gap-2.5">
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
                    className="lucide lucide-circle-x size-4 text-red-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-zinc-900 mb-0.5">
                      Brand Name Bidding
                    </p>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Do not bid on branded search keywords (e.g., &quot;OneChat
                      AI&quot;, &quot;onechatai.ai&quot;, &quot;OneChat&quot;)
                      or variations/misspellings on any paid ad platforms.
                    </p>
                  </div>
                </div>

                {/* Rule 2 */}
                <div className="flex items-start gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-x size-4 text-red-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-zinc-900 mb-0.5">
                      Paid Search Ads
                    </p>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Do not run paid Google Ads, Bing Ads, or search
                      advertisements using your affiliate referral links
                      directly.
                    </p>
                  </div>
                </div>

                {/* Rule 3 */}
                <div className="flex items-start gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-x size-4 text-red-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-zinc-900 mb-0.5">
                      Brand Impersonation
                    </p>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Do not create social channels, handles, or websites
                      masquerading as official OneChat AI pages or companies.
                    </p>
                  </div>
                </div>

                {/* Rule 4 */}
                <div className="flex items-start gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-x size-4 text-red-500 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-zinc-900 mb-0.5">
                      Cookie Stuffing &amp; Fraud
                    </p>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      No cookie stuffing, browser overlays, hidden scripts,
                      self-referrals, or automatic cookie loading are allowed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-3 bg-zinc-100 rounded-lg border border-zinc-200">
                <p className="text-xs text-zinc-600 leading-relaxed">
                  <span className="font-medium text-zinc-900">Note:</span>{" "}
                  Bidding on brand keywords and paid search campaigns using
                  affiliate links are strictly banned. No exceptions will be
                  granted.
                </p>
              </div>
            </div>
          </section>

          {/* Section: How to get started */}
          <section className="mb-14">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-4">
              How to Get Started
            </h2>
            <div className="space-y-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5">
                  <span className="text-sm font-semibold text-zinc-700">1</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-900 leading-snug mb-1">
                    Review These Terms
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Make sure you understand and agree to all marketing rules,
                    restrictions, and commission setups.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5">
                  <span className="text-sm font-semibold text-zinc-700">2</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-900 leading-snug mb-1">
                    Register Online
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Sign up via our partner portal and generate your unique
                    referral link.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-4 rounded-xl border border-zinc-200 bg-white text-left">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center mt-0.5">
                  <span className="text-sm font-semibold text-zinc-700">3</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-900 leading-snug mb-1">
                    Get Banners &amp; Copy
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Use our official logo, graphics, and email swipe files from
                    your affiliate dashboard.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Questions */}
          <section className="mb-14">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-3">
              Questions?
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed font-sans">
              Reach out to our affiliate success team at{" "}
              <a
                href="mailto:support@onechatai.ai"
                className="text-zinc-900 hover:underline font-semibold"
              >
                support@onechatai.ai
              </a>
            </p>
          </section>
        </div>

        {/* Start Earning Bottom Banner */}
        {/* Start Earning Bottom Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
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
                  <p className="text-xs text-zinc-400">
                    <span className="font-semibold text-white">
                      400+ creators
                    </span>{" "}
                    already earning
                  </p>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold leading-tight text-white">
                  Start earning today
                </h2>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Instant approval. No minimum payout threshold. Join in under a
                  minute.
                </p>
              </div>

              <div className="flex flex-col gap-4 flex-1 max-w-md">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
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
                  <p className="text-xs text-zinc-500">
                    Questions?{" "}
                    <a
                      href="mailto:support@onechatai.ai"
                      className="text-white underline font-medium hover:text-zinc-300"
                    >
                      support@onechatai.ai
                    </a>
                  </p>
                  <p className="text-xs text-zinc-500">
                    <a
                      className="text-white underline font-medium hover:text-zinc-300"
                      href="/affiliate/terms"
                    >
                      View full program terms
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AffiliateFooter />
    </div>
  );
}
