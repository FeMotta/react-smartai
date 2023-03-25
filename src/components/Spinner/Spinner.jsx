import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-full w-full pb-6">
            <div className="w-4 h-4 mx-1 rounded-full bg-main animate-bounce duration-1400 ease-in-out"></div>
            <div className="w-4 h-4 mx-1 rounded-full bg-main animate-bounce duration-1400 ease-in-out delay-320"></div>
            <div className="w-4 h-4 mx-1 rounded-full bg-main animate-bounce duration-1400 ease-in-out delay-160"></div>
        </div>
    );
};

export default Spinner;
  