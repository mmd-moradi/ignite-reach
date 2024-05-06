import { cn } from "@/lib/utils";
import { Button } from "./button";

type Props = {
  label: string;
  sublabel: string;
  className?: string;
}
const CTAButton = ({ label, sublabel, className }:Props) => {
  return (
    <Button
      onClick={() => document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" })}
      className={cn("flex-col items-center gap-1 rounded-full w-full max-w-[330px] bg-primaryButton-500 h-20 hover:bg-primaryButtonHover-500 md:max-w-[410px]", 
      className && className)}>
      <span className="text-white text-lg font-bold md:text-2xl">
        {label}
      </span>
      <span className="text-white text-sm">
        {sublabel}
      </span>
    </Button>
  )
}

export default CTAButton



