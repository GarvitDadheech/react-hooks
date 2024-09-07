import React from 'react';
import { useState, useEffect } from 'react';
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
};


const useDimensions = () => {
    const { width, height } = useWindowSize();

    return (
        <div>
            <h1>Window Dimensions</h1>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    );
};

export default useDimensions;
