import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData(event.target);
      formDataToSend.append(
        'access_key',
        '0f9d1f61-d70d-448c-a363-39c1a7e01c05'
      );

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message submitted successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Error submitting message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id='contact'
      className='flex flex-col md:mt-20 w-full lg:gap-6 gap-3 text-center text-white'
    >
      <h2 className='text-center pb-8 text-3xl font-bold'>CONTACT</h2>
      <form
        onSubmit={onSubmit}
        className='flex flex-col text-black items-center gap-4'
      >
        <input
          type='text'
          name='name'
          placeholder='Enter Your Name'
          value={formData.name}
          onChange={handleChange}
          required
          className='lg:w-[50%] w-[85%] p-4 text-black rounded outline-[#38BDF8]'
        />
        <input
          type='email'
          name='email'
          placeholder='Enter Your Email Address'
          value={formData.email}
          onChange={handleChange}
          required
          className='lg:w-[50%] w-[85%] p-4 text-grey rounded outline-[#38BDF8]'
        />
        <input
          type='text'
          name='subject'
          placeholder='Your Subject'
          value={formData.subject}
          onChange={handleChange}
          required
          className='lg:w-[50%] w-[85%] p-4 text-grey rounded outline-[#38BDF8]'
        />
        <textarea
          name='message'
          rows='6'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          required
          className='lg:w-[50%] w-[85%] p-4 text-grey rounded outline-[#1976D2]'
        ></textarea>
        <button
          type='submit'
          disabled={isLoading}
          className={`flex items-center justify-center lg:w-[50%] w-[85%] p-4 mt-4 text-white bg-[#1976D2] rounded ${
            isLoading ? 'cursor-not-allowed ' : 'hover:bg-[#38BDF8]'
          }`}
        >
          {isLoading && (
            <svg
              className='animate-spin h-5 w-5 mr-3 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-75'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          )}
          {isLoading ? 'Submitting...' : 'Submit Message'}
        </button>
      </form>
      <Toaster position='top-right' />
    </section>
  );
};

export default ContactUs;
