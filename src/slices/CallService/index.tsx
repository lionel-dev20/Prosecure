import ButtonLink from "@/components/ButtonLink";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Content, isFilled } from "@prismicio/client";
import { PrismicImage, PrismicText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `CallService`.
 */ 
export type CallServiceProps = SliceComponentProps<Content.CallServiceSlice>;

/**
 * Component for "CallService" Slices.
 */
const CallService = ({ slice }: CallServiceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <div className="flex flex-col mx-auto max-w-7xl items-center justify-center px-2 pt-16 mb-12 pb-4 sm:px-6 lg:px-8">
      <div className="flex gap-32">
      <div className="flex flex-col gap-6  justify-center">
          {
            isFilled.richText(slice.primary.title_service_call) && (
              <h3 className="text-tlecolor text-[32px] font-semibold leading-[40px] sm:text-[30px] sm:leading-[40px] sm:text-center sm:font-bold">
                <PrismicText field={slice.primary.title_service_call}/>
              </h3>
  
            )
          }

          {
            isFilled.richText(slice.primary.paragraphe_service_call) && (
              <p className="text-[16px] leading-[24px] mt-6 text-ttcolor "><PrismicText field={slice.primary.paragraphe_service_call}/></p>
            )
          }
          
          <ShimmerButton className="shadow-2xl mt-3 max-w-96">
             <Link href="/" className="text-[#fff]">
             Engagez un appel avec nous 
             </Link>
          </ShimmerButton>
        </div>

        {
          isFilled.image(slice.primary.image_service_call) && (
            <PrismicImage field={slice.primary.image_service_call} width={320} height={320} className="w-auto h-96 rounded-lg"/>
          )
        }

      
      </div>
     </div>
    </section>
  );
};

export default CallService;
