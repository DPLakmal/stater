"use client";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import React from "react";
import CountUpAnimation from "../Components/countUpAnimation";

const Variation1 = ({ slice }) => {
  return (
    <div className="grid grid-cols-2 gap-[20px] md:grid-cols-4 md:grid-x-[90px] items-center justify-center bg-white">
      {slice?.statistics_cards.map(({ count, count_suffix, title }, index) => (
        <div key={index} className="text-center">
          <div className="mx-[24px] text-title-x-large">
            <CountUpAnimation count={count} count_suffix={count_suffix} />
          </div>
          <StyledPrismicRichTextSingle
            field={title}
            className="text-body-base text-[#00000073]"
          />
        </div>
      ))}
    </div>
  );
};

export default Variation1;
