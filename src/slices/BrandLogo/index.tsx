import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BrandLogo`.
 */
export type BrandLogoProps = SliceComponentProps<Content.BrandLogoSlice>;

/**
 * Component for "BrandLogo" Slices.
 */
const BrandLogo = ({ slice }: BrandLogoProps): JSX.Element => {
  return (
    <section 
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
<div className="flex flex-col mx-auto max-w-7xl items-center justify-center px-2 pt-16 pb-4 sm:px-6 lg:px-8">
<PrismicRichText field={slice.primary.heading} 
components={{
  heading3: ({children}) => (
    <h3 className="text-tlecolor text-[24px] leading-[34px] text-center font-bold">
      {children}
    </h3>
  )
}}
/>  

<div className="flex gap-8 sm:gap-4 items-center justify-between mt-8 sm:grid sm:grid-cols-2">
  {slice.primary.brandlogos.map((item, index) => {
    return(
      <PrismicNextImage field={item.logobrand} key={index} width={100} height={100} className="w-44 rounded-lg shadow-lg"/>
    )
  })}
</div>
</div>


</section>
  );
};

export default BrandLogo;
