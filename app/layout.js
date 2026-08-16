import { GoogleTagManager } from "@next/third-parties/google";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sabbir Ahmed - WordPress Developer & Web Developer",
  description:
    "Portfolio of Sabbir Ahmed - WordPress Developer and Web Developer specializing in custom themes, plugins, Elementor widgets, WooCommerce solutions, and frontend animations.",
  keywords: ["WordPress Developer", "Web Developer", "WooCommerce", "Elementor", "PHP", "React", "Next.js", "Sabbir Ahmed"],
  authors: [{ name: "Sabbir Ahmed", url: "https://www.linkedin.com/in/sabbir-ahmed-pix" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Sabbir Ahmed - WordPress Developer & Web Developer",
    description: "10+ years building custom WordPress themes, WooCommerce stores, Elementor widgets, and full-stack web apps.",
    siteName: "Sabbir Ahmed Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Sabbir Ahmed - WordPress Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbir Ahmed - WordPress Developer & Web Developer",
    description: "10+ years building custom WordPress themes, WooCommerce stores, Elementor widgets, and full-stack web apps.",
    images: ["/profile.png"],
    creator: "@SabbirPixiefy",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${hanken.variable}`}>
        <ToastContainer />
        <Navbar />
        <main className="min-h-screen relative w-full pt-16">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
