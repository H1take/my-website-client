import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  link: string;
}

const Button = ({ children, link, ...attributes }: ButtonProps) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <button type="button" className="button-link" {...attributes}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
