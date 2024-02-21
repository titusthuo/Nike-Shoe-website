import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container bg-gray-200 py-16 rounded-md'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Exclusive Shoe Promotion'
          width={773}
          height={687}
          className='object-cover w-full rounded-md'
        />
      </div>
      <div className='flex flex-1 flex-col text-center lg:text-left'>
        <h2 className='text-4xl font-palanquin font-bold text-primary'>
          <span className='text-indigo-700'>Discover </span>
          Exclusive Deals
        </h2>
        <p className='mt-4 info-text'>
          Dive into a world of unmatched offers that redefine your shopping
          experience. From handpicked selections to extraordinary savings, we
          present irresistible value that distinguishes us.
        </p>
        <p className='mt-6 info-text'>
          Explore a spectrum of possibilities crafted to fulfill your unique
          desires, surpassing even the loftiest expectations. Your journey with
          us is nothing short of extraordinary.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Explore Now' iconURL={arrowRight} />
          <Button
            label='Discover More'
            backgroundColor='bg-white'
            borderColor='border-gray-400'
            textColor='text-gray-700'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
