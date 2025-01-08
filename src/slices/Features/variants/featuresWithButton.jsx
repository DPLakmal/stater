import StyledButton from "@/components/StyledButton";
import StyledContainer from "@/components/StyledContainer";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

const FeaturesWithButton = ({ slice }) => {
  return (
    <StyledContainer slice={slice} className="bg-[#F5F7FA]">
      <div className="flex flex-col xl:items-center xl:justify-between xl:mx-[88px]">
        <div className="flex flex-col xl:flex-row xl:justify-between w-fit">
          <div className="xl:w-1/2 text-center md:text-start ">
            <StyledPrismicRichTextSingle
              field={slice.primary.feature_subtitle}
              className="text-base text-[#1774E0] font-semibold leading-[19.36px]"
            />
            <div className="mt-[10px] mb-[10px] md:mt-[20px]">
              <StyledPrismicRichTextSingle
                field={slice.primary.feature_title}
                className="title-font text-title-x-large font-medium"
              />
            </div>
            <StyledPrismicRichText field={slice.primary.feature_description} />
          </div>
          <div className="flex flex-row justify-center gap-x-[20px] mt-[20px] md:justify-start md:mt-[42px]">
            {slice?.primary?.buttons?.map(
              ({ label, link, icon_name, icon_alignment, variant }, idx) => (
                <StyledButton
                  key={idx}
                  label={label}
                  link={link}
                  icon={icon_name}
                  iconAlignment={icon_alignment}
                  variant={variant?.toLowerCase()}
                  className="h-fit"
                />
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col items-center  xl:flex-row">
          <PrismicNextImage
            fallbackAlt=""
            field={slice.primary.feature_main_image}
            className="rounded-[10px] mt-[40px] mb-[22px] md:mb-[2px] md:mt-[50px] xl:max-w-[542px] xl:max-h-[468px] xl:mt-0 xl:mr-[42px]"
          />
          <div className="">
            {slice.primary.features.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-start mt-[20px] md:mt-[40px] md:justify-center xl:justify-start"
              >
                <PrismicNextImage
                  fallbackAlt=""
                  field={item.feature_image}
                  className="max-w-[60px] max-h-[60px] mr-[20px] bg-[#F9F9F9] p-[10px] rounded-[10px] "
                />
                <div className="flex flex-col">
                  <div className="mb-[10px]">
                    <StyledPrismicRichTextSingle
                      field={item.feature_title}
                      className="text-body-large font-medium"
                    />
                  </div>
                  <StyledPrismicRichText field={item.feature_description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default FeaturesWithButton;
