import React from 'react';
import usePreventLeave from '../components/usePreventLeave';

function PreventLeave() {
    
    const { enablePrevent, disablePrevent } = usePreventLeave();

    return(
        <div>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>UnProtect</button>
        </div>
    );
}

export default PreventLeave;