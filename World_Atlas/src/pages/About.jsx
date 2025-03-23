import React from 'react';
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <div className='bg-[#121212]  min-h-screen py-12 flex justify-center items-center'>
      <section className='  container mx-auto px-6'>
        <h2 className='text-4xl font-semibold text-white mb-12 text-center leading-tight'>
          Here are Interesting Facts
          <br />
          We’re proud of
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {countryFacts.map((country) => {
            const { id, countryName, capital, population, interestingFact } = country;
            return (
              <div key={id} className='p-4 flex justify-center'>
                <div className='relative  bg-stone-800 bg-opacity-30 backdrop-blur-lg 
                                rounded-[15px] border border-gray-600/50 
                                shadow-md p-6 w-full max-w-sm'
                            
                                >
                  <p className='text-white text-xl font-bold mb-2'>{countryName}</p>
                  <p className='text-gray-400 mb-1'>
                    <span className='text-gray-500 font-medium'>Capital:</span> {capital || "N/A"}
                  </p>
                  <p className='text-gray-400 mb-1'>
                    <span className='text-gray-500 font-medium'>Population:</span> {population || "N/A"}
                  </p>
                  <p className='text-gray-400'>
                    <span className='text-gray-500 font-medium'>Interesting Fact:</span> {interestingFact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
