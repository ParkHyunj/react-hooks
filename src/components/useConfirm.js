import React from "react";

function useConfirm(message = "", onConfirm, onCancel) {
    if (typeof onConfirm !== "function"){
        return;
    }
    if (typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)){
            onConfirm();
        } else {
            onCancel();
        }
        return confirmAction;
    };
}

function Confirm() {
    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
    return(
        <div className="Confirm">
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
}

  export default Confirm;
