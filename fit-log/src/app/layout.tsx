import type { Metadata } from "next"
import { Oswald } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import { WorkoutProvider } from "./context/WorkoutContext"
import { Toaster } from "react-hot-toast"
import Footer from "./components/footer"



const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
    >
      <body className={`min-h-full flex flex-col ${oswald.className}`}>
        <WorkoutProvider>
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </WorkoutProvider>
        <Footer />
      </body>

    </html>
  )
}
