import { FETCH_SHIFTS_REQUEST, FETCH_SHIFTS_FAILURE, FETCH_SHIFTS_SUCCESS } from "./shiftTypes";

const initialState = {
    loading: false,
    data: [],
    error: '',
}

const shiftReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHIFTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SHIFTS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_SHIFTS_FAILURE: 
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export default shiftReducer; 