import Main from "./variants/Main";
import SingleCard from "./variants/SingleCard";

/**
 * @typedef {import("@prismicio/client").Content.ImageDescriptionCardSectionSlice} ImageDescriptionCardSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageDescriptionCardSectionSlice>} ImageDescriptionCardSectionProps
 * @param {ImageDescriptionCardSectionProps}
 */
const ImageDescriptionCardSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ backgroundColor: slice.primary.background_color }}
    >
      {slice.variation === "default" ? <Main slice={slice} /> : null}
      {slice.variation === "singleCard" ? <SingleCard slice={slice} /> : null}
    </section>
  );
};

export default ImageDescriptionCardSection;
