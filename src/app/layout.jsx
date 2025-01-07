import React from "react";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import Script from "next/script";
import "instantsearch.css/themes/satellite.css";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {settings.data.gtm_code && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${settings.data.gtm_code}');
            `}
          </Script>
        )}
      </head>
      <body className="overflow-x-hidden antialiased">
        {!!settings.data.gtm_code && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${settings.data.gtm_code}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
