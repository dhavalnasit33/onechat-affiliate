"use client";
import React from "react";

export default function AffiliateHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 border-b border-transparent bg-transparent backdrop-blur-md">
      <div className="px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            className="flex-shrink-0 flex items-center gap-2"
            href="https://onechatai.ai"
          >
            <img
              src="/assets/images/onechat.png"
              alt="OneChat AI Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="ml-1 text-xl font-bold tracking-tight text-zinc-900">
              OneChat AI
            </span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              className="hidden sm:inline text-xs md:text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-900 transition-colors duration-200"
              href="https://onechatai.ai"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
