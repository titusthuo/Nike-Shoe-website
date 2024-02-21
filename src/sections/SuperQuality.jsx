import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Deliver
          <span className='text-indigo-600'> Exceptional </span>
          <span className='text-indigo-600'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring top-tier comfort and trendsetting style, our intricately designed footwear
          is meticulously crafted to enhance your experience, delivering unparalleled
          quality, innovation, and a touch of sophistication.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our commitment to precision and excellence guarantees your utmost satisfaction
        </p>
        <div className='mt-11'>
          <Button label='Explore more' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
