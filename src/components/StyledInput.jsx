"use client";
import React, { useRef } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";

const StyledInput = ({
  type = "text",
  label,
  value,
  onChange,
  onBlur,
  error = false,
  errorMessage = "",
  icon = false,
  rows = "5",
}) => {
  const inputRef = useRef();
  const areaRef = useRef();

  const handleLabelClick = () => {
    inputRef.current?.focus();
  };

  const handleAreaLabelClick = () => {
    areaRef.current?.focus();
  };

  return type === "textarea" ? (
    <div>
      <div className="relative">
        <textarea
          name={label}
          id={label}
          rows={rows}
          value={value}
          ref={areaRef}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur} // Handle blur event for textarea
          className={`
          w-full px-[18px] pt-[20px] pb-[9px] rounded-[6px] bg-white text-[#211F24] text-[14px] placeholder-transparent border-[1px] peer focus:outline-none leading-5
            ${error ? "border-[#D92D20] focus:border-[#D92D20]" : "border-[#B0B0B0] focus:border-[#1570EF]"}
           `}
          placeholder="Your Message"
        ></textarea>
        <label
          htmlFor={label}
          onClick={handleAreaLabelClick}
          className={`absolute left-[19px] ${
            value
              ? "top-[8px] text-[10px] translate-y-0"
              : "top-[20%] translate-y-[-50%] text-[14px]"
          } text-[#727A8B] transition-all peer-focus:top-[8px] peer-focus:text-[10px] peer-focus:translate-y-0`}
        >
          {label}
        </label>
      </div>
      {error && errorMessage && (
        <div className="text-[10px] text-[#F97066] leading-[15px] mt-[2px]">
          {errorMessage}
        </div>
      )}
    </div>
  ) : (
    <div>
      <div className="relative">
        <input
          type={type}
          name={label}
          id={label}
          value={value}
          ref={inputRef}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur} // Handle blur event for input
          className={`
            w-full pl-[18px] pt-[11px] pb-[0px] rounded-[6px] h-[53px] bg-white text-[#211F24] text-[14px] placeholder-transparent border-[0.5px] border-[#B0B0B0] peer focus:outline-none 
            ${icon ? "pr-[78px]" : "pr-[18px]"}
            ${error ? "border-[#D92D20] focus:border-[#D92D20]" : "border-[#B0B0B0] focus:border-[#1570EF]"}
            `}
          placeholder="placeholder"
        />
        <label
          onClick={handleLabelClick}
          htmlFor={label}
          className={`absolute left-[19px] ${
            value
              ? "top-[8px] text-[10px] translate-y-0"
              : "top-[50%] translate-y-[-50%] text-[14px]"
          } text-[#727A8B] transition-all peer-focus:top-[8px] peer-focus:text-[10px] peer-focus:translate-y-0`}
        >
          {label}
        </label>
        {icon && (
          <div className="absolute right-[18px] top-[18px]">
            {error ? (
              <IoAlertCircleOutline size={16} color="#D92D20" />
            ) : (
              <IoIosHelpCircleOutline size={16} />
            )}
          </div>
        )}
      </div>
      {error && errorMessage && (
        <div className="text-[10px] text-[#F97066] leading-[15px] mt-[2px]">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default StyledInput;
