import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollReveal from "./components/scrollreveal";
import Script from "next/script";
import { env } from "process";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200", "400", "700"], // Cardo só tem regular e bold
  display: "swap",
  variable: "--font-poppins",
});

const google_id = process.env.GOOGLE_ID

export const metadata: Metadata = {
  title: "STUDIO MOUSEINK TATTOO | Studio de tatuagem em Bombinhas-SC",
  description: "Desenvolvido por @fuziegertech",
  icons: {
    icon: "logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${google_id}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${google_id}');
          `}
        </Script>
      </head>
      <body
        className={poppins.className}
      >
        <ScrollReveal/>
        {children}
        
      </body>
    </html>
  );
}
