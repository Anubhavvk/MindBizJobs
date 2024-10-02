import React from 'react';

interface IndustryCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, imageSrc }) => (
  <div className="flex flex-col grow pt-3 pr-2 w-full text-2xl font-bold leading-5 text-black bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
    <div className="max-md:max-w-full">
      <h3 className="text-4xl mb-4">{title}</h3>
      <p className="leading-7">{description}</p>
    </div>
    <img loading="lazy" src={imageSrc} alt={`${title} industry illustration`} className="object-contain self-center mt-16 max-w-full aspect-[2.04] w-[550px] max-md:mt-10" />
  </div>
);

const industriesData: IndustryCardProps[] = [
  {
    title: "Transport services",
    description: "Mindbiz Jobs is a reliable partner in the logistics and transport sector, committed to delivering highly skilled truck drivers, warehouse managers, and other logistics professionals to global companies.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/89cd8cd83a6c2762e9cd3967d13f6ae7b0fe6be07a11b1e7bb32f324a6f217e8?placeholderIfAbsent=true&apiKey=1d7b1b4d1eda4162bfdc1247d40224eb"
  },
  {
    title: "Construction",
    description: "Mindbiz Jobs partners with leading construction companies worldwide to source skilled workers, including welders, plumbers, electricians, civil workers, and more.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d9ce07df85b933ffba7bac30b943afb99d41d1130f0cd194c17bb36f943cb60?placeholderIfAbsent=true&apiKey=1d7b1b4d1eda4162bfdc1247d40224eb"
  },
  {
    title: "Manufacturing",
    description: "Mindbiz Jobs partners with manufacturing companies globally, specializing in recruiting the right talent to build and maintain high-performing teams that consistently deliver exceptional results.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c65b5570d077d4fc4c1b82f8244034ae310f8aedd0ab46a2b328bee5f075bcd2?placeholderIfAbsent=true&apiKey=1d7b1b4d1eda4162bfdc1247d40224eb"
  },
  {
    title: "Healthcare",
    description: "Mindbiz Jobs Medical Recruitment specializes in placing skilled professionals in both clinical and non-clinical roles. With deep expertise in the healthcare industry, we ensure you find the right talent to meet your specific needs",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/23ea7c36f9a2083c6fd38e8dc923687d5ad0071d93bc5b2fb3fa216394b23909?placeholderIfAbsent=true&apiKey=1d7b1b4d1eda4162bfdc1247d40224eb"
  }
];

const IndustriesServed: React.FC = () => {
  return (
    <section className="flex flex-col pt-9 pr-11 pl-2.5 mt-16 w-full bg-zinc-300 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-6xl font-bold leading-none text-center text-black max-md:max-w-full max-md:text-4xl">
        Industries We Serve
      </h2>
      <div className="self-start mt-9 ml-3.5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5">
          {industriesData.map((industry, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <IndustryCard {...industry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;