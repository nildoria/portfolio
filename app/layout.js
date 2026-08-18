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
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sabbir.bd');

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sabbir Ahmed — Full-Stack Product Engineer",
  description:
    "Full-stack product engineer. React and TypeScript on the surface, Node, Postgres and real security boundaries underneath, with ten years of WordPress behind it.",
  keywords: ["Full-Stack Engineer", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase",
    "Next.js", "WordPress Developer", "WooCommerce", "Elementor", "PHP", "Sabbir Ahmed"],
  authors: [{ name: "Sabbir Ahmed", url: "https://www.linkedin.com/in/sabbir-ahmed-pix" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Sabbir Ahmed — Full-Stack Product Engineer",
    description: "Full-stack product engineer. React and TypeScript on the surface, Node, Postgres and real security boundaries underneath, with ten years of WordPress behind it.",
    siteName: "Sabbir Ahmed Portfolio",
    // No `images` here on purpose: app/opengraph-image.png is a Next file
    // convention and overrides this key, so declaring it twice only lets the
    // two drift apart. The convention emits the correct dimensions itself.
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbir Ahmed — Full-Stack Product Engineer",
    description: "Full-stack product engineer. React and TypeScript on the surface, Node, Postgres and real security boundaries underneath, with ten years of WordPress behind it.",
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
