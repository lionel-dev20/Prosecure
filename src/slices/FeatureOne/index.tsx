import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicImage,
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `FeatureOne`.
 */
export type FeatureOneProps = SliceComponentProps<Content.FeatureOneSlice>;

/**
 * Component for "FeatureOne" Slices.
 */
const FeatureOne = ({ slice }: FeatureOneProps): JSX.Element => {
  return (
    <section
      className="mt-16 bg-[#a2185b]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto sm:flex-col flex max-w-7xl items-center justify-between gap-24 px-2 py-24 sm:px-6 lg:px-8">
        {isFilled.image(slice.primary.image_featureone) && (
          <PrismicImage
            field={slice.primary.image_featureone}
            width={380}
            height={380}
            property=""
            className="w-[400px] h-auto rounded-lg"
          />
        )}
        <div className="flex flex-col gap-4">
          <div>
            {isFilled.richText(slice.primary.title_featureone) && (
              <h2 className="text-[32px] font-bold leading-[40px] text-[#fff] max-w-2xl">
                <PrismicText field={slice.primary.title_featureone} />
              </h2>
            )}
          </div>

          <div>
            {isFilled.richText(slice.primary.feature_detail) && (
              <p className="text-[14px] leading-[24px] text-[#fff] max-w-lg">
                <PrismicText field={slice.primary.description_featureone} />
              </p>
            )}
          </div>


              <div className="grid grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-8 mt-1">
              {slice.primary.feature_detail.map((item) => {
                return (
                  <div key={item.label} className="my-4">
                      <div className="w-[72px] rounded-full bg-[#8b92988a] p-3 mb-4">
                        <PrismicImage
                          field={item.icon_featureone}
                          width={48}
                          height={48}
                          alt=""
                          className="h-[48px] w-[48px]"
                        />
                      </div>
                      <h3 className="text-[18px] text-[#fff] my-3 font-semibold"><PrismicText field={item.title_service} /></h3>
                      <p className="text-[14px] font-medium leading-[24px] text-[#fff]">
                        {item.texte_iconfeatureone}
                      </p>
                    </div>
                );
              })}
          </div>
        </div>
        </div>
    </section>
  );
};

export default FeatureOne;
