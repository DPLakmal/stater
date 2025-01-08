"use client";
import React, { useEffect, useRef, useState } from "react";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import { asText } from "@prismicio/client";
import clsx from "clsx";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";

const QuestionBlocks = ({ list, isBorder, isGridView }) => {
  const [currentItem, setCurrentItem] = useState("");

  const half = Math.ceil(list.length / 2.4);
  const firstHalf = list.slice(0, half);
  const secondHalf = list.slice(half);

  return (
    <div>
      {isGridView ? (
        <div
          className={clsx({
            "space-y-[8px] md:space-y-[12px]": !isBorder,
            "xl:rounded-[10px] xl:bg-[#F9F9F9] xl:p-[3px]": isBorder,
            " xl:flex xl:flex-row xl:gap-x-[12px] xl:items-baseline":
              isGridView || false,
          })}
        >
          <div className="space-y-[8px]  md:space-y-[12px] xl:flex xl:flex-col ">
            {firstHalf.map(({ question, answer }, idx) => (
              <Accordion
                key={idx}
                isFirst={idx === 0}
                title={question}
                content={answer}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                isBorder={isBorder}
              />
            ))}
          </div>
          <div className="space-y-[8px] md:space-y-[12px] xl:flex  xl:flex-col ">
            {secondHalf.map(({ question, answer }, idx) => (
              <Accordion
                key={idx}
                isFirst={idx === 0}
                title={question}
                content={answer}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                isBorder={isBorder}
              />
            ))}
          </div>
        </div>
      ) : (
        <div
          className={clsx({
            "space-y-3": !isBorder,
            "rounded-[10px] bg-[#F9F9F9] p-[3px]": isBorder,
          })}
        >
          {list.map(({ question, answer }, idx) => (
            <Accordion
              key={idx}
              isFirst={idx === 0}
              title={question}
              content={answer}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
              isBorder={isBorder}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionBlocks;

function Accordion({
  title,
  content,
  currentItem,
  setCurrentItem,
  isFirst = false,
  isBorder = false,
}) {
  const expanded = currentItem === asText(title);
  const [height, setHeight] = useState(0);

  const toggleExpanded = () => {
    if (currentItem === asText(title)) {
      setCurrentItem("");
    } else {
      setCurrentItem(asText(title));
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight + 200);
  }, []);

  return (
    <div
      role={"presentation"}
      className={clsx({
        "cursor-pointer px-6 py-[30px] bg-[#F9F9F9] ": true,
        "border-t border-[#D9D9D9]": !isFirst && isBorder,
        "rounded-[8px]": !isBorder,
      })}
      onClick={toggleExpanded}
    >
      <div className="flex flex-row items-center justify-between text-left select-none ">
        <StyledPrismicRichTextSingle
          field={title}
          className={`text-title-basse font-semibold`}
        />
        <div
          className={clsx({
            "relative flex justify-center items-center border  rounded-[50%] w-full max-w-[20px]  h-[20px]": true,
            "border-[#1870E4] bg-[#1870E4]": expanded,
            "border-black": !expanded,
          })}
        >
          <div className={clsx(
            {
              "w-[10px] h-[1px]  rounded-md": true,
                 "bg-black ": !expanded,
              "bg-white": expanded,
            }
          )} />
          <div
            className={clsx({
              "transition-all  duration-400 absolute top-[50%] left-[52%] -mt-[5px] -ml-[1px] w-[1.2px] h-[10px] ": true,
              "bg-black rounded-md": !expanded,
              "scale-y-0 bg-transparent": expanded,
            })}
          />
        </div>
      </div>
      <div
        className={`pt-0 overflow-hidden transition-[max-height] duration-500 ease-linear`}
        style={{ maxHeight: expanded ? `${height}px` : `0px` }}
      >
        <div ref={ref}>
          <div className={"mt-3 mr-[20px] xl:mr-[24px] text-body-base"}>
            <StyledPrismicRichText field={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
