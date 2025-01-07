import TestimonialDefault from "./variant/default";
import TestimonialVariation2 from "./variant/variation-2";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialSlice} TestimonialSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSlice>} TestimonialProps
 * @param {TestimonialProps}
 */
const Testimonial = ({ slice, settings }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <TestimonialDefault slice={slice} />}
      {slice.variation === "variation2" && (
        <TestimonialVariation2 slice={slice} />
      )}
    </section>
  );
};

export default Testimonial;
