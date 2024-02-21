import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button } from "../components"; // Import Button directly
import ShoeCard from "../components/ShoeCard"; // Import ShoeCard directly
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-indigo-700'>
          Explore Our Latest Arrivals
        </p>

        <h1 className='mt-8 font-palanquin text-6xl max-sm:text-4xl max-sm:leading-[72px] font-extrabold text-gray-800'>
  <span className='inline-block pr-6'>
    Introducing The Trendsetter
  </span>
  <br className='max-sm:hidden' />
  <span className='text-teal-600 inline-block mt-3 text-4xl max-sm:text-2xl'>
    Footwear Collection
  </span>
</h1>

        <p className='font-montserrat text-blue-gray-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Experience the epitome of style and comfort in our latest shoe collection, meticulously designed for your dynamic lifestyle.
        </p>

        <Button label='Discover now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-blue-gray-500'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
