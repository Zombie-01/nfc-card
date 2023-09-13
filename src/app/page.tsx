import Image from "next/image"

import About from "@/components/about"
import Contact from "@/components/contact"
import Social from "@/components/social"
import ThemeSelect from "@/components/theme-select"

interface Tools {
  toolName: string
  toolLink: string
}

interface Stack {
  category: string
  tools: Tools[]
}

export const metadata = {
  description: "nfc-card",
  openGraph: {
    title: "nfc-card",
    description: "nfc-card",
    url: "https://nfc-card-lime.vercel.app/",
    siteName: "next-app-themes",
    images: [
      {
        url: "https://nfc-card-lime.vercel.app/",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-w-screen flex h-screen w-[100vw] justify-center bg-[#eeeeee] dark:bg-white/10">
      <div className=" relative flex h-screen max-h-screen min-h-screen w-screen max-w-[400px] justify-center gap-8 overflow-hidden text-center text-sm  md:text-base">
        <div className="green:bg-green-200 absolute left-0 right-0 top-0 z-20 flex h-min w-full justify-between px-4 py-2">
          <div />
          <ThemeSelect />
        </div>
        <div className="absolute -left-[60px] -top-10 h-[300px] w-[300px] overflow-hidden  rounded-full">
          <Image
            objectFit="cover"
            src="/sump-01.png"
            alt="profile-pic"
            width={300}
            height={300}
          />
        </div>
        <div className="absolute right-4 top-[140px]">
          <div className="flex flex-col gap-6 text-start">
            <h2 className="text-[40px] font-semibold text-white">
              Battu<span className="text-[#e92c2c]">shig</span>{" "}
            </h2>
            <h2 className="text-[40px] font-semibold text-white">
              Yaga<span className="text-[#e92c2c]">anbaatar</span>
            </h2>
            <h2 className="text-center text-[24px]">Lorem, ipsum.</h2>
          </div>
        </div>
        <div className="flex h-full flex-col justify-end gap-4 p-4 ">
          <About />
          <Contact />
          <Social />
        </div>
      </div>
    </main>
  )
}
