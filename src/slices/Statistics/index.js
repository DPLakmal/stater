import Variation1 from "./variants/variation-1";
import Variation2 from "./variants/variation-2";
import Variation3 from "./variants/variation-3";
import StyledContainer from "@/components/StyledContainer";

/**
 * @typedef {import("@prismicio/client").Content.StatisticsSlice} StatisticsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StatisticsSlice>} StatisticsProps
 * @param {StatisticsProps}
 */
const Statistics = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && (
        <StyledContainer slice={slice}>
          <Variation1 slice={slice?.primary} />
        </StyledContainer>
      )}
      {slice.variation === "variation2" && (
        <StyledContainer slice={slice}>
          <Variation2 slice={slice?.primary} />
        </StyledContainer>
      )}
      {slice.variation === "variation3" && (
        <StyledContainer slice={slice}>
          <Variation3 slice={slice?.primary} />
        </StyledContainer>
      )}
    </section>
  );
};

export default Statistics;
