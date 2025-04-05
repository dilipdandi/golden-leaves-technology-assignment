
const Paragraph = ({ children, className }) => {
  return (
    <p  className={`uppercase text-[25px] max-sm:text-[16px] font-thin leading-loose pt-8 text-center px-4 w-[80%] max-md:w-[90%] max-sm:w-[100%] ${className} `}>
      {children}
    </p>
  );
};

export default Paragraph;
