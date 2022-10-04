import React, { useEffect, useState, useRef, useCallback } from  'react';
import defaultAxios from "axios";

function useAxios(opts, axiosInstance = defaultAxios) {

    const [ state, setState ] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [ trigger, setTrigger ] = useState(0);
    // if(!opts.url) {
    //     return;
    // }     if문은 useEffect 안에 있어야 한다.(오류 발생)
    const refetch = () => {
    setState({
        ...state,
        loading: true
    });
    setTrigger(Date.now());
    };    
    useEffect(() => {
        if(!opts.url) {
            return;
        }
        axiosInstance(opts).then(data => {
            // data는 object
            setState({
                ...state,
                loading: false,
                data
            });
        })
        .catch(error => {
            setState({ ...state, loading: false, error });
        });
    }, [trigger]);
        return { ...state, refetch };
};

export default useAxios;