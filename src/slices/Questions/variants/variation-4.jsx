import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import { QuestionBlocks } from "../components";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import StyledButton from "@/components/StyledButton";
import React from "react";
import { PrismicNextLink } from "@prismicio/next";

const Variation4 = ({ slice }) => {
  return (
    <div className="grid grid-cols-1  gap-y-[30px] md:gap-y-[50px] items-center justify-center xl:mx-[108px]">
      <div className="">
        {/* SubTitle, title and description */}
        <div className="text-center ">
          <StyledPrismicRichTextSingle
            field={slice?.sub_title}
            className="text-base text-[#0F77FF] font-medium leading-[19.36px] xl:"
          />
        </div>
        <div className="text-center  my-[10px] xl:my-[20px]">
          <StyledPrismicRichTextSingle
            field={slice?.title}
            className="text-title-x-large"
          />
        </div>
        <div className="text-center hero-points">
          <StyledPrismicRichText
            field={slice?.description}
            components={{
              paragraph: ({ children }) => (
                <p className={"text-title-base"}>{children}</p>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-title-base">
                  {children}
                </strong>
              ),
              hyperlink: ({ children, node }) => (
                <PrismicNextLink
                  field={node.data}
                  className="underline text-title-base decoration-1 underline-offset-2"
                >
                  {children}
                </PrismicNextLink>
              ),
            }}
          />
        </div>
        <div className="flex items-center justify-center ">
          {slice?.buttons?.map(
            ({ label, link, icon_name, icon_alignment, variant }, idx) => (
              <StyledButton
                key={idx}
                label={label}
                link={link}
                icon={icon_name}
                iconAlignment={icon_alignment}
                variant={variant?.toLowerCase()}
                className="bg-black w-fit"
              />
            ),
          )}
        </div>
      </div>

      <div className={`bg-[${slice?.faq_background}] rounded-[10px]`}>
        <QuestionBlocks list={slice.faqs} isGridView={true} />
      </div>
    </div>
  );
};

export default Variation4;
