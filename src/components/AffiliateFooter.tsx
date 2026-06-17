"use client";
import React from "react";

export default function AffiliateFooter() {
  return (
    <footer className="bg-[#FAF9F6]  pt-8 sm:pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 sm:gap-10 lg:gap-24">
          <div className="flex flex-col gap-4 lg:max-w-[260px]">
            <a
              className="inline-flex items-center gap-2"
              href="https://onechatai.ai"
            >
              <img
                src="/assets/images/onechat.png"
                alt="OneChat AI Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="ml-1 text-xl font-bold text-zinc-900 font-sans">
                OneChat AI
              </span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Your ultimate AI Super App for chat, images, writing and code.
            </p>
          </div>

          <div className="flex flex-row gap-8 sm:gap-12 lg:gap-16 flex-shrink-0">
            <div className="flex flex-col gap-4 min-w-[100px]">
              <h4 className="text-[11px] font-semibold text-zinc-9000 uppercase tracking-widest">
                Learn
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
                    href="https://onechatai.ai/blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
                    href="https://onechatai.ai/changelog"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
                    href="https://onechatai.ai/docs"
                  >
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 min-w-[100px]">
              <h4 className="text-[11px] font-semibold text-zinc-9000 uppercase tracking-widest">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
                    href="https://onechatai.ai/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
                    href="/affiliate"
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
                    href="mailto:support@onechatai.ai"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-4 border-t border-[#e3dccd] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs text-zinc-9000 text-center sm:text-left">
            Copyright © 2026 OneChat AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              className="text-xs text-zinc-9000 hover:text-zinc-300 transition-colors duration-200"
              href="https://onechatai.ai/privacy-policy"
            >
              Privacy Policy
            </a>
            <span className="text-zinc-800 select-none">|</span>
            <a
              className="text-xs text-zinc-9000 hover:text-zinc-300 transition-colors duration-200"
              href="https://onechatai.ai/terms-of-service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
