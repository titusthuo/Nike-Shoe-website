import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full bg-white rounded-xl overflow-hidden shadow-md transition-transform transform hover:scale-105'>
      <img src={imgURL} alt={name} className='w-full h-[282px] object-cover' />
      <div className='mt-6 flex justify-start items-center gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-gray-600'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-4 text-2xl leading-normal font-semibold font-palanquin text-gray-800'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-indigo-600 text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
