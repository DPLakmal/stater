"use client";
import React from "react";
import CountUp from "react-countup";

const CountUpAnimation = ({ count, count_suffix }) => {
  return (
    <CountUp
      className="text-[#3D3D3D]"
      start={0}
      end={count}
      duration={2.75}
      decimals={0}
      suffix={count_suffix}
      enableScrollSpy={true}
      scrollSpyDelay={200}
    >
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
};

export default CountUpAnimation;
