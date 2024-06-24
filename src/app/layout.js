import { Inter } from "next/font/google";
import "./globals.css";
import { Mulish } from 'next/font/google'
import Header from "./components/Header";
import Footer from "./components/Footer";

const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Next App",
  description: "testing next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
              <Header/>
              {children}
              <Footer/>
      </body>
    </html>
  );
}
