import React from 'react';

function Botao(props) {
  const { children, onClick, buttonClassName, disabled } = props;
  return (
    <button
      className={`
        border-none 
        min-h-[50px]
        text-white 
        cursor-pointer 
        text-base 
        font-bold 
        py-3 px-8
        rounded 
        font-montserrat 
        bg-secondary 
        shadow-form-button 
        transition-all 
        duration-300 ease-in 
        hover:bg-hover 
        hover:shadow-form-button-hover 
        hover:translate-y-0.1 
        focus:outline-none 
        active:bg-active 
        active:shadow-none 
        active:translate-y-1
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${buttonClassName}`}
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Botao;