import Main from "./variations/default.jsx";

const Contact = ({ slice, settings }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.primary.section_id}
    >
      {slice.variation === "default" && (
        <Main slice={slice} settings={settings} />
      )}
    </section>
  );
};

export default Contact;
