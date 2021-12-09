import axios from "axios";

export const FETCH_START = "FETCH-START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";


export const fetchStart = () => {
    return({type: FETCH_START} )
};

export const fetchSuccess = activities => {
    return({type: FETCH_SUCCESS, payload: activities})
};

export const fetchFail = err => {
    return({type: FETCH_FAIL, payload: err})
};


export const getActivity = () => (dispatch) =>{
    dispatch({type: fetchStart()})

    axios.get(`http://www.boredapi.com/api/activity`)
        .then(res => {
            const activities = res.data
            dispatch(fetchSuccess(activities))
        })
        .catch(err => {
            dispatch(fetchFail(err))
        })
};