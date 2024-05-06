import { BookCallDataType } from "@/groq/home"
import { urlFor } from "@/lib/sanityImage";
import Image from "next/image";
import React from 'react'
import { InlineWidget } from "react-calendly";
import BlockContent from "@sanity/block-content-to-react";
import { Book, Check, CircleCheck } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationsVariants } from "./BookCall.utils";

type Props = {
  BookCallData: BookCallDataType;
}
const BookCallsection = ({BookCallData}: Props) => {
  const bookCallReasons = [BookCallData.bookCallReason1, BookCallData.bookCallReason2, BookCallData.bookCallReason3, BookCallData.bookCallReason4, BookCallData.bookCallReason5]
  return (
    <section id="book-a-call" className="w-full bg-white">
      <motion.div
        className="container px-4 py-16 border-0 md:py-0 md:h-[1020px] md:px-16"
        variants={animationsVariants.opacityAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center gap-8 md:items-center md:flex-row md:gap-[130px]">
            <div className="flex flex-col items-start gap-5 md:hidden">
              <div className="flex flex-col items-start gap-4">
                <div className="relative h-[170px] w-[170px]">
                  <Image
                  alt={BookCallData.salesmanImg.alt} 
                  src={urlFor(BookCallData.salesmanImg).url()}
                  fill
                  quality={100}
                  className="object-fill"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h2 className="text-secondary-500 font-bold text-lg md:text-xl">
                    {BookCallData.salesmanTitle}
                  </h2>
                  <h3 className="text-secondaryFont-500 font-medium text-sm md:text-base tracking-wide">
                    {BookCallData.salesmanRole}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-primaryBlack-500 font-bold text-2xl md:text-4xl">
                  {BookCallData.bookCallTitle}
                </h2>
                <p className="text-secondaryFont-500 text-base mt-2">
                  {BookCallData.bookCallDescription}
                </p>
                <p className="text-secondaryFont-500 text-base mt-3">
                  {BookCallData.bookCallDescription2}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col items-start">
              <div id="calendar" className="self-center h-[800px] inline-widget md:h-[850px] md:self-start md:w-[550px]">
                <InlineWidget styles={{width: "100%", height: "100%"}} url="https://calendly.com/mmdmi-workspace/30min" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 md:max-w-[525px]">
              <div className="hidden md:flex flex-col items-start gap-4">
                <div className="relative h-[170px] w-[170px]">
                  <Image
                  alt={BookCallData.salesmanImg.alt} 
                  src={urlFor(BookCallData.salesmanImg).url()}
                  fill
                  quality={100}
                  className="object-fill"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h2 className="text-secondary-500 font-bold text-xl">
                    {BookCallData.salesmanTitle}
                  </h2>
                  <h3 className="text-secondaryFont-500 font-medium text-base tracking-wide">
                    {BookCallData.salesmanRole}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="hidden md:flex flex-col items-start">
                  <h2 className="text-primaryBlack-500 font-bold text-4xl">
                    {BookCallData.bookCallTitle}
                  </h2>
                  <p className="text-secondaryFont-500 text-base mt-2 md:text-lg">
                    {BookCallData.bookCallDescription}
                  </p>
                  <p className="text-secondaryFont-500 text-base mt-3 md:text-lg">
                    {BookCallData.bookCallDescription2}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 mt-4">
                  <h2 className="text-tertiary-500 font-bold text-lg md:text-xl">
                    {BookCallData.bookCallReasonTittle}
                  </h2>
                  <div className="flex flex-col items-start gap-3">
                    {bookCallReasons.map((reason, index) => (
                      <div key={index} className="flex items-center gap-2.5">
                        <div className="self-start pt-1">
                          <FaCheckCircle className="w-5 h-5 text-tertiary-500" />
                        </div>
                        <BlockContent className="text-base text-[#2D2D2D]" blocks={reason} />
                      </div>
                    ))}
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

export default BookCallsection