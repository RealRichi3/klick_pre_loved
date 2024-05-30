"use client";

import React from "react";

interface props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const CustomButton: React.FC<props> = ({ ...props }) => {
  return (
    <button
      className="inline-block py-3 px-[4rem] rounded-[30px] bg-primary text-white"
      {...props}
    >
      {props.children}
    </button>
  );
};

export const LeftButton: React.FC<props> = ({ ...props }) => {
  return (
    <button
      className="inline-block py-3 px-[4rem] rounded-[30px] bg-primary text-white"
      {...props}
    >
      {props.children}
    </button>
  );
};
