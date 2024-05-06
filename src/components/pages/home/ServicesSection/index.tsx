import CTAButton from "@/components/ui/CTAButton";
import { ServicesDataType } from "@/groq/home";
import { urlFor } from "@/lib/sanityImage";
import Image from "next/image";
import React from 'react'
import { motion } from "framer-motion";
import { animationsVariants } from "./ServicesSection.utils";

type Props = {
  servicesData: ServicesDataType;

}
const ServicesSection = ({ servicesData }: Props) => {
  return (
    <section id="services" className="w-full bg-gradient-to-r from-primary-500 via-secondaryGradient-500 to-tertiaryGradient-500">
      <motion.div
        className="container px-4 py-14 border-0 md:pb-0 md:h-[700px] md:px-16"
        variants={animationsVariants.downAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center gap-8 md:flex-row md:gap-[120px]">
            <div className="flex flex-col items-start gap-8 max-w-[520px]">
              <div className="flex flex-col items-start gap-1">
                <h2 className="text-tertiaryFont-500 text-xl font-medium md:text-3xl">
                  {servicesData.servicesTitle}
                </h2>
                <h1 className="text-secondary-500 font-bold text-3xl md:text-5xl">
                  {servicesData.serviceTitle}
                </h1>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="text-white text-base md:text-lg">
                  {servicesData.serviceDescription}
                </p>
                <div className="flex flex-col items-start gap-6">
                  <p className="text-white text-base md:text-lg">
                    {servicesData.serviceDescription2}
                  </p>
                  <CTAButton className="self-center md:self-start" label={servicesData.servicesCTA.label} sublabel={servicesData.servicesCTA.sublabel} />
                </div>
              </div>
            </div>
            <div className="relative w-full h-[400px] md:h-[500px] md:w-[501px]">
              <Image
                alt={servicesData.servicesImg.alt} 
                src={urlFor(servicesData.servicesImg).url()}
                fill
                quality={100}
                className="object-contain md:object-fill"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ServicesSection