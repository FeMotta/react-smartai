import React from "react";

function ProgressBar({ progress }) {
    return (
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary transition-all duration-300 ease-in"
          ></div>
        </div>
      </div>
    );
}

export default ProgressBar;