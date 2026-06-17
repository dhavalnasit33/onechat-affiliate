import AffiliateTerms from "@/components/AffiliateTerms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OneChat AI Affiliate Program Terms | Rules, Commissions & Policies",
  description:
    "Read the official OneChat AI Affiliate Program Terms. Learn about commissions, payout schedules, referral policies, advertising restrictions, and affiliate guidelines.",
  keywords: [
    "OneChat AI Affiliate Program",
    "Affiliate Terms",
    "Affiliate Commission",
    "Recurring Commission",
    "AI Affiliate Program",
    "SaaS Affiliate Program",
    "OneChat AI Terms",
  ],
  alternates: {
    canonical: "https://onechatai.ai/affiliate/terms",
  },
  openGraph: {
    title: "OneChat AI Affiliate Program Terms",
    description:
      "Review affiliate commissions, payout terms, advertising policies, and program rules for OneChat AI affiliates.",
    url: "https://onechatai.ai/affiliate/terms",
    siteName: "OneChat AI",
    type: "website",
    images: [
      {
        url: "https://onechatai.ai/assets/images/affiliate-og.png",
        width: 1200,
        height: 630,
        alt: "OneChat AI Affiliate Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneChat AI Affiliate Program Terms",
    description:
      "Everything you need to know about the OneChat AI Affiliate Program.",
    images: ["https://onechatai.ai/assets/images/affiliate-og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <AffiliateTerms />;
}
