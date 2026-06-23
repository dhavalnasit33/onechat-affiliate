import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins, DM_Sans } from "next/font/google";
import Script from "next/script";
import FaviconLoader from "@/components/FaviconLoader";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "OneChat AI | Affiliate Program",
  description:
    "Join the OneChat AI Affiliate Program and earn 30% recurring commissions by sharing the ultimate AI super app with your audience.",
  alternates: {
    canonical: "https://onechatai.ai/affiliate",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
  },
  other: {
    robots: "index,follow",
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const gtmId = "GTM-574KPV7S";

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${poppins.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>

        {/* Rewardful Base Tracking Script */}
        <Script id="rewardful-js" strategy="afterInteractive">
          {`
            (function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');
            (function() {
              var el = document.createElement('script');
              el.setAttribute('src', 'https://r.wdfl.co/rw.js');
              el.setAttribute('data-rewardful', '6325e2');
              document.body.appendChild(el);
            })();
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#05070f] text-slate-100 font-sans">
        <FaviconLoader />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
