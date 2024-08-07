// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Logo = () => {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className='text-[5px] pt-2 font-bold cursor-pointer'>
      <Link to='/' onClick={handleHomeClick} smooth>
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
