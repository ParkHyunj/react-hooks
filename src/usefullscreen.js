import { isElementType } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState, useRef, useCallback } from  'react';

function useFullscreen() {
    const [ fullCheck, setFullCheck ] = useState(false);
    const callback = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
        setFullCheck(isFull);
    }
    const element = useRef();
    const triggerFull = () => {
        if(element.current){
            element.current.requestFullscreen()
            if(callback && typeof callback === "function"){
                callback(true);
            }
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if(callback && typeof callback === "function"){
            callback(false);
        }
    };
    return { element, triggerFull, exitFull };
  };

export default useFullscreen;