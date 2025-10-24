import React from 'react';


const Home = () => {
    return (
        <div>
             <section className="relative h-full xl:h-[90vh] overflow-hidden">
  <img src="assets/bg_gradient.png" alt className="absolute top-0 left-0 right-0 bottom-0 z-[2] h-full w-full" />
  <div className="bg-gradient-to-tr from-[#4A16BD] to-[#04016C] opacity-80 absolute h-full w-full z-[5]" />
  <div className="flex flex-col xl:flex-row justify-between items-center gap-1 w-full max-w-[1440px] mx-auto px-4 relative z-20">
    {/* left section starts */}
    <div className="flex flex-col flex-1 items-center xl:items-start gap-10 lg:gap-16 max-w-max md:max-w-2xl py-24 relative z-50">
      <div>
        <p className="text-base lg:text-lg text-white uppercase tracking-[3px] font-normal mb-5 text-center lg:text-left">
          Successful coaches are visionaries
        </p>
        <h1 className="text-4xl lg:text-7xl text-white text-center xl:text-left">
          Good <span className="text-[#0E38CD]">coaching</span> is good teaching
          &amp; nothing else.
        </h1>
      </div>
      <div className="flex gap-3 sm:gap-9 flex-col sm:flex-row justify-center lg:justify-start">
        <button className="border-2 border-white rounded-lg h-10 lg:h-[60px] px-7 text-white text-sm lg:text-lg">
          View Courses
        </button>
        <a href="#" className="text-base lg:text-lg text-white h-10 lg:h-[60px] py-2 lg:py-4">Get Free Consultation</a>
      </div>
      <div className="bg-white max-w-max flex flex-col sm:flex-row gap-2 sm:gap-11 p-2.5 rounded-md items-center">
        <p className="pl-2.5 md:pl-8 text-base text-[#4F547B]">
          What do you want to learn today?
        </p>
        <button className="bg-gradient-to-br from-[#3023B2] to-[#7F56D9] h-10 lg:h-12 px-5 lg:px-9 rounded-[10px] text-white">
          Search
        </button>
      </div>
    </div>
    {/* left section ends */}
    {/* right section starts */}
    <div className="relative self-center xl:self-end w-full max-w-[600px] flex justify-end">
      <img src="assets/hero_image.png" alt="Girl with a laptop" className="relative object-cover z-20 w-full lg:w-[55vh] h-full" />
      <div className="w-[740px] h-[769px] rounded-full bg-white blur-[150px] absolute top-[18%] -right-40 z-1" />
      <div className="absolute z-10 -top-10 sm:top-0 lg:top-[15%] left-8 sm:left-12 flex gap-6">
        <div className="text-white max-w-60 relative">
          <div className="absolute top-0 -left-9 bottom-0 flex flex-col gap-3 items-center self-stretch">
            <div className="w-0.5 h-full bg-[#0094E7]" />
            <div className="w-6 h-6 rounded-full bg-[#0094E7]">
              <img src="assets/quotes.svg" alt="''" className="w-[9px] h-[7px] mx-auto my-2" />
            </div>
            <div className="w-0.5 h-full bg-[#0094E7]" />
          </div>
          <h6 className="font-Rowdies text-base mb-2">Shyam</h6>
          <p className="text-base mb-2">
            In a coaching role, you ask the questions and rely more on your
            staff, who become the experts, to provide the information.
          </p>
          <p className="font-Inter font-bold text-[#0094E7] text-xs">4.9</p>
        </div>
      </div>
    </div>
    {/* right section ends */}
  </div>
  <img src="assets/hero_vector.png" alt className="hidden xl:block absolute -bottom-12 left-2/4 translate-x-[-50%] z-20" />
  <img src="assets/hero_circle_blur_2.png" alt className="absolute left-0 top-1/2 translate-y-[-50%]" />
</section>
            
        </div>
    );
};

export default Home;