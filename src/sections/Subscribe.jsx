import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id='subscribe'
      className='max-container flex flex-col justify-center items-center gap-10 py-16'
    >
      <h3 className='text-4xl lg:text-5xl leading-[68px] font-palanquin font-bold text-center text-indigo-800'>
        Stay Connected, Get
        <span className='text-primary'> Exclusive </span> Updates
      </h3>
      <div className='w-full lg:w-[50%] flex flex-col items-center lg:items-start gap-5 p-4 border border-primary rounded-full'>
        <input
          type='text'
          placeholder='YourEmail@example.com'
          className='input w-full px-4 py-2.5 border border-slate-gray rounded-full focus:outline-none focus:border-primary'
        />
        <div className='flex justify-center lg:justify-start items-center w-full'>
          <Button label='Subscribe Now' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
