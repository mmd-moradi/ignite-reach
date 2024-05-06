import React from "react";
import Header from "./Header";
import { SiteConfigType } from "@/groq/config/config.types";
import Footer from "./Footer";
// import { Meta } from "../../utils";
// import { NextSeoProps } from "next-seo";

type Props = {
  children: React.ReactNode
  siteConfig: SiteConfigType;
}
const MainLayout = ({children, siteConfig}: Props) => {
  return (
    <>
      <Header config={siteConfig} />
        {children}
      <Footer config={siteConfig} />
    </>
  )
}

export default MainLayout