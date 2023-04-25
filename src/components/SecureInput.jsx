import React from 'react';

function SecureInput(props) {
  const {
    id,
    value,
    onChange,
    placeholder = 'Digite sua resposta aqui',
    inputClassName,
    maxLength,
    isPassword,
  } = props;

  const inputType = isPassword ? 'password' : 'text';

  return (
    <div className='w-full flex flex-col mb-6'>
      <input
        id={id}
        type={inputType}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={`
          h-[50px]
          py-2 pl-2 pr-8
          appearance-none
          font-semibold
          text-secondary
          text-lg
          rounded
          border-2
          border-ccc
          bg-transparent
          transition-border-color
          duration-300
          ease-in
          font-montserrat
          w-full
          focus:border-primary
          transition-colors
          ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SecureInput;
