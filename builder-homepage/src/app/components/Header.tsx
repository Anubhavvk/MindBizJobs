import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-col pt-6 pointer-events-auto bg-slate-900">
      <div className="flex flex-wrap gap-5 justify-between self-end mr-6 w-full text-white max-w-[1353px] max-md:mr-2.5 max-md:max-w-full">
        <h1 className="text-4xl font-bold leading-none">MindBiz Jobs</h1>
        <nav className="flex gap-6 self-start text-2xl leading-none">
          <a href="#" className="grow">For Employers</a>
          <a href="#" className="basis-auto">Industries Covered</a>
          <a href="#">About Us</a>
          <a href="#" className="basis-auto">For Job Seekers</a>
          <a href="#" className="basis-auto">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;