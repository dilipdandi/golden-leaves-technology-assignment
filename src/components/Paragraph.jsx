import React from "react";

const Paragraph = ({ children }) => {
  return (
    <p className="text-center w-[80%] max-sm:w-[90%] uppercase text-[25px] font-thin leading-loose pt-8">
      {children}
    </p>
  );
};

export default Paragraph;
