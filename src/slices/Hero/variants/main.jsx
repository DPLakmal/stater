import StyledContainer from "@/components/StyledContainer";
import { PrismicNextImage } from "@prismicio/next";
import { ButtonContainer } from "../components";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[24px] md:gap-[30px] xl:gap-[21px] items-center">
        <div>
          <StyledPrismicRichTextSingle
            field={slice.primary.subtitle}
            className={
              "text-base text-primary font-medium text-center xl:text-left"
            }
          />

          <StyledPrismicRichTextSingle
            field={slice.primary.title}
            className={
              "text-title-3x-large text-center xl:text-left mt-[10px] mb-[12px] md:[18px] xl-[20px] xl:[24px]"
            }
          />

          <StyledPrismicRichTextSingle
            field={slice.primary.description}
            className={"text-body-base"}
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
