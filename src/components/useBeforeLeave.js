import React, { useEffect } from 'react';

function useBeforeLeave({ onBefore }){
    const handle = event => {
        const { clientY } = event;
        if (clientY <=0) {
            onBefore();
        }
    };
    useEffect(() => {
        if (typeof onBefore !== "function"){
        document.addEventListener("mouseleave", handle);
        return() => document.removeEventListener("mouseleave", handle);
        } else{
            return;
        }
    }, []);

}

export default useBeforeLeave;