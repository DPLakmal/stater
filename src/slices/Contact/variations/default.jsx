import StyledContainer from "@/components/StyledContainer";
import Form from "../components/form";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import { asText } from "@prismicio/client";
import clsx from "clsx";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";

function Main({ slice }) {
  return (
    <div
      className={clsx({
        "bg-highlight pt-10 md:pt-[60px] lg:pt-[80px]": true,
        "pb-10 md:pb-[60px] lg:pb-[80px]": !slice?.primary?.map_iframe_url,
      })}
    >
      <StyledContainer slice={slice} shorter>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            {asText(slice.primary.subtitle) && (
              <div className="mb-1">
                <StyledPrismicRichTextSingle
                  field={slice.primary.subtitle}
                  className={"text-lg"}
                />
              </div>
            )}
            <div className="mb-3">
              <StyledPrismicRichTextSingle
                field={slice.primary.title}
                className={"text-lg"}
              />
            </div>
            <div className="mb-10">
              <StyledPrismicRichText field={slice.primary.description} />
            </div>
          </div>
          <div>
            <Form
              slice={slice}
              recipient={slice?.primary?.recipient_email_address}
            />
          </div>
        </div>
      </StyledContainer>
      {slice?.primary?.map_iframe_url && (
        <div
          className={
            "w-full h-[250px] md:h-[350px] lg:h-[500px] relative mt-5 md:mt-10 lg:mt-[80px]"
          }
        >
          <iframe
            className={"h-full w-full absolute left-0 top-0"}
            src={slice?.primary?.map_iframe_url}
            allowFullScreen=""
            loading="lazy"
            title={`${slice.id}-map-section`}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
}

export default Main;
