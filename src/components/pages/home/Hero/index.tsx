import CTAButton from "@/components/ui/CTAButton";
import { HeroDataType } from "@/groq/home"
import { urlFor } from "@/lib/sanityImage";
import Image from "next/image";
import React from 'react'

type Props = {
  heroData: HeroDataType;
}
const HeroSection = ({ heroData }: Props) => {
  return (
    <section id="hero" className="w-full bg-gradient-to-r from-primary-500 via-secondaryGradient-500 to-tertiaryGradient-500">
      <div className="container px-4 pt-14 md:h-[624px] md:px-16">
        <div className="w-full flex flex-col gap-8 items-start md:items-center md:flex-row md:justify-between">
          <div className="flex flex-col items-start gap-3.5 md:max-w-[609px]">
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-white text-lg font-bold tracking-wide md:text-2xl">
                {heroData.title}
              </h3>
              <h1 className="text-secondary-500 text-2xl font-bold md:text-4xl">
                {heroData.mainTitle}
              </h1>
            </div>
            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-6">
                <p className="text-white text-base md:text-xl">
                  {heroData.subtitle}
                </p>
                <p className="text-white text-base md:text-xl">
                  {heroData.subtitle2}
                </p>
              </div>
              <CTAButton className="self-center md:self-start" label={heroData.heroCTA.label} sublabel={heroData.heroCTA.sublabel} />
            </div>
          </div>
          <div className="relative w-full h-[400px] md:h-[558px] md:w-[540px]">
            <Image
              alt={heroData.heroImg.alt} 
              src={urlFor(heroData.heroImg).url()}
              fill
              quality={100}
              className="object-contain md:object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection