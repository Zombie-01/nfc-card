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
          <div className="rounded-lg border border-[#e5e7eb] p-1 dark:border-[#e5e7eb]/10">
            <Facebook size={24} />
          </div>
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/tushig000/?fbclid=IwAR1xyp2_rHtpMwYziIvP-bgIaKPAayCZVoQQxLOakVpgsmBfu_cYkB6RMdM"
        >
          <div className="rounded-lg border border-[#e5e7eb] p-1 dark:border-[#e5e7eb]/10">
            <Instagram size={24} />
          </div>
        </Link>
        <Link target="_blank" href="https://www.youtube.com/">
          <div className="rounded-lg border border-[#e5e7eb] p-1 dark:border-[#e5e7eb]/10">
            <Youtube size={24} />
          </div>
        </Link>
        <Link target="_blank" href="https://twitter.com/i/flow/single_sign_on">
          <div className="rounded-lg border border-[#e5e7eb] p-1 dark:border-[#e5e7eb]/10">
            <Twitter size={24} />
          </div>
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/feed/">
          <div className="rounded-lg border border-[#e5e7eb] p-1 dark:border-[#e5e7eb]/10">
            <Linkedin size={24} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Social
