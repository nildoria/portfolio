import { GoogleTagManager } from "@next/third-parties/google";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

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

export const metadata = {
  title: "Sabbir Ahmed - WordPress Developer & Web Developer",
  description:
    "Portfolio of Sabbir Ahmed - WordPress Developer and Web Developer specializing in custom themes, plugins, Elementor widgets, WooCommerce solutions, and frontend animations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${hanken.variable}`}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
