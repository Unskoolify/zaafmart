import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Daisy from "@/components/Daisy";
import MobFooter from "@/components/MobFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zaafmart",
  description: "Online Shopping Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-500">
      <body className={inter.className}>
        {/* <Daisy/> */}
        <Header />
        {children}
        <MobFooter />
      </body>
      
    </html>
  );
}
