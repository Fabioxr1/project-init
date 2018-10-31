import _ from 'lodash';
import { ACTION_FETCH_POSTS, ACTION_FETCH_POSTID } from '../action';


export default function (state = {}, action) {
    switch (action.type) {
        case ACTION_FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case ACTION_FETCH_POSTID:
            return { ...state, [action.payload.data.id]: action.payload.data }
        default:
            return state;
    }
}