import { ADD_ITEM } from "../constants/action-types";
import { REMOVE_ITEM } from "../constants/action-types";

const initialState = {
    items: []
};

function rootReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_ITEM:
            return {
                items: [payload, ...state.items]
            };
        case REMOVE_ITEM:       // IN ACEST CASE NU MA DESCURC
            const newItems = state.items.filter(item => {
                return item !== payload;
            });

            console.log(newItems);

            return{
              items: newItems,
              //   items:[...state.items.filter(length(items) - 1)],
              //   items:[...state.items.pop()],
            };
            // return{
            //     items:[...state.items.slice(action.payload+1)],
            // };
        default:
            return state;
    }
}

export default rootReducer;