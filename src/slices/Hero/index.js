import Main from "./variants/main";
import Variant2 from "@/slices/Hero/variants/variant-2";
import Variant3 from "@/slices/Hero/variants/variant-3";
import Variant4 from "@/slices/Hero/variants/variant-4";

const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" ? <Main slice={slice} /> : ""}
      {slice.variation === "variation2" ? <Variant2 slice={slice} /> : ""}
      {slice.variation === "variation3" ? <Variant3 slice={slice} /> : ""}
      {slice.variation === "variation4" ? <Variant4 slice={slice} /> : ""}
    </section>
  );
};

export default Hero;
