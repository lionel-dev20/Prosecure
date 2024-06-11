import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next"
import ShimmerButton from "./magicui/shimmer-button"


const ButtonLink = ({...restProps}: PrismicNextLinkProps) => {
  return (
    <div className="">
      <ShimmerButton className="shadow-2xl">
        <PrismicNextLink {...restProps} className="text-[#fff]"/>
      </ShimmerButton>
    </div>
  )
}

export default ButtonLink