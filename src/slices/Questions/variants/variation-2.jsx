import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import { QuestionBlocks } from "../components";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import StyledButton from "@/components/StyledButton";
import { PrismicNextLink } from "@prismicio/next";

const Variation2 = ({ slice }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-[30px] md:gap-y-[50px]">
      <div className="xl:max-w-[460px]">
        {/* SubTitle, title and description */}
        <div className="text-center md:text-left">
          <StyledPrismicRichTextSingle
            field={slice?.sub_title}
            className="text-base text-[#0F77FF] font-medium leading-[19.36px] xl:"
          />
        </div>
        <div className="text-center md:text-left my-[10px] xl:my-[20px]">
          <StyledPrismicRichTextSingle
            field={slice?.title}
            className="text-title-x-large"
          />
        </div>
        <div className="text-center md:text-left mb-[20px] md:mb-[24px] xl:mb-[30px] hero-points">
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
        <div className="flex items-center justify-center md:justify-start">
          {slice?.buttons?.map(
            ({ label, link, icon_name, icon_alignment, variant }, idx) => (
              <StyledButton
                key={idx}
                label={label}
                link={link}
                icon={icon_name}
                iconAlignment={icon_alignment}
                variant={variant?.toLowerCase()}
                className=" bg-black w-fit py-[14px]"
              />
            ),
          )}
        </div>
      </div>

      <div className={`bg-[${slice?.faq_background}] rounded-[10px]`}>
        <QuestionBlocks list={slice.faqs} />
      </div>
    </div>
  );
};

export default Variation2;
