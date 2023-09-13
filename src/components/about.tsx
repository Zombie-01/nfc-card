import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

const About = () => {
  return (
    <div className=" flex w-auto flex-col items-start gap-6 px-4">
      <h3 className="flex-start flex w-full text-[24px] font-semibold text-[#e92c2c]">
        About me
      </h3>
      <div className="flex flex-col justify-center gap-4 text-start">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          eveniet!
        </p>
      </div>
    </div>
  )
}

export default About
