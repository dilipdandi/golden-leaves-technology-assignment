
const Cards = ({ img, name }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <img className="w-[100px]" src={img} alt="" />
      <p className="px-4 mb-8">
        {name}
      </p>
    </div>
  );
};

export default Cards;
