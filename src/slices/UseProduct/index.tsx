import { Content, isFilled } from "@prismicio/client";
import { PrismicImage, PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `UseProduct`.
 */
export type UseProductProps = SliceComponentProps<Content.UseProductSlice>;

/**
 * Component for "UseProduct" Slices.
 */
const UseProduct = ({ slice }: UseProductProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     
     <div className="bg-[#f9fafc] py-16">
        <div className="mx-auto max-w-7xl flex items-centeré justify-center flex-col p-2 md:grid">
          {
            isFilled.richText(slice.primary.title_collection_product) && (
              <h3 className="text-[32px] font-bold leading-[40px] text-tlecolor max-w-3xl text-center">
               <PrismicText  field={slice.primary.title_collection_product} />
              </h3 >
            )
          }

          <div className="flex gap-16">
            <>
  {slice.primary.image_product.map((item) => {
return(
  <div className="flex gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-8 my-12 bg-[#fff]" key={item.alt}>
    <PrismicImage field={item.image_product} className="h-40"/>
   
    <>
   
    <div className="flex flex-col" key={item.title} >
    <h3  className="text-[32px] font-bold leading-[40px] text-tlecolor">
      <PrismicText field={item.title_product} />
      </h3>

      <p className="">
       <PrismicText field={item.description_product} />
      </p>  
      </div>
</>
    
  </div>


)  })}
</>
          </div>
 
     </div>
     </div>
    </section>
  );
};

export default UseProduct;
