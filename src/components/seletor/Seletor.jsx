import React from 'react';

function Seletor(props) {
  const { id, value, options, onChange } = props;

  return (
    <div className="w-full flex flex-col mb-6">
      <div className="relative">
        <select
          id={id}
          className="
            h-[50px] 
            py-2 pl-2 pr-8 
            cursor-pointer 
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
            focus:border-primary 
            font-montserrat 
            w-full"
          value={value}
          onChange={onChange}
        >
          {options.map(option => (
            <option 
              key={option.value} 
              value={option.value}
              className="
                text-base 
                py-2 
                transition-bg 
                duration-300 
                ease-in 
                hover:bg-hover-option 
                checked:bg-checked-option 
                checked:text-primary"
              >
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute top-1/2 right-3 w-6 h-6 text-primary transform -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#333"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </div>
    </div>
  );
}

export default Seletor;
