"use client"
import {
  Building,
  Globe,
  MapPin,
  Pencil,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react"
import Link from "next/link"
import { ReactElement, useRef } from "react"

const Contact = () => {
  return (
    <div className=" flex w-auto flex-col items-start gap-6 px-4">
      <h3 className="flex-start flex w-full text-[24px] font-semibold text-[#e92c2c]">
        Contact me
      </h3>
      <div className="flex  flex-col justify-center gap-4">
        <div className="flex items-center gap-2 rounded-lg ">
          <Building size={24} />{" "}
          <CopyDivInnerText>T&SS合同会社</CopyDivInnerText>
        </div>
        <div className="flex items-center gap-2 rounded-lg ">
          <Pencil size={24} /> <CopyDivInnerText>代表取締役</CopyDivInnerText>
        </div>
        <div className="flex items-center gap-2 rounded-lg ">
          <Phone size={24} /> <CopyDivInnerText>09057756581</CopyDivInnerText>
        </div>
        <div className="flex items-center gap-2 rounded-lg ">
          <Globe size={24} />{" "}
          <CopyDivInnerText>tandss0608@gmail.com</CopyDivInnerText>
        </div>
      </div>
    </div>
  )
}

export default Contact

function CopyDivInnerText({ children }: { children: string }) {
  const divRef = useRef<HTMLDivElement>(null)

  const copyTextToClipboard = () => {
    if (divRef.current) {
      const range = document.createRange()
      range.selectNode(divRef.current)
      window.getSelection()?.removeAllRanges()
      window.getSelection()?.addRange(range)

      try {
        document.execCommand("copy")
      } catch (err) {
        console.error("Unable to copy text: ", err)
      }

      window.getSelection()?.removeAllRanges()
    }
  }

  return (
    <div onClick={copyTextToClipboard} ref={divRef} className="">
      {children}
    </div>
  )
}
