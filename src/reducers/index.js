import { combineReducers } from 'redux';
import Reducer_coin from './reducer_cardano';
import Reducer_post from './reducer_posts';
const rootReducer = combineReducers({
    //state:(state = {}) => state
    altcoin: Reducer_coin,
    posts : Reducer_post
})
export default rootReducer;