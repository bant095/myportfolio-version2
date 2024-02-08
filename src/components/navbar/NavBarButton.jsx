import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ButtonMain';
const NavBarButton = () => {
  return (
    <Link
      to='https://ik.imagekit.io/gru3qfrss/Abolaji%20Alfred%20Ayodeji%20Resume.pdf?updatedAt=1705728793447'
      target='_blank'
    >
      <Button text='Employ Me'></Button>
    </Link>
  );
};

export default NavBarButton;
