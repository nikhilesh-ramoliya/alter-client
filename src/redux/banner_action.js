import axios from "axios";


const GETBANNERS = 'GETBANNERS';


export const getBanners = (banners) => {
    return{
        type: GETBANNERS,
        payload: banners
    }
}

export const getBannersAsync = () => {
    return (dispatch) => {
        axios.get('https://alter-backend.herokuapp.com/banner')
        .then(res => {
            dispatch(getBanners(res.data.data.slice(0,3)))
        })
    }
}

const initialstate = []

export default function bannerReducer(state = initialstate, action) {
    switch(action.type) {
        case GETBANNERS:
            return action.payload
        default:
            return state
    }
}