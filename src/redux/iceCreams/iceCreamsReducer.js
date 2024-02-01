import { BUY_ICECREAM } from "./iceCreamsTypes";

const inintialState = {
    numOfIceCreams: 5
}

const iceCreamReducer = (state = inintialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
    
        default:
            return state;
    }
}

export default iceCreamReducer