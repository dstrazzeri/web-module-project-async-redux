import { FETCH_SUCCESS,FETCH_START, FETCH_FAIL } from "../actions";

const initialState = {
    activity: "",
    isFetching: false,
    error: ""
};


const reducer = (state=initialState, action) => {
    switch (action.type){
        case(FETCH_START):
            return ({
                activity: "",
                isFetching: true,
                error: ""
            })
        case(FETCH_SUCCESS):
            return({
                activity: action.payload.activity,
                isFetching: false,
                error: ""
            })
        case(FETCH_FAIL):
            return ({
                activity: "",
                isFetching: false,
                error: action.payload
            })

        default:
            return state
    }
};

export default reducer;