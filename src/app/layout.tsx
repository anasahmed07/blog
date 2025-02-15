import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Anas log",
  description: "",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html suppressHydrationWarning lang="en">
      <body className="dark:bg-[#202124] bg-[#f5f6f7]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
