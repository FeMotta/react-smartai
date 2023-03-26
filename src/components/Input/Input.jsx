import React from 'react';

function Input(props) {
  const { id, value, onChange, placeholder = "Digite sua resposta aqui", inputClassName } = props;

  return (
    <div className="w-full flex flex-col mb-6">
      <textarea
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className={`
          h-32 
          resize-y 
          min-h-[50px] 
          max-h-[60vh] 
          p-2 pr-8 
          text-lg 
          font-semibold 
          text-secondary 
          border-2 
          border-gray-300 
          rounded-md 
          focus:border-primary 
          transition-colors 
          duration-300 ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
