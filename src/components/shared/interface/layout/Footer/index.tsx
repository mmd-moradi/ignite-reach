import CTAButton from "@/components/ui/CTAButton"
import { SiteConfigType } from "@/groq/config"
import { urlFor } from "@/lib/sanityImage"
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { motion } from "framer-motion";
import { animationsVariants } from "./Footer.utils"

type Props = {
  config: SiteConfigType
}
const Footer = ({config}: Props) => {
  return (
    <footer className="w-full bg-gradient-to-r from-primary-500 via-secondaryGradient-500 to-tertiaryGradient-500">
      <motion.div
        className="container py-16 px-4 md:py-0 md:px-16 md:h-[650px]"
        variants={animationsVariants.downAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 md:gap-20">
          <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-center text-xl text-secondary-500 font-bold md:text-5xl">
                {config.footerTitle}
              </h1>
              <p className="text-center text-base text-white max-w-[722px] md:text-xl">
                {config.footerSubtitle}
              </p>
            </div>
            <CTAButton label={config.footerCTA.label} sublabel={config.footerCTA.sublabel} />
          </div>
          <div className="flex flex-col gap-3.5 items-center">
            <Link
              href="/"
              passHref
            >
              <div className="relative w-[194px] h-[44px]">
                <Image
                  alt={config.footerLogo.alt}
                  src={urlFor(config.footerLogo).url()}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-bold text-white">
                Ignite Reach - Company Location: {config.location}
              </span>
              <span className="text-sm text-white">
                Copyright © {new Date().getFullYear()} {config.footerCopyright}
              </span>
            </div>
            <div className="flex items-center">
              {config.footerSublinks.map((link, index) => (
                <div key={index} >
                  <span className="text-sm text-white">
                    {link.label}
                  </span>
                  {index !== 2 ? (
                      <span className="text-white text-sm mx-1">|</span>
                    ): ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
