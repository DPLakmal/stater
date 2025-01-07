import FeaturesWith4Cards from "./variants/featuresWith4Cards";
import FeaturesWith3Cards from "./variants/featuresWith3Cards";
import FeaturesDefault from "./variants/featuresDefault";
import FeaturesWithButton from "./variants/featuresWithButton";

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param {FeaturesProps}
 */
const Features = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <FeaturesDefault slice={slice} />}
      {slice.variation === "featuresWithCards" && (
        <FeaturesWith4Cards slice={slice} />
      )}
      {slice.variation === "featuresWithButton" && (
        <FeaturesWithButton slice={slice} />
      )}
      {slice.variation === "featuresWith3Cards" && (
        <FeaturesWith3Cards slice={slice} />
      )}
    </section>
  );
};

export default Features;
