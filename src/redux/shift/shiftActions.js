import axios from "axios";
import { FETCH_SHIFTS_REQUEST, FETCH_SHIFTS_FAILURE, FETCH_SHIFTS_SUCCESS } from "./shiftTypes";

const fetchShiftsRequest = () => {
    return {
        type: FETCH_SHIFTS_REQUEST,
    }
}

const fetchShiftsSuccess = (shifts) => {
    return {
        type: FETCH_SHIFTS_SUCCESS,
        payload: shifts
    }
}

const fetchShiftsFailure = (error) => {
    return {
        type: FETCH_SHIFTS_FAILURE,
        payload: error
    }
}

export const fetchShifts = () => {
    return (dispatch) => {
        dispatch(fetchShiftsRequest)
        axios.get('https://127.0.0.1:8080/shifts')
            .then(response => {
                console.log(response.data)
                const shifts = response.data
                dispatch(fetchShiftsSuccess(shifts))
            })
            .catch(error => {
                console.log(error.message)
                const errorMessage = error.message
                dispatch(fetchShiftsFailure(errorMessage))
            })
    }
}