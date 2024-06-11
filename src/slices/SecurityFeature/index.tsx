import { Content, isFilled } from "@prismicio/client";
import { PrismicImage, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SecurityFeature`.
 */
export type SecurityFeatureProps =
  SliceComponentProps<Content.SecurityFeatureSlice>;

/**
 * Component for "SecurityFeature" Slices.
 */
const SecurityFeature = ({ slice }: SecurityFeatureProps): JSX.Element => {
  return (
    <section
      className="bg-[#a2185b]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-48 px-2 py-32 sm:px-6 lg:px-8">
        <div>
          {isFilled.richText(slice.primary.titlesecurity) && (
            <h2 className="text-[32px] font-bold leading-[40px] text-[#fff]">
              <PrismicText field={slice.primary.titlesecurity} />
            </h2>
          )}

          {isFilled.richText(slice.primary.description_security) && (
            <p className="my-6 text-[14px] leading-[24px] text-[#fff]">
              <PrismicText field={slice.primary.description_security} />
            </p>
          )}
        </div>

        <div>
          < div className="flex gap-6">
            {slice.primary.image_et_titre.map((item) => {
              return(
                <div key={item.alt}>
                      <PrismicImage field={item.image_security} className="rounded-lg"/>
                      <p className="text-[16px] leading-[24px] mt-6 text-[#fff] font-semibold">{item.label_image}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeature;
