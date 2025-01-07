import CtaDefault from "./variant/cta";
import CtaFullWidth from "./variant/cta-fullwidth";

/**
 * @typedef {import("@prismicio/client").Content.CtaSlice} CtaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaSlice>} CtaProps
 * @param {CtaProps}
 */
const Cta = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <CtaDefault slice={slice} />}
      {slice.variation === "fullWidth" && <CtaFullWidth slice={slice} />}
      {slice.variation === "third" && (
        <CtaFullWidth slice={slice} third={false} />
      )}
    </section>
  );
};

export default Cta;
