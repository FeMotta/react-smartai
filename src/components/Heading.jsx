import React from 'react';

function Heading(props) {
    const { headingClassName } = props;
    return (
        <h1 className= {`text-4.5xl text-center mb-1.3rem min-w-300 text-primary font-montserrat ${headingClassName}`}>
            {props.children}
        </h1>
    );
}

export default Heading;