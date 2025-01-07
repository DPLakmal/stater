"use client";
import React from "react";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import * as AllIcons from "atd-icons";

const StyledButton = ({
  label = "",
  variant = "primary",
  type = "button",
  icon = false,
  className = "",
  link = {},
  children,
  disabled = false,
  onClick = null,
  iconAlignment = "Left",
}) => {
  const Icon = icon && AllIcons[icon] ? AllIcons[icon] : null;

  const finalClassName = clsx({
    [className]: true,
    btn: true,
    "btn-primary": variant?.toLowerCase() === "primary",
    "bg-secondary": variant?.toLowerCase() === "secondary",
    "btn-link": variant?.toLowerCase() === "link",
  });

  return (
    <ButtonWrapper
      disabled={disabled}
      type={type}
      className={finalClassName}
      onClick={onClick}
      link={link}
    >
      {icon && Icon && iconAlignment === "Left" && (
        <Icon size={20} className={"mr-2"} />
      )}
      {children || label}
      {icon && Icon && iconAlignment === "Right" && (
        <Icon size={20} className={"ml-2"} />
      )}
    </ButtonWrapper>
  );
};

export default StyledButton;

const ButtonWrapper = ({
  children,
  className = "",
  onClick,
  disabled,
  link,
  type,
}) => {
  if (link && typeof link === "string") {
    return (
      <a href={link} className={className} target={"_blank"} rel={"noreferrer"}>
        {children}
      </a>
    );
  }
  if (link && typeof link === "object") {
    return (
      <PrismicNextLink field={link} className={className}>
        {children}
      </PrismicNextLink>
    );
  }
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
