const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  const borderClass = bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent";

  return (
    <div className={`border-2 rounded-xl ${borderClass} cursor-pointer max-sm:flex-5`} onClick={handleClick}>
     <div className='flex justify-center items-center bg-white rounded-xl max-sm:p-4 border-2 border-blue-200 transition-transform hover:scale-105'>
  <img
    src={imgURL.thumbnail}
    alt='shoe collection'
    className='object-fill rounded-xl'
    style={{ 
      width: '200px', 
      height: '160px', 
      marginTop: '-200px', 
      marginBottom: '-300px', 
      marginLeft: '-50px', 
    }}
  />
      </div>
    </div>
  );
};

export default ShoeCard;
