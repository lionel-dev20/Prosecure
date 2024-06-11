import { ListAnimateHero } from "@/components/ListAnimateHero";
import Promise from "@/components/Promise";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      className="bg-bgsite"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-10 px-2 pt-32 sm:pt-8 pb-4 lg:px-8 sm:flex-col sm:justify-center sm:items-center">
        <div>
          {isFilled.richText(slice.primary.heading) && (
            <h1 className="text-tlecolor text-[48px] font-semibold leading-[58px] sm:text-[30px] sm:leading-[40px] sm:text-center sm:font-bold">
              <PrismicText field={slice.primary.heading} />
            </h1>
          )}

          {isFilled.richText(slice.primary.body) && (
            <p className="text-ttcolor my-6 text-[16px] leading-[24px] sm:text-center">
              <PrismicText field={slice.primary.body} />
            </p>
          )}

          {isFilled.link(slice.primary.button_link) && (
            <div className="z-10 flex items-center">
              <ShimmerButton className="shadow-2xl py-4 mt-4 sm:py-3 sm:flex sm:mx-auto">
                <span className="text-[#fff] dark:to-slate-900/10 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                  <PrismicNextLink field={slice.primary.button_link} className="text-[18px] font-normal">
                    {slice.primary.button_label}
                  </PrismicNextLink>
                </span>
              </ShimmerButton> 
            </div>
          )} 
        </div>

        {isFilled.image(slice.primary.image_hero) && (
          <PrismicNextImage
            field={slice.primary.image_hero}
            className="h-[350px] mr-8 w-auto sm:h-[320px] sm:w-auto sm:block sm:mx-auto"
          />
        )}
        <div className="m-0 p-0 sm:flex-col sm:justify-center">
        <ListAnimateHero />
        </div>
        
      </div>
      <div>
      <Promise />
      </div>
    </section>
  );
};

export default Hero;
