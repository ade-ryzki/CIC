const initialState = {
    loading: false,
    data: {
        results: [],
        // totalAllData: 0,
        // totalPage: 0,
        // totalRows: 0,
    },
}

const Fetch = (state=initialState, action={})=> {
    switch (action.type) {
        case "GET_PORTFOLIO_REQUEST":
            return {...state, loading: true}
        case "GET_PORTFOLIO_ERROR":
            return {...state, loading: false, error: action.payload}
        case "GET_PORTFOLIO_SUCCESS":
            return {...state, loading: false, data: action.payload}
        default:
            return state
    }
} 

export default Fetch