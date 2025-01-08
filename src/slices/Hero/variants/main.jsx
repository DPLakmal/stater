import StyledContainer from "@/components/StyledContainer";
import { PrismicNextImage } from "@prismicio/next";
import { ButtonContainer } from "../components";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[24px] md:gap-[30px] xl:gap-[21px] items-center">
        <div className="max-w-[630px] w-full">
          <StyledPrismicRichTextSingle
            field={slice.primary.subtitle}
            className={"text-body-base text-[#004EB6] text-center xl:text-left"}
          />

          <StyledPrismicRichTextSingle
            field={slice.primary.title}
            className={
              "text-title-2x-large text-center xl:text-left mt-[10px] mb-[12px] md:mb-[24px] xl-[20px] xl:[24px]"
            }
          />

          <StyledPrismicRichTextSingle
            field={slice.primary.description}
            className={"text-body-small xl:pr-[44px] text-[#2B2B2B]"}
          />

          <div className="mt-[20px] md:mt-[24px]">
            <ButtonContainer slice={slice} />
          </div>
        </div>
        <div>
          <PrismicNextImage
            field={slice.primary.hero_image}
            fallbackAlt=""
            className="rounded-t-[10px] md:rounded-t-[20px] xl:rounded-[20px]"
          />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Main;
