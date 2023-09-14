import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

const Social = () => {
  return (
    <div className=" flex w-auto flex-col items-start gap-6 px-4">
      <h3 className="flex-start flex w-full text-[24px] font-semibold text-[#e92c2c]">
        Search me
      </h3>
      <div className="mx-auto flex justify-center gap-4">
        <Link target="_blank" href="https://www.facebook.com/tushig.regoma">
          <div className="rounded-lg border border-[#e5e7eb] p-1 dark:border-black">
            <Facebook size={28} />
          </div>
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/tushig000/?fbclid=IwAR1xyp2_rHtpMwYziIvP-bgIaKPAayCZVoQQxLOakVpgsmBfu_cYkB6RMdM"
        >
          <div className="rounded-lg border border-[#e5e7eb] p-1 dark:border-black">
            <Instagram size={28} />
          </div>
        </Link>
        <Link target="_blank" href="https://www.youtube.com/">
          <div className="rounded-lg border border-[#e5e7eb] p-1 dark:border-black">
            <Youtube size={28} />
          </div>
        </Link>
        <Link target="_blank" href="https://twitter.com/i/flow/single_sign_on">
          <div className="rounded-lg border border-[#e5e7eb] p-1 dark:border-black">
            <Twitter size={28} />
          </div>
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/feed/">
          <div className="rounded-lg border border-[#e5e7eb] p-1 dark:border-black">
            <Linkedin size={28} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Social
