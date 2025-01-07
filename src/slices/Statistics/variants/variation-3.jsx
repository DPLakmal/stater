import React from "react";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import CountUpAnimation from "../Components/countUpAnimation";

const Variation3 = ({ slice }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white">
        <div className="text-center 2xl:w-[1440px] 2xl:h-[616px] 2xl:p-[60px_80px]">
          {slice.statistics_subtitle && (
            <div className="mb-[10px] text-[#797979]">
              <StyledPrismicRichTextSingle
                field={slice.statistics_subtitle}
                className="text-sm"
              />
            </div>
          )}
          {slice.statistics_title && (
            <div className="mb-[20px]">
              <StyledPrismicRichTextSingle
                field={slice.statistics_title}
                className="text-title-x-large font-medium text-[#262424]"
              />
            </div>
          )}
          {slice.statistics_description && (
            <div className="mb-[60px] text-[#2B2B2B]">
              <StyledPrismicRichTextSingle
                field={slice.statistics_description}
                className="text-body-base"
              />
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:px-[89.5px]">
            {slice.statistics_cards.map(
              ({ count, count_suffix, title }, index) => (
                <div
                  key={index}
                  className={`${
                    slice.show_divider === true
                      ? `${index === 0 || index === 1 ? "md:border-r-[1px] md:border-l-[0px]" : ""} 
                      ${index === 2 ? "md:border-b-[0px] md:border-t-[0px]" : ""} 
                      ${index === 3 ? "md:border-t-[1px] md:border-r-[1px] md:border-l-[0px]" : ""} 
                      ${index === 4 ? "md:border-t-[1px] md:border-r-[1px]" : ""} 
                      ${index === 5 ? "md:border-t-[1px] md:border-l-[0px]" : ""} 
                      ${index === 0 || index === 1 ? "xl:border-r-[1px] xl:border-l-[0px] xl:border-t-[0px]" : " xl:border-l-[0px]"} 
                      ${index === 3 || index === 4 ? "xl:border-r-[1px] xl:border-t-[1px]" : ""} 
                      ${index === 2 ? "xl:border-r-[0px] xl:border-t-[0px]" : ""} 
                      ${index === 1 || index === 3 || index === 5 ? "border-l-[1px]" : ""} 
                  ${index === 2 || index === 3 || index === 4 || index === 5 ? "border-t-[1px]" : ""}`
                      : ""
                  } text-center py-6
                    }`}
                >
                  <div className="text-title-x-large font-semibold text-[#595959] mb-[2px]">
                    <CountUpAnimation
                      count={count}
                      count_suffix={count_suffix}
                    />
                  </div>

                  <StyledPrismicRichTextSingle
                    field={title}
                    className="text-base text-[#3D3D3D]"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variation3;
