import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  styles?: React.CSSProperties; // Styles Object.
  cssClassName?: String; // CSS class Name String.
  onClick?: () => void; // OnClick event
}

const Button = ({ children, styles, cssClassName, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        role='button'
        type='button'
        className={cssClassName ? `${cssClassName}` : `base__styles `}
        style={styles} // Apply the styles passed from the parent
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
