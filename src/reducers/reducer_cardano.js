import _ from 'lodash';
import { ACTION_FETCH_COIN, ACTION_CLICK_SORT, ACTION_SET_GRAFIC_COIN } from '../action';

export default function (state = {}, action) {
    switch (action.type) {
        case ACTION_FETCH_COIN:
            return _.mapKeys(action.payload.data, 'id');
        case ACTION_CLICK_SORT:
            const sort = _.sortBy(state,action.event);
           // var sort = _.orderBy(state,action.event)
            //var sort = _.map(_.sortBy(state,action.event));
            return _.mapKeys(sort, 'id');
        case ACTION_SET_GRAFIC_COIN:
            return { ...state, [action.payload.data[0].id]: action.payload.data[0] }
        default:
            return state;
    }
}

//https://github.com/lodash/lodash/issues/2174