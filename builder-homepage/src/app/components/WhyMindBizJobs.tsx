import React from 'react';

const WhyMindBizJobs: React.FC = () => {
  return (
    <section className="self-center mt-52 w-full max-w-[1049px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex shrink-0 mx-auto max-w-full bg-zinc-300 h-[725px] w-[525px] max-md:mt-4" />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full font-semibold text-white max-md:mt-5 max-md:max-w-full">
            <h2 className="text-5xl mb-4">Why MindBiz Jobs?</h2>
            <p className="text-2xl mb-4">
              At Mindbiz Jobs, our highly experienced founding team brings over a decade of industry expertise. With a proven track record of hiring and training over 500+ professionals, we are exceptionally qualified to meet the global demand for skilled talent.
            </p>
            <p className="text-2xl mb-8">
              Our specialized approach ensures that we source, train, and place top-tier candidates, adhering to the highest quality standards that global employers expect.
            </p>
            <div className="flex gap-6 self-start mt-24 text-2xl leading-8 max-md:mt-10">
              <div className="flex shrink-0 bg-red-600 rounded-full h-[62px] w-[62px]" aria-hidden="true" />
              <div>
                Contact us: <br />
                <a href="tel:+91999999999">+91-999999999</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMindBizJobs;