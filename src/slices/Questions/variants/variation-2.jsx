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
            className="text-body-base text-[#0F77FF] font-normal"
          />
        </div>
        <div className="text-center md:text-left my-[10px] xl:my-[20px]">
          <StyledPrismicRichTextSingle
            field={slice?.title}
            className="text-title-x-large font-medium"
          />
        </div>
        <div className="text-center md:text-left mb-[20px] md:mb-[24px] xl:mb-[30px] hero-points text-body-base">
          <StyledPrismicRichText
            field={slice?.description}
            components={{
              paragraph: ({ children }) => (
                <p className={""}>{children}</p>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold">
                  {children}
                </strong>
              ),
              hyperlink: ({ children, node }) => (
                <PrismicNextLink
                  field={node.data}
                  className="underline decoration-1 underline-offset-2"
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
                className="w-fit py-[14px]"
              />
            ),
          )}
        </div>
      </div>

      <div className={`rounded-[10px]`} style={{backgroundColor:slice?.faq_background}}>
        <QuestionBlocks list={slice.faqs} />
      </div>
    </div>
  );
};

export default Variation2;
