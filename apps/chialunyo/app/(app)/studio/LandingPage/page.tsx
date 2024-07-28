import { Metadata } from "next"
import { NavBar } from "./NavBar"

export const metadata: Metadata = {
  title: "Chialunyo Studio Landing Page",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "",
    images: [
      {
        width: 1200,
        height: 630,
        url: "",
      },
    ],
  },
}

export default function LandingPage() {
  return (
    <>
      <main className="bg-white dark:bg-gray-900">
        <NavBar />
      </main>
    </>
  )
}
