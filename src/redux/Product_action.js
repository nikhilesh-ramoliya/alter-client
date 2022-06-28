import axios from "axios";
const GETPRODUCTS = "GETPRODUCTS";
const GETPRODUCTS_SUCCESS = "GETPRODUCTS_SUCCESS";
const GETPRODUCTS_FAILURE = "GETPRODUCTS_FAILURE";
const GETPRODUCT = "GETPRODUCT";

export const getproducts = (payload) => ({
    type: GETPRODUCTS,
    payload: payload
});

export const getproduct = (payload) => ({
    type: GETPRODUCT,
    payload: payload
});


export const getproductsSuccess = (payload) => ({
    type: GETPRODUCTS_SUCCESS,
    payload: payload
});

export const getproductsFailure = (payload) => ({
    type: GETPRODUCTS_FAILURE,
    payload: payload
});


export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(getproducts());
        axios.get("https://alter-backend.herokuapp.com/product")
            .then(res => {
                dispatch(getproductsSuccess(res.data.data));
            }).catch(err => {
                dispatch(getproductsFailure(err));
            }
            );
    }
}


export const productreducer = (state = [], action) => {
    switch (action.type) {
        case GETPRODUCTS:
            return state;
        case GETPRODUCTS_SUCCESS:
            return action.payload;
        case GETPRODUCTS_FAILURE:
            return action.payload;
        case GETPRODUCT:
            return action.payload;
        default:
            return state;
    }
}

