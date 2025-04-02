const Buttons = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-14 py-2 bg-primaryYellow rounded-[12px] uppercase mt-8"
    >
      {children}
    </button>
  );
};

export default Buttons;
