import { ADD_ITEM } from "../constants/action-types";
import { REMOVE_ITEM } from "../constants/action-types";

export const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload
    }
};

export const removeItem = (payload) => {
    return {
        type: REMOVE_ITEM,
        payload: payload
    }
};
