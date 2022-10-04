import React from 'react';
import useNotification from '../components/useNotification';

function Notification() {
    const triggerNotif = useNotification(
        "Hey, What are you doing?", { body:"It's secret!" });
    return(
        <div className="Notification">
            <button onClick={triggerNotif}>useNotification</button>
        </div>
    );
}
export default Notification;