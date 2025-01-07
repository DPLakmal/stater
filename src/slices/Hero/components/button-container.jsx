import StyledButton from "@/components/StyledButton";
import React from "react";

const ButtonContainer = ({ slice, contentCenter = false }) => {
  return (
    <div
      className={`flex flex-wrap gap-[18px] md:gap-[20px] justify-center xl:justify-start xl:pt-[12px] ${contentCenter ? "justify-center xl:justify-center" : ""}`}
    >
      {slice.primary.buttons.map(
        ({ label, link, icon_name, icon_alignment, variant }, idx) => (
          <StyledButton
            key={idx}
            label={label}
            link={link}
            icon={icon_name}
            iconAlignment={icon_alignment}
            variant={variant?.toLowerCase()}
          />
        ),
      )}
    </div>
  );
};

export default ButtonContainer;
