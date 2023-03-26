import React from 'react';

function Container(props) {
    return (
    <div className="flex flex-col items-center justify-center h-screen">
        {props.children}
    </div>
    );
}

export default Container;