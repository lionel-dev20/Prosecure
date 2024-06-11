
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Montserrat } from 'next/font/google'
import "./globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Header />
      <main > 
        {children}
        </main>
        <Footer />
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
