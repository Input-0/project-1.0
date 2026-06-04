import React from "react";

const Button = ({bType="button",bText="button",className=""}) => {
  return (
    <button type={bType} className={`py-2 px-[30%] rounded-2xl border-2 border-transparent bg-olive-500  text-white/79 hover:bg-amber-600 mt-2 ${className}`}>{bText}</button>
  )
};

export default Button;
