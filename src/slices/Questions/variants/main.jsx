import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import { QuestionBlocks } from "../components";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicNextLink } from "@prismicio/next";

const Main = ({ slice }) => {
  return (
    <div className="xl:mx-[217px]">
      {/* SubTitle, title and description */}
      <div className="text-center ">
        <StyledPrismicRichTextSingle
          field={slice?.sub_title}
          className="text-base text-[#0F77FF] font-medium leading-[19.36px]"
        />
      </div>
      <div className="text-center  my-[10px] xl:my-[20px]">
        <StyledPrismicRichTextSingle
          field={slice?.title}
          className="text-title-x-large"
        />
      </div>
      <div className="text-center mb-[30px] md:mx-[90px] md:mb-[50px]  xl:mx-0 hero-points">
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

      <div
        className={`bg-[${slice?.faq_background}] rounded-[10px] bg-[#F9F9F9] xl:px-[88px] xl:py-[70px]`}
      >
        <QuestionBlocks list={slice.faqs} isBorder={true} />
      </div>
    </div>
  );
};

export default Main;
