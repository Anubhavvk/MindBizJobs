import React from 'react';
import Header from './Header';
import Hero from './Hero';
import WhyMindBizJobs from './WhyMindBizJobs';
import Advantage from './Advantage';
import IndustriesServed from './IndustriesServed';
import BlogSection from './BlogSection';
import Footer from './Footer';

const MainContent: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pt-6 pointer-events-auto bg-slate-900">
      <Header />
      <Hero />
      <WhyMindBizJobs />
      <Advantage />
      <div className="z-10 px-16 pt-0 pb-32 mt-32 text-2xl font-semibold leading-8 text-center text-white bg-red-600 bg-opacity-70 max-md:px-5 max-md:pb-28 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
        <p className="text-3xl mt-12">
          We dont just provide skilled workers; we ensure their seamless integration into your team by enhancing language proficiency, fostering cultural alignment, and refining their skills for long-term success.
        </p>
      </div>
      <IndustriesServed />
      <section className="px-16 pt-56 pb-72 mt-32 text-5xl font-bold leading-7 text-black bg-white max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full max-md:text-4xl max-md:leading-7">
        <h2>Geographies We Cover</h2>
      </section>
      <BlogSection />
      <Footer />
    </main>
  );
};

export default MainContent;