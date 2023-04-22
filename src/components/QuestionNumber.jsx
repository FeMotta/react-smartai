import React from "react";

const QuestionNumber = (props) => {

    const { children, onClick } = props;

    return (
        <button onClick={onClick}>
            <div className="flex justify-center items-center h-16 w-16 bg-main rounded-xl text-white text-2xl font-montserrat m-4 border-2 border-solid border-secondary hover:transform hover:translate-y-1 transition-all duration-400 cursor-pointer">
                {children}
            </div>
        </button>
    );
}

export default QuestionNumber;