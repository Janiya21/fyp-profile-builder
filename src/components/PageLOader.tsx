import React from "react";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md z-50">
            {/* <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-transparent"></div> */}
            <div className="spinner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default PageLoader;
