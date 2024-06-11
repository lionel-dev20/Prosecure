import { Content, isFilled } from "@prismicio/client";
import {
  PrismicImage,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `TimeLineServiceAvantage`.
 */
export type TimeLineServiceAvantageProps =
  SliceComponentProps<Content.TimeLineServiceAvantageSlice>;

/**
 * Component for "TimeLineServiceAvantage" Slices.
 */
const TimeLineServiceAvantage = ({
  slice,
}: TimeLineServiceAvantageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="">
        <div className="mx-auto flex max-w-7xl grid-cols-9 flex-col p-2">
          <div className="md:contents flex items-center justify-between">
            <div className="text-gray-800 bg-white md:col-start-1 md:col-end-5 md:mr-0 md:ml-auto relative my-6 mr-auto rounded-xl p-4">
              <>
                {slice.primary.timelineservice.map((item) => {
                  return (
                    <h3
                      className="text-lg font-semibold lg:text-xl"
                      key={item.title}
                    >
                      {isFilled.richText(slice.primary.timelineservice) && (
                        <PrismicText field={item.title_timeline_service} />
                      )}
                    </h3>
                  );
                })}
              </>
              <>
                {slice.primary.timelineservice.map((item) => {
                  return (
                    <p className="mt-2 leading-6" key={item.description}>
                      <PrismicText field={item.description_timeline_service} />
                    </p>
                  );
                })}
              </>
            </div>
            <div className="md:mx-auto relative col-start-5 col-end-6 mr-7">
              <div className="flex h-full w-6 items-center justify-center">
                <div className="bg-indigo-300 from-indigo-400 to-indigo-300 h-full w-1 rounded-t-full bg-gradient-to-b"></div>
              </div>
              <div className="bg-white border-indigo-400 absolute top-1/2 -mt-3 h-6 w-6 rounded-full border-4"></div>
            </div>
            <>
              {slice.primary.timelineservice.map((item) => {
                return (
                  <div className="col-start-6 col-end-9 mr-7" key={item.image}>
                    <PrismicImage
                      field={item.image_illustrative_service}
                      alt={item.alt}
                      width={380}
                      height={380}
                      className="h-[380px] w-auto rounded-lg"
                    />
                  </div>
                );
              })}
            </>
          </div>



          <div className="md:contents flex items-center justify-between">
            <>
            <div className="col-start-1 col-end-4 mr-7">
              {slice.primary.timelineservice2.map((item) => {
                return(
                  <PrismicImage field={item.image_illustrative_service_2} alt={item.alt} width={380} height={380} key={item.alt} className=""/>
                )
              })}
              </div>
            </>
            <div className="md:mx-auto relative col-start-5 col-end-6">
              <div className="flex h-full w-6 items-center justify-center">
                <div className="bg-indigo-300 h-full w-1"></div>
              </div>
              <div className="bg-white border-indigo-400 absolute top-1/2 -mt-3 h-6 w-6 rounded-full border-4"></div>
            </div>
            <div className="text-gray-800 bg-white relative col-start-6 col-end-10 my-6 mr-auto rounded-xl p-4">
              

            <>
  {slice.primary.timelineservice2.map((item) => {
    
    return (
      <h3
        className="text-lg font-semibold lg:text-xl"
        key={item.alt}
      >
        {isFilled.richText(slice.primary.timelineservice2) && (
          <PrismicText field={item.title_timeline_service_2} />
        )}
      </h3>
    );
  })}
</>
<>
  {slice.primary.timelineservice2.map((item) => {
    return (
      <p className="mt-2 leading-6" key={item.description}>
        {
          isFilled.richText(slice.primary.timelineservice2) && (
            <PrismicText field={item.description_timeline_service_2}/>
          )
        }
        <PrismicText field={item.description_timeline_service_2}/>
      </p>
    );
  })}
</>
 </div>
</div>

          <div className="md:contents flex">
            <div className="text-gray-800 bg-white md:mr-0 md:ml-auto relative col-start-1 col-end-5 my-6 mr-auto rounded-xl p-4">
            <>
  {slice.primary.timelineservice_3.map((item) => {
    
    return (
      <h3
        className="text-lg font-semibold lg:text-xl"
        key={item.alt}
      >
                {isFilled.richText(slice.primary.timelineservice_3) && (

        <PrismicText field={item.title_timeline_service_3} />

      )}
      </h3>
    );
  })}
</>

<>
  {slice.primary.timelineservice_3.map((item) => {
    return (
      <p className="mt-2 leading-6" key={item.description}>
        {
          isFilled.richText(slice.primary.timelineservice_3) && (
            <PrismicText field={item.description_timeline_service_3} />
          )
        }
      </p>
    );
  })}
</>
            </div>
            <div className="md:mx-auto relative col-start-5 col-end-6 mr-7">
            <>
  {slice.primary.timelineservice_3.map((item) => {
    return (
      <div className="col-start-1 col-end-4 mr-7" key={item.alt} >
      {slice.primary.timelineservice_3.map((item) => {
        return(
          <PrismicImage field={item.image_illustrative_service_3} alt={item.alt} width={380} height={380} key={item.alt}  className=""/>
        )
      })}
      </div>
      
    );
  })}
  </>
       
              <div className="flex h-full w-6 items-center justify-center">
         <div className="bg-indigo-300 from-indigo-400 to-indigo-300 h-full w-1 rounded-t-full bg-gradient-to-b"></div>
              </div>
              <div className="bg-white border-indigo-400 absolute top-1/2 -mt-3 h-6 w-6 rounded-full border-4"></div>
            </div>
          </div>



          <div className="md:contents flex">
          <>
  {slice.primary.timelineservice4.map((item) => {
    return (
      <div className="col-start-1 col-end-4 mr-7" key={item.alt} >
      {slice.primary.timelineservice4.map((item) => {
        return(
          <PrismicImage field={item.image_illustrative_service4} alt={item.alt} width={380} height={380} key={item.alt}  className=""/>
        )
      })}
      </div>
      
    );
  })}
  </>
            <div className="md:mx-auto relative col-start-5 col-end-6 mr-7">
              <div className="flex h-full w-6 items-center justify-center">
                <div className="bg-indigo-300 h-full w-1"></div>
              </div>
              <div className="bg-white border-indigo-400 absolute top-1/2 -mt-3 h-6 w-6 rounded-full border-4"></div>
            </div>
            <div className="text-gray-800 bg-white relative col-start-6 col-end-10 my-6 mr-auto rounded-xl p-4">
            <>
  {slice.primary.timelineservice4.map((item) => {
    
    return (
      <h3
        className="text-lg font-semibold lg:text-xl"
        key={item.alt}
      >
                {isFilled.richText(slice.primary.timelineservice4) && (

        <PrismicText field={item.title_timeline_service_4} />

      )}
      </h3>
    );
  })}
</>

<>
  {slice.primary.timelineservice4.map((item) => {
    return (
      <p className="mt-2 leading-6" key={item.description}>
        {
          isFilled.richText(slice.primary.timelineservice4) && (
            <PrismicText field={item.description_timeline_service4} />
          )
        }
      </p>
    );
  })}
</>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLineServiceAvantage;
