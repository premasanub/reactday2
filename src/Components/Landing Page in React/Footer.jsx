import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-linear-225 from-[#477AE3] from-10% to-[#931BBDCC] to-100% relative pb-28">
  <div className="w-full max-w-[1440px] mx-auto px-4 py-14 flex flex-wrap flex-auto gap-8 2xl:gap-20 justify-start">
    {/* Footer contact starts */}
    <div className="flex flex-col gap-8 max-w-[320px]">
      <h4 className="text-2xl text-[#0A033C]">Connect</h4>
      <img src="assets/logo.png" alt="Logo" className="w-[150px]" />
      <p className="text-base text-black">
        Sri Jagannath Nivas,8-1-164/345/A/1, Pragati Colony, Mailardevpally,
        Nawab Saheb Kunta, Hyd, 500005
      </p>
    </div>
    {/* Footer contact ends */}
    <div className="flex flex-wrap flex-grow gap-8 justify-start items-stretch sm:justify-between">
      {/* Footer classes starts */}
      <div className="w-40">
        <h4 className="text-2xl text-[#0A033C] mb-4">Classes</h4>
        <ul className="text-lg text-black">
          <li className="my-1">Classroom courses</li>
          <li className="my-1">Virtual classroom courses</li>
          <li className="my-1">E-learning courses</li>
          <li className="my-1">Video Courses</li>
          <li className="my-1">Offline Courses</li>
        </ul>
      </div>
      {/* Footer classes ends */}
      {/* Footer community starts */}
      <div className="w-40">
        <h4 className="text-2xl text-[#0A033C] mb-4">Community</h4>
        <ul className="text-lg text-black">
          <li className="my-1">Learners</li>
          <li className="my-1">Parteners</li>
          <li className="my-1">Developers</li>
          <li className="my-1">Transactions</li>
          <li className="my-1">Blog</li>
        </ul>
      </div>
      {/* Footer community ends */}
      {/* Footer quick links starts */}
      <div className="w-40">
        <h4 className="text-2xl text-[#0A033C] mb-4">Quick links</h4>
        <ul className="text-lg text-black">
          <li className="my-1">Home</li>
          <li className="my-1">Professional Education</li>
          <li className="my-1">Courses</li>
          <li className="my-1">Admissions</li>
          <li className="my-1">Testimonial</li>
          <li className="my-1">Programs</li>
        </ul>
      </div>
      {/* Footer quick links ends */}
      {/* Footer more starts */}
      <div className="w-40">
        <h4 className="text-2xl text-[#0A033C] mb-4">More</h4>
        <ul className="text-lg text-black">
          <li className="my-1">Press</li>
          <li className="my-1">Investors</li>
          <li className="my-1">Terms</li>
          <li className="my-1">Privacy</li>
          <li className="my-1">Help</li>
          <li className="my-1">Contact</li>
        </ul>
      </div>
      {/* Footer more ends */}
    </div>
    {/* Footer social starts */}
    <div className="absolute left-0 right-0 bottom-5 sm:bottom-0 py-8 bg-gradient-to-b from-[#0351AE4D] from-82% to-[#A542C8] to-100%">
      <div className="flex justify-center items-center gap-8">
        <div className="w-[45px] h-[45px] bg-white rounded-full p-2">
          <img src="assets/instagram.svg" alt="Instagram" className="h-full" />
        </div>
        <div className="w-[45px] h-[45px] bg-white rounded-full p-2">
          <img src="assets/whatsapp.svg" alt="Whatsapp" className="h-full" />
        </div>
        <div className="w-[45px] h-[45px] bg-white rounded-full p-2">
          <img src="assets/twitter.svg" alt="Twitter" className="h-full" />
        </div>
        <div className="w-[45px] h-[45px] bg-white rounded-full p-2">
          <img src="assets/linkedIn.svg" alt="LinkedIn" className="h-full" />
        </div>
        <div className="w-[45px] h-[45px] bg-white rounded-full p-2">
          <img src="assets/youtube.svg" alt="Youtube" className="h-full" />
        </div>
      </div>
    </div>
    {/* Footer social ends */}
    {/* Footer copyright starts */}
    <div className="absolute left-0 right-0 bottom-0 bg-[#001AFF4D] px-4">
      <p className="text-sm text-white text-center mx-auto">
        Copyright @ 2023 askmeidentity. All Rights Reserved
      </p>
    </div>
    {/* Footer copyright ends */}
  </div>
</footer>
        </div>
    );
};

export default Footer;
