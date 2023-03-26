import React from 'react';

function Formulario(props) {
  
  const { onSubmit, formClassName } = props;

  return (
    <form className={`flex flex-col items-center p-8 md:p-8 mx-auto max-w-screen-md bg-white rounded-md border-2 border-primary lg:min-w-300 ${formClassName}`} onSubmit={onSubmit}>
      {props.children}
    </form>
  );
}

export default Formulario;