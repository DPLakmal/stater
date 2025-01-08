import StyledContainer from "@/components/StyledContainer";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import StyledButton from "@/components/StyledButton";
import CarousalVariant2 from "../components/carousal-variant-2";
import axios from "axios";
import getUrlFromHeaders from "@/utils/getUrlFromHeaders";

export default async function TestimonialVariation2({ slice }) {
  console.log(slice);
  // Fetch ratings from Google using slice data
  const url = await getUrlFromHeaders("/api/fetch-reviews");

  const reviews = await axios
    .get(url, {
      params: { place_id: slice.primary.place_id },
    })
    .then((response) => {
      console.log("API Response:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching reviews:", error);
      return [];
    });

  return (
    <StyledContainer slice={slice}>
      <div className="flex flex-col  items-center xl:mx-[88px]">
        <div className="grid grid-cols-1 text-center md:grid-cols-2 md:text-start">
          <div>
            <StyledPrismicRichTextSingle
              field={slice?.primary?.subtitle}
              className="text-base text-[#1774E0] font-semibold leading-[19.36px]"
            />
            <div className="mt-[10px] mb-[10px] md:mt-[20px]">
              <StyledPrismicRichTextSingle
                field={slice?.primary?.title}
                className="font-medium title-font text-title-x-large"
              />
            </div>
            <StyledPrismicRichText field={slice?.primary?.description} />
          </div>

          <div className="flex flex-row justify-center gap-x-[20px] mt-[20px] md:mt-[30px] md:justify-end">
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

        <div className="flex items-center justify-center w-full h-full mt-[30px] md:mt-[40px] xl:mt-[60px]">
          <CarousalVariant2 reviews={reviews?.data} />
        </div>
      </div>
    </StyledContainer>
  );
}
