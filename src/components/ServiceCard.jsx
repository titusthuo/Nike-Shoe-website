const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='w-full max-w-md mx-auto rounded-md overflow-hidden shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600'>
      <div className='w-20 h-20 mx-auto flex justify-center items-center bg-white rounded-full'>
        <img src={imgURL} alt={label} width={32} height={32} />
      </div>
      <div className='text-center mt-5'>
        <h3 className='text-3xl font-bold text-white'>{label}</h3> 
        <p className='mt-3 text-gray-300'>{subtext}</p> 
      </div>
    </div>
  );
};

export default ServiceCard;
