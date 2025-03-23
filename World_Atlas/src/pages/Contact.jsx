import React from 'react';

const Contact = () => {

  const handleFormSubmit=(formData) =>{


const formInputData=Object.fromEntries(formData.entries());

  };
  return (
   < div className='bg-black h-screen'>

   <section className=' bg-black mx-auto border-t border-white/60'>
    <h2 className=' my-5 text-3xl text-center text-white font-extrabold'>
      Contact Us 
       </h2>
       <div className='flex flex-col items-center p-4 '>

       
      <form className='flex flex-col'
      action={handleFormSubmit}>
        <input type="text"
        required
           autoComplete="false"
            placeholder='Enter Your Name'
            name="username"
            className='bg-[#202020] h-[45px] w-[400px] m-3 text-white p-3 rounded border border-gray-600 outline-none"'
            />




        <input type="email"
          required
           autoComplete="false"
            placeholder='Enter Your Email'
            name="email"
            className='bg-[#202020] h-[45px] w-[400px] m-3 text-white p-3 rounded border border-gray-600 outline-none'
            />

          <textarea
         className='bg-[#202020] text-white p-3  m-3 h-[250px] w-[400px] rounded border border-gray-600 outline-none'
         rows="10"
              placeholder="Enter Your message"
         autoComplete="off"
        required
      name="message">
    </textarea>

  <button 
  className='text-gray-300 ml-3 p-2 border-2 rounded-2xl'
  type="Submit" 
  value="send">
    Send
  </button>
      </form>
      </div>
   </section>
   </div>
  );
}

export default Contact;
