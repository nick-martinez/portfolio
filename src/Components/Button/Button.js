import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ['btnPrimary', 'btnOutline'];

const SIZES = ['btnMedium', 'btnLarge']

export const Button = ({
  children, 
  type, 
  onClick, 
  btnStyle, 
  btnSize
}) => {
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  const checkBtnSize = STYLES.includes(btnSize) ? btnSize: SIZES[0];

  return (
    <Link to="/resume" className="btn">
      <button 
        className={`btn ${checkBtnStyle} ${checkBtnSize}`} 
        onClick={onClick} 
        type={type}>
          {children}
      </button>
    </Link>
  );
};

export default Button;