import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <section className="flex flex-col pt-8 pb-24 mt-36 w-full bg-white max-md:pb-24 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
      <h2 className="self-center text-5xl font-bold leading-7 text-black max-md:max-w-full max-md:text-4xl max-md:leading-7">
        <span className="text-4xl font-medium text-red-600">From the Blog</span>
        <br /><br />
        Latest news and articles
      </h2>
      <div className="mt-14 mb-0 w-full max-md:mt-10 max-md:-mr-0.5 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex shrink-0 mx-auto max-w-full bg-zinc-300 h-[380px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[450px] max-md:mt-10" aria-label={`Blog post ${index}`} role="img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;