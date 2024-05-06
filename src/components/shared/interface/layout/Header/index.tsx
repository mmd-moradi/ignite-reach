import { SiteConfigType } from "@/groq/config"
import { urlFor } from "@/lib/sanityImage";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  config: SiteConfigType;
}
const Header = ({ config }: Props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="w-full bg-gradient-to-r from-primary-500 via-secondaryGradient-500 to-tertiaryGradient-500">
      <header className="pt-8 container px-4 md:px-16">
        <div className="w-full flex items-center justify-between">
          <Link
            href="/"
            passHref
          >
            <div className="relative w-[146px] h-[44px]">
              <Image
                alt={config.logo.alt}
                quality={100}
                src={urlFor(config.logo).url()}
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {config.mainNavigation.map((navItem, index) => (
              <Link
                key={index}
                href={navItem.href}
                passHref
              >
                <span className="text-white font-medium text-lg transition-all duration-100 ease-in-out hover:opacity-90">{navItem.label}</span>
              </Link>
            ))}
          </nav>
          <Sheet open={clicked} onOpenChange={setClicked}>
            <SheetTrigger asChild>
              <Button size="icon" variant="default" className="sm:hidden h-11 w-11 rounded-lg bg-white">
                <Menu className="h-5 w-5 text-primary-500" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gradient-to-r from-primary-500 via-secondaryGradient-500 to-tertiaryGradient-500 border-0 sm:max-w-xs">
              <nav className="py-8 grid gap-6 text-lg font-medium">
                {config.mainNavigation.map((navItem, index) => (
                  <Link
                    key={index}
                    onClick={() => setClicked(false)}
                    href={navItem.href}
                    className="flex items-center gap-4 px-2.5 text-white transition-all duration-100 ease-in-out hover:opacity-90"
                  >
                    {navItem.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  )
}

export default Header