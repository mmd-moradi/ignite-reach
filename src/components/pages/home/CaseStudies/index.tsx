import CTAButton from "@/components/ui/CTAButton";
import { CaseStudiesType } from "@/groq/home"
import React from 'react'
import { motion } from "framer-motion";
import { animationsVariants } from "./CaseStudies.utils";

type Props = {
  caseStudiesData: CaseStudiesType;
}
const CaseStudies = ({ caseStudiesData }: Props) => {
  return (
    <section id="case-studies" className="w-full bg-white">
      <motion.div
        className="container py-16 px-4 md:py-0 md:h-[650px] md:px-16"
        variants={animationsVariants.downAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-16 md:flex-row md:justify-normal md:items-center">
            <div className="flex flex-col items-start gap-5">
              <div className="w-full flex flex-col items-center gap-3.5">
                <h2 className="text-primaryBlack-500 text-center text-xl font-bold md:text-3xl">
                  {caseStudiesData.revenueTittle}
                </h2>
                <h1 className="text-secondary-500 text-4xl font-extrabold md:text-6xl">
                  {caseStudiesData.revenueSubtitle}
                </h1>
              </div>
              <div className="grid grid-cols-[171px,171px] gap-4 md:grid-cols-[255px,255px] md:gap-4">
                {caseStudiesData.caseStudies.map((caseStudy, index) => (
                  <div key={index} className="w-full flex flex-col items-start justify-center px-3 rounded-xl h-28 bg-gradient-to-r from-primary-500 via-secondaryGradient-500 to-tertiaryGradient-500">
                    <h2 className="text-base text-white font-semibold md:text-lg">
                      {caseStudy.caseStudyTitle}
                    </h2>
                    <h1 className="text-4xl text-secondary-500 font-semibold md:text-6xl">
                      {caseStudy.caseStudyValue}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start max-w-[358px] md:max-w-[507px]">
              <div className="flex flex-col items-start gap-3.5">
                <h1 className="text-xl text-primaryBlack-500 font-bold md:text-3xl">
                  {caseStudiesData.caseStudiesDetailsTittle}
                </h1>
                <div className="flex flex-col items-start gap-6">
                  <p className="text-base text-secondaryBalck-500 md:text-lg">
                    {caseStudiesData.caseStudiesDetail}
                  </p>
                  <p className="text-base text-secondaryBalck-500 md:text-lg">
                    {caseStudiesData.caseStudiesDetail2}
                  </p>
                  <div className="flex flex-col items-start gap-5">
                    <h2 className="text-base text-secondaryBalck-500 font-bold md:text-lg">
                      {caseStudiesData.casestudiesCTATitle}
                    </h2>
                    <CTAButton className="self-center md:self-start" label={caseStudiesData.casestudiesCTAButton.label} sublabel={caseStudiesData.casestudiesCTAButton.sublabel} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CaseStudies