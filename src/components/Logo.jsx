import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <section className='text-[5px] pt-2 font-bold cursor-pointer'>
      <Link to='/home'>
        <img
          src='https://ik.imagekit.io/gru3qfrss/FRED%20LOGO.png'
          alt='fredSync'
          className='w-40'
        />
      </Link>
    </section>
  );
};

export default Logo;