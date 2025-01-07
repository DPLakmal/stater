"use client";
import React from "react";
import * as AllIcons from "atd-icons";

const IconDiv = ({ icon_name }) => {
  const Icon = AllIcons[icon_name];
  return icon_name && <Icon size={20} />;
};

export default IconDiv;
