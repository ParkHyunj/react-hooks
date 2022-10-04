import React from 'react';

function usePreventLeave() {

    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }

    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => 
        window.addEventListener("beforeunload", listener);
        return { enablePrevent, disablePrevent };
}

export default usePreventLeave;