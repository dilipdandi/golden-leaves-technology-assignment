
const Paragraph = ({ children, className }) => {
  return (
    <p  className={`text-center uppercase text-[25px] max-sm:text-[16px] font-thin leading-loose pt-8 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
