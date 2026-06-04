import React from "react";

const Input = ({lText="text",iType="text",phold="",className,name,...rest}) => {
  return (
    
      <label className="text-gray-200 text-lg">
       {lText}:<br/>
        <input className={`h-[20px] text-center outline-0 border-white/30 rounded border py-4 ${className}`} type={iType} placeholder={phold} name={name} {...rest }/>

    </label>
   
  );
};

export default Input;
