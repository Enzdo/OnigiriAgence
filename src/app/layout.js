import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onigiri agence",
  description: "l'agence de demain",
  icons: {
    icon:[
      '/favicon.ico?=1'
    ],
    apple:[
      '/apple-touch-icon.png?v=4'
    ],
    shortcut:[
      '/apple-touch-icon.png'
    ],
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
