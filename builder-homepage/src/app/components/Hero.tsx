import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-20 pt-44 pb-28 mt-24 w-full bg-zinc-300 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[702px] max-md:mb-2.5">
        <h2 className="text-6xl text-black leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Skilling 10 million Indians <br /> for Global Opportunities
        </h2>
        <a href="#" className="self-center px-4 pt-3 pb-7 mt-9 max-w-full text-4xl font-semibold leading-none text-white bg-red-600 w-[260px]">
          Apply for jobs
        </a>
      </div>
    </section>
  );
};

export default Hero;