import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import React from "react";
import CountUpAnimation from "../Components/countUpAnimation";

const Variation2 = ({ slice }) => {
  return (
    <>
      <div className="flex justify-center mb-[20px] md:mb-[30px] xl:mb-[50px] ">
        <StyledPrismicRichTextSingle
          field={slice?.statistics_title}
          className="text-title-large"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-x-[90px] items-center justify-center bg-white md:mx-[24px] xl:grid-cols-4 xl:mx-0">
        {slice?.statistics_cards.map(({ count, count_suffix, title }, idx) => (
          <div
            key={idx}
            className={`text-center px-[8px] py-[18px] md:px-[35px] md:py-[30px] xl:p-0 ${idx === 0 || idx === 1 || idx === 2 ? "xl:border-r-[1px]  xl:border-l-0 xl:border-t-0" : "xl:border-t-0 xl:border-l-0"} 
               ${idx === 1 || idx === 3 ? "border-l-[1px]" : ""} ${idx === 2 || idx === 3 ? "border-t-[1px]" : ""}`}
          >
            <div className="md:mx-[35px]">
              <div className="mx-[24px] text-title-x-large">
                <CountUpAnimation count={count} count_suffix={count_suffix} />
              </div>
              <StyledPrismicRichTextSingle
                field={title}
                className="text-body-base text-[#00000073]"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Variation2;
