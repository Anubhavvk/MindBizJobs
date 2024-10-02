import React from 'react';

interface AdvantageItemProps {
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ title, description }) => (
  <div className="z-10 px-2 pb-32 w-full text-xl font-semibold leading-8 text-black bg-white aspect-square max-md:pb-24 max-md:mt-3">
    <h3 className="text-4xl mb-4">{title}</h3>
    <p className="text-2xl">{description}</p>
  </div>
);

const advantageData: AdvantageItemProps[] = [
  {
    title: "A Robust Network",
    description: "A dedicated team of professionals with a robust network, ensures a smooth and effective talent sourcing process."
  },
  {
    title: "Thorough Screening",
    description: "Our comprehensive screening and selection process ensures that only the most suitable candidates align with your business needs."
  },
  {
    title: "Industry Expertise",
    description: "With a deep understanding of various sectors, our team utilizes industry-specific knowledge to find skilled workers that meet your requirements."
  },
  {
    title: "Client-Centric Approach",
    description: "With a client-focused approach, we customize our services to match your staffing needs and align seamlessly with your business goals."
  },
  {
    title: "Reliable Placement",
    description: "We've identified, trained, and successfully placed thousands of skilled workers worldwide."
  }
];

const Advantage: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-20 mt-28 w-full bg-red-600 bg-opacity-70 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1065px] max-md:max-w-full">
        <div className="w-full max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
              <h2 className="text-4xl font-semibold leading-8 text-white max-md:mt-10">
                <br /><br /><br />
                <span className="leading-[55px]">The MindBiz Jobs</span>
                <br />
                <span className="leading-[55px]">Advantage</span>
              </h2>
            </div>
            <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-wrap gap-5">
                  {advantageData.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2">
                      <AdvantageItem title={item.title} description={item.description} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;